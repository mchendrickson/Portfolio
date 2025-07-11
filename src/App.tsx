import React, {useEffect, useState} from "react";
import Preloader from "./Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Imperius from "./Components/Projects/ProjectPages/Imperius/Imperius";
import ASSISTments from "./Components/Projects/ProjectPages/ASSISTments/ASSISTments";
import BrighamWomensHospital from "./Components/Projects/ProjectPages/BrighamWomensHospital/BrighamWomensHospital";
import Pfivejs from "./Components/Projects/ProjectPages/Pfivejs/Pfivejs";
import Badmin from "./Components/Projects/ProjectPages/Badmin/Badmin";

import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Analytics} from "@vercel/analytics/react";
import FreeBodyDiagramApp from "./Components/Projects/ProjectPages/FreeBodyDiagramApp/FreeBodyDiagramApp";
import CorporateClash from "./Components/Projects/ProjectPages/CorporateClash/CorporateClash";
import {PreloaderProvider} from "./PreloaderContext";

/**
 * Main application component that handles routing, preloader state, and overall app structure.
 * 
 * Manages the loading state with a preloader that displays for 1.2 seconds,
 * provides routing for all pages including individual project pages, and wraps the app
 * in necessary providers for analytics and preloader context.
 * 
 * @returns {JSX.Element} The main application structure with routing and providers
 */
function App() {
    const [load, updateLoad] = useState(true);

    /**
     * Manages the preloader display duration.
     * 
     * Sets a timer to hide the preloader after 1.2 seconds (1200ms) to provide
     * a smooth loading experience for users. The preloader state is used to control
     * CSS classes and prevent scrolling during the loading phase.
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load}/>
            <PreloaderProvider preloaderDone={!load}>
                <div className="App" id={load ? "no-scroll" : "scroll"}>
                    <Analytics/>
                    <Navbar/>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/project" element={<Projects/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                        <Route path="/Imperius" element={<Imperius/>}/>
                        <Route path="/ASSISTments" element={<ASSISTments/>}/>
                        <Route path="/BrighamWomensHospital" element={<BrighamWomensHospital/>}/>
                        <Route path="/pfivejs" element={<Pfivejs/>}/>
                        <Route path="/Badmin" element={<Badmin/>}/>
                        <Route path="/FBDApp" element={<FreeBodyDiagramApp/>}/>
                        <Route path="/CorporateClash" element={<CorporateClash/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </PreloaderProvider>
        </Router>
    );
}

export default App;
