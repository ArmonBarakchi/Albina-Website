// src/components/Home.js
import React from "react";
import Hero from "./Hero";
import Classes from "./Classes"
import "./Home.css";

//add guides back once you make them

function Home() {
  return (
      <div className="Home">
          <Hero/>
          <hr className="section-divider"/>
          <Classes/>
      </div>
  );
}

export default Home;
