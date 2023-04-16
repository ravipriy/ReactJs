import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewEvent from "./components/NewEvent";



import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Youtube from "./components/Youtube";

import About from "./components/About";
import Request from "./components/Request";
import ARbrosofficial from "./components/ARbrosofficial";
import ARbrosHub from "./components/ARbrosHub";
import HelpSection from "./components/HelpSection";
import Movieshub from "./components/Movieshub";
import Webserieshub from "./components/Webserieshub";
import Unrated from "./components/Unrated";

import Joingroup from "./components/Joingroup";
import BannerQuotation from "./components/BannerQuotation";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); //useState for darkmode
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  return (
    <Router>
      
      <Navbar mode={mode} alert={alert} />
      <NewEvent mode={mode} toggleMode={toggleMode}/>
      <BannerQuotation mode={mode}/>
      {/* <Home mode={mode} toggleMode={toggleMode}/> */}
    
      <Routes>
        <Route exact path="/" element={<Home mode={mode} />} />
        <Route exact path="/youtube" element={<Youtube mode={mode}/>}/>
        <Route exact path="/request" element={<Request mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/arbrosofficial" element={<ARbrosofficial mode={mode}/>}/>
        <Route exact path="/arbroshub" element={<ARbrosHub mode={mode}/>}/>
        <Route exact path="/helpsection" element={<HelpSection mode={mode}/>}/>
        <Route exact path="/armovieshub" element={<Movieshub mode={mode}/>}/>
        <Route exact path="/arwebserieshub" element={<Webserieshub mode={mode}/>}/>
        <Route exact path="/unratedseries" element={<Unrated mode={mode}/>}/>
        <Route exact path="/joingroup" element={<Joingroup mode={mode}/>}/>
      </Routes>
      <Footer mode={mode}/>
      
      
    </Router>
    
  );
}

export default App;
