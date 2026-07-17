const NVDA = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Nvidia Geopolitical Risk Analysis</h1>

              <a
                  className="github-button"
                  href="https://github.com/albina-ananyan/nvidia-geopolitical-risk-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
              >
                  View the Github →
              </a>


              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                        NVIDIA designs its chips but does not manufacture them. Nearly all of its advanced GPUs come from Taiwan-based foundries, mainly TSMC. 
                        
                        This project measures whether that reliance creates real financial risk, not just a line in a filing. It combines global supply chain data, semiconductor industry statistics, and NVIDIA's own disclosures to test the question directly. 
                        
                        The findings show that Taiwan's share of global semiconductor production has grown for decades and continues to rise. NVIDIA acknowledges this exposure in its 10-K, but speaks of it far less on earnings calls. The risk is structural. It will not fade with the next earnings cycle.
                        
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        The project draws on five sources: NVIDIA's 10-K, its Q3 earnings call transcript, OECD global input-output tables, Taiwan's domestic input-output table, and WSTS semiconductor billing data. 
                        
                        All numerical data sits in a SQL database, which lets the analysis calculate Taiwan's share of global semiconductor value-added and track it from 1995 to 2022. Text from the 10-K and earnings call is pulled from PDF, cleaned, and normalized. 
                        
                        Keyword counts then measure how often NVIDIA mentions terms like China, risk, and geopolitical in each document. Sentiment scores measure the tone of that language. Together, the numbers show where chip production sits today, and the text shows how NVIDIA talks, or does not talk, about the risk that creates.

                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/nvidia_geopolitical_risk_report.pdf"
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

export default NVDA;