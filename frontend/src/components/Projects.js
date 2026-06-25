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
              <p> Equity research project evaluating Ferrari N.V. (RACE) during the BEV transition using a 10-year FCFF
                DCF model, WACC analysis, and valuation sensitivity testing.</p>
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
              <p> NLP and supply-chain analysis of NVIDIA's Taiwan dependence using SEC filings, earnings calls, OECD
                ICIO data, and semiconductor industry datasets. </p>
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
              <h2>REIT Return and Volatility Forecasting</h2>
              <p> Forecasting REIT returns and modeling financial volatility using AR, ARCH, and GARCH models in
                Python.</p>
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


          <div className="project-card">
            <div className="project-info">
              <h2>MW Petroleum Real Options Valuation</h2>
              <p> Acquisition valuation of MW Petroleum using DCF, APV, debt-capacity analysis, and Black-Scholes real
                options valuation of undeveloped oil and gas reserves. </p>
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
              <p> Foreign exchange risk management case study evaluating VaR limitations, liquidity risk, and hedging
                strategies during a sterling market disruption. </p>
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
              <h2>Exxon Mobile Mid-Cycle Valuation</h2>
              <p> Equity valuation of ExxonMobil (XOM) using a normalized mid-cycle DCF framework, reinvestment
                modeling, and sensitivity analysis across commodity-cycle assumptions. </p>
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


        </div>
      </main>
    </div>
  );
};

export default Projects;
