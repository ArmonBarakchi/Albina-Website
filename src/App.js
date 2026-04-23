// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import C from './components/C';
import Python from './components/Python';
import Undergraduate from './components/Undergraduate';
import Numpy from './components/Numpy';
import Pandas from './components/Pandas';
import LineBot from './components/LineBot'
import Transcriptomic from './components/Transcriptomic'
import E6 from './components/E6'
import Options from './components/Options'
import Orientation from "./components/Orientation";
import Hybridwealt from "./components/hybridwealth";
import LIDAR from "./components/LIDAR"
import VISLAM from "./components/VISLAM"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />


        <Route path="/project/VISLAM" element ={<VISLAM />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
