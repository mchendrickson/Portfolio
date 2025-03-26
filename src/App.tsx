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

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
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
                        <Route path="/project/Imperius" element={<Imperius/>}/>
                        <Route path="/project/ASSISTments" element={<ASSISTments/>}/>
                        <Route path="/project/BrighamWomensHospital" element={<BrighamWomensHospital/>}/>
                        <Route path="/project/pfivejs" element={<Pfivejs/>}/>
                        <Route path="/project/Badmin" element={<Badmin/>}/>
                        <Route path="/project/FBDApp" element={<FreeBodyDiagramApp/>}/>
                        <Route path="/project/CorporateClash" element={<CorporateClash/>}/>
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
