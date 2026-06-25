import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Albina Ananyan. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:aananyan@ucsd.edu" target="_blank" rel="noopener noreferrer">Email</a>

        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
