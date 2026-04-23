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
              <p>Simultaneous Localization and Mapping Via Extended Kalman Filters</p>
              <a className="read-more" href="/project/VISLAM">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/Visual-Inertial-Slam/tree/main"
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
