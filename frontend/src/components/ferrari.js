
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
                    This project presents a full-stack autonomous quadrotor navigation system that solves the problem of safe waypoint navigation in unknown, obstacle-rich environments using only onboard sensing. The drone discovers them online through a simulated spinning LiDAR and must navigate safely in real time.

Four subsystems are integrated into a layered pipeline running at 500 Hz. A Multiplicative Unscented Kalman Filter on SE(3) fuses noisy IMU and GPS measurements to estimate the drone's position, velocity, attitude, and sensor biases. A simulated 648-ray LiDAR builds a local obstacle map online using MuJoCo raycasting. Real-Time Adaptive A* (RTAA*) replans a collision-free path at 5 Hz using only the current LiDAR map, with no global map required. A Control Barrier Function safety filter runs as a quadratic program at every control step, formally guaranteeing the drone remains outside all detected obstacle safety radii regardless of planning approximation or estimation error.

The result is a complete autonomous navigation stack. The system is validated across four qualitatively distinct maps — a narrow corridor, a dense column forest, a sequence of gate frames, and a rising spiral — demonstrating that the planner and safety filter are both necessary and complementary: RTAA* resolves the local minima that defeat CBF-only navigation, while the CBF catches the safety violations that slip past the planner.


                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                        This project presents a full-stack autonomous quadrotor navigation system that solves the problem of safe waypoint navigation in unknown, obstacle-rich environments using only onboard sensing. The drone discovers them online through a simulated spinning LiDAR and must navigate safely in real time.

                        Four subsystems are integrated into a layered pipeline running at 500 Hz. A Multiplicative Unscented Kalman Filter on SE(3) fuses noisy IMU and GPS measurements to estimate the drone's position, velocity, attitude, and sensor biases. A simulated 648-ray LiDAR builds a local obstacle map online using MuJoCo raycasting. Real-Time Adaptive A* (RTAA*) replans a collision-free path at 5 Hz using only the current LiDAR map, with no global map required. A Control Barrier Function safety filter runs as a quadratic program at every control step, formally guaranteeing the drone remains outside all detected obstacle safety radii regardless of planning approximation or estimation error.

                        The result is a complete autonomous navigation stack. The system is validated across four qualitatively distinct maps — a narrow corridor, a dense column forest, a sequence of gate frames, and a rising spiral — demonstrating that the planner and safety filter are both necessary and complementary: RTAA* resolves the local minima that defeat CBF-only navigation, while the CBF catches the safety violations that slip past the planner.

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