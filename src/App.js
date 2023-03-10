import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Imperius from "./components/Projects/ProjectPages/Imperius";
import ASSISTments from "./components/Projects/ProjectPages/ASSISTments";
import Softeng from "./components/Projects/ProjectPages/Softeng";
import Pfivejs from "./components/Projects/ProjectPages/Pfivejs";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
