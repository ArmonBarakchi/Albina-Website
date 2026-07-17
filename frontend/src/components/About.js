import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
        <div className="about-content">
            <p>
              I'm a quantitative finance candidate with a background in behavioral research, investor communications, and crisis response. I enjoy building rigorous, well-tested valuation models and using AI tools to make investment research faster and sharper. My focus sits at the intersection of quantitative discipline and genuine curiosity about why people and markets behave the way they do.
            </p>
            <p>
              I completed my undergraduate degree at UC San Diego with a B.S. in Business Economics and a minor in Psychology, and I'm currently pursuing a Master of Quantitative Finance at UCSD's Rady School of Management (graduating in December of 2026) while working as an Investment Content Analyst at StepStone Group. 
              The psychology background gives me an edge as a finance analyst; it taught me to look beyond numbers and surface-level statements. Coursework in econometrics, financial modeling, and machine learning has expanded my technical skillset. Working as an EMT has prepared me to make sound judgments quickly with incomplete information, a skill that transfers directly to reading a market in motion. 
              Research has taught me to distrust my first conclusion until I've tested it against the data.                
              </p>
                <p>
                  Some of my favorite things to work on include stress-testing a valuation until I find where it breaks —  whether that's building a DCF for Ferrari that argues against the market consensus or using NLP to check whether a company's SEC filings say something different from what it tells investors on an earnings call. 
                  I'm drawn to the places where finance stops being purely quantitative: behavioral biases in decision-making, the way geopolitics and policy quietly reprice risk, and the moments when models, while technically correct, are not enough. 
                  Lately, I've also been pairing that rigor with AI tooling, building a due diligence pipeline that cuts analyst review time by over 85% without cutting corners on the analysis itself.                    
                  </p>
                    <p>
                      Outside of finance, I dance, kickbox, write, read, and travel every chance I get. I speak Armenian and Russian fluently and Spanish proficiently, and I'm especially interested in emerging markets across Eastern Europe and Central Asia, fueled by my heritage and cultural background. 
                      I'm currently exploring full-time opportunities across private equity, investment banking, consulting, and risk management, particularly roles where currency hedging, behavioral finance, or the intersection of finance and politics come into play.                        
                      </p>


        </div>
    </section>
  );
};

export default About;
