const MWPET = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>MW Petroleum Real Options Valuation </h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/mw-petroleum-real-options-valuation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        This project values MW Petroleum Corporation, an oil and gas producer that Apache Corporation considered acquiring in 1991. We built a full valuation model combining discounted cash flow analysis with an adjusted present value framework, then added a real options layer using Black-Scholes. 
                        
                        The aim was to capture more than the static value of MW's reserves: the value of Apache's ability to wait and develop reserves only when oil prices turn favorable. Our base case puts MW's DCF value at $483.7 million. Once we price in the option to delay development, the value rises by another $48.3 million.

                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        We split MW's reserves into four categories: proved developed, proved undeveloped, probable, and possible. Each gets its own cash flow projection, discounted at a 14.18% unlevered cost of capital from CAPM. 
                        
                        The APV framework separates operating value from financing value, so we calculate debt capacity and tax shields on their own, under a 50% debt-to-value constraint. Then we treat each undeveloped reserve category as a call option: Apache can invest when oil prices are strong and hold off when they are weak. 
                        
                        We price these options with Black-Scholes, using the present value of each category's cash flows as the underlying asset and its development cost as the strike price, and test the results against a range of volatility and time assumptions.
                        
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/mw_petroleum_valuation_report.pdf"
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

export default MWPET;