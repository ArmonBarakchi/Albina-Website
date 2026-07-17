const REIT = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>REIT Return and Volatility Forecasting</h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/reit-volatility-forecasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        This project asks two questions from financial econometrics: can we predict REIT returns, and can we forecast how volatile an asset will be? The first part tests whether monthly REIT returns can be predicted from their own past values or from the dividend yield, using FTSE NAREIT index data spanning 1971 to 2020. 
                        
                        The second part models the volatility of three very different assets, the S&P 500, the Euro/USD exchange rate, and the oil and gas sector, using ARCH and GARCH models. The aim is to measure how strongly volatility clusters over time and how well these models track real, realized volatility.

                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        The REIT analysis begins by cleaning the raw return and dividend data, then fits autoregressive models of order 1, 2, and 12 to test for predictability. 
                        
                        It checks the dividend yield as a return predictor, using Newey-West standard errors to correct for the yield's strong persistence, and applies the Stambaugh (1999) correction to remove bias that creeps in when a predictor barely changes from period to period. I also split the sample into two eras to see whether the relationship holds steady over time. 
                        
                        The volatility analysis fits ARCH and GARCH models to daily and monthly returns for each asset, runs Engle's test to confirm that volatility really does cluster, and compares model fit with likelihood ratio tests. I then check each model's conditional volatility against realized volatility, computed directly from squared daily returns, and measure how long a volatility shock takes to fade using each model's persistence estimate.
                        
                  </p>
              </section>


          </div>


      </div>
    </div>
  );
};

export default REIT;