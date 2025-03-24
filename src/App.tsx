import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Imperius from "./components/Projects/ProjectPages/Imperius";
import ASSISTments from "./components/Projects/ProjectPages/ASSISTments";
import Softeng from "./components/Projects/ProjectPages/Softeng";
import Pfivejs from "./components/Projects/ProjectPages/Pfivejs";
import Badmin from "./components/Projects/ProjectPages/Badmin";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Analytics} from "@vercel/analytics/react";
import FreeBodyDiagramApp from "./components/Projects/ProjectPages/FreeBodyDiagramApp";
import CorporateClash from "./components/Projects/ProjectPages/CorporateClash";

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
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Analytics />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/project/Imperius" element={<Imperius/>} />
          <Route path="/project/ASSISTments" element={<ASSISTments/>} />
          <Route path="/project/Softeng" element={<Softeng/>} />
          <Route path="/project/pfivejs" element={<Pfivejs/>} />
          <Route path="/project/badmin" element={<Badmin/>} />
          <Route path="/project/FBDApp" element={<FreeBodyDiagramApp/>} />
          <Route path="/project/CorporateClash" element={<CorporateClash/>} />
          <Route path="/Imperius" element={<Imperius/>} />
          <Route path="/ASSISTments" element={<ASSISTments/>} />
          <Route path="/Softeng" element={<Softeng/>} />
          <Route path="/pfivejs" element={<Pfivejs/>} />
          <Route path="/badmin" element={<Badmin/>} />
          <Route path="/FBDApp" element={<FreeBodyDiagramApp/>} />
          <Route path="/CorporateClash" element={<CorporateClash/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
