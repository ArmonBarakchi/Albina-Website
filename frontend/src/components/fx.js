const FX = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Foreign Exchange VaR and Liquidity Risk Analysis</h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/fx-var-and-liquidity-risk-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        This project analyzes the 1995 Crédit Général, S.A. case, in which a bank guaranteed a price on a £1 billion currency trade, only to watch the sterling market evaporate mid-execution. 
                        
                        I trace how a routine value-at-risk model failed to warn of the actual loss, and recommend how the bank should handle its remaining £700 million exposure overnight.

                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        I calculate one-day and ten-day VaR from three years of historical price data, then compare these figures against the realized and unrealized losses the bank actually took. 
                        
                        The gap between the two reveals what VaR captures and what it misses: price volatility, not liquidity risk. From there, I weigh five ways to cut the exposure, from full liquidation to holding the position overnight, and run a sensitivity analysis across liquidation sizes to find the split between spot sales and a cross-currency hedge that cuts tail risk without excessive execution cost.
                        
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/credit_general_risk_management_memo.pdf"
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

export default FX;