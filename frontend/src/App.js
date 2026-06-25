// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import FERRARI from "./components/ferrari";
import NVDA from "./components/nvda";
import EXXON from "./components/exxon";
import MWPET from "./components/mwpet";
import FX from "./components/fx";
import REIT from "./components/reit";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/project/ferrari" element ={<FERRARI />} />
        <Route path="/project/nvidia" element ={<NVDA />} />
        <Route path="/project/exxon" element ={<EXXON />} />
        <Route path="/project/mwpet" element ={<MWPET />} />
        <Route path="/project/fx" element ={<FX />} />
        <Route path="/project/reit" element ={<REIT />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
