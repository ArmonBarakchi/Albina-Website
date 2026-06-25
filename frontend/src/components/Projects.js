// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <main className="projects-content">
        <h1>Projects</h1>
        <div className="project-list">

          <div className="project-card">
            <div className="project-info">
              <h2>Ferrari Evauluation</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/ferrari">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/ferrari-equity-valuation"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Nvidia Geopolitical Risk Analysis</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/nvidia">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/nvidia-geopolitical-risk-analysis"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Exxon Mobile Mid-Cycle Valuation</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/exxon">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/exxonmobil-mid-cycle-valuation"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>MW Petroleum Real Options Valuation</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/mwpet">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/mw-petroleum-real-options-valuation"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Foreign Exchange VaR and Liquidity Risk Analysis</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/fx">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/fx-var-and-liquidity-risk-analysis"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>REIT Return and Volatility Forecasting</h2>
              <p> insert description here </p>
              <a className="read-more" href="/project/reit">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/albina-ananyan/reit-volatility-forecasting"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>


        </div>
      </main>
    </div>
  );
};

export default Projects;
