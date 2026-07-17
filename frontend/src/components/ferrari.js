
import "./ProjectPage.css";
const FERRARI = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Ferrari Equity Valuation</h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/ferrari-equity-valuation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        Ferrari trades at a premium few automakers can match. The auto industry's shift toward zero-emission vehicles threatens the source of that premium. This project asks whether Ferrari's brand can survive the transition intact, or whether electrification will standardize performance and weaken the emotional differentiation behind its pricing power. 
                        
                        The analysis treats Ferrari less as a car manufacturer and more as a scarcity-driven luxury house, following Damodaran's view that its value rests on styling, speed, story, and scarcity. I built a 10-year discounted cash flow valuation to test this thesis with numbers.

                        The base case values Ferrari's stock well below its March 2026 trading price, a downside of roughly 27%, and supports a short recommendation. A counterargument follows: slowing global EV adoption may give the brand more time than the base case assumes.

                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        The analysis combines industry research with a full financial model.

                        <ul>
                            <li> Research foundation: Draws on IEA and BloombergNEF data on global EV adoption and China's dominance of battery production, plus Bain & Company's luxury goods market outlook, to identify the risks facing Ferrari's brand.</li>

                            <li> Financial modeling: Projects Ferrari's revenue, R&D, EBIT, taxes, invested capital, and working capital from 2026 to 2035, using Ferrari's 2015-2025 financial filings. The model treats the BEV rollout as a transition period, marked by rising BEV mix and margin pressure, followed by a stabilization period at steady-state luxury margins.</li>

                            <li> Valuation: Discounts projected free cash flow to the firm using a WACC built from CAPM (beta, market risk premium, risk-free rate) and a terminal growth rate, producing an intrinsic value per share.</li>

                            <li> Stress testing: Sensitizes the valuation to changes in EBIT margin, beta, terminal growth, and WACC, showing how much the overvaluation conclusion depends on assumptions about brand durability.</li>

                        </ul>

                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/Ferrari (RACE) Report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Open PDF →
                  </a>
              </section>
          </div>


      </div>
    </div>
  );
};

export default FERRARI;