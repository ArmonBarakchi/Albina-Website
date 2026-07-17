const EXXON = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Exxon Mobile Mid-Cycle Valuation </h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/exxonmobil-mid-cycle-valuation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        This project values ExxonMobil (XOM) using a discounted cash flow model built on ten years of data from the company's 10-K filings. Instead of projecting from a single year's results, we normalized Exxon's operating performance to mid-cycle levels, stripping out the 2020 pandemic collapse and the 2022 oil price spike. 
                        
                        The model puts Exxon's enterprise value at $612.4 billion and its intrinsic share price at $145.98, against a market price of $150.68 at the time of the analysis. The two numbers sit close together, which suggests the market already prices in steady margins and disciplined capital spending rather than short-term swings in oil prices.

                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        We gathered revenue, EBIT, capital expenditure, and depreciation figures from Exxon's 10-K filings for 2014 through 2024, then dropped 2020 and 2022 as outlier years. 
                        
                        From the rest we built normalized ratios for EBIT margin, tax rate, and working capital, and projected 2.08% annual revenue growth through 2035.

                  </p>
                  <p>
                        Historical capital spending ran below depreciation, a pattern that would shrink Exxon's asset base rather than support growth. So instead of projecting capital expenditure from history, we derived it from Exxon's growth rate and return on invested capital, then worked backward to reinvestment and capex. 
                        
                        We discounted the resulting free cash flows at a 5.78% weighted average cost of capital, built from CAPM, and applied a 2% terminal growth rate to reach the final valuation. We then stress tested the result against a range of discount rates, growth rates, and beta values to see how much each assumption moves the answer.
                        
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/exxonmobil_valuation_report.pdf"
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

export default EXXON;