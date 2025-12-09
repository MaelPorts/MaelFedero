import Navigation from "../components/Navigation";
import "../styles/modern.css";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section id="Home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100 pt-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-3">
                  Hi, I'm <span className="gradient-bold-name">Mael Federo</span>
                </h1>
                <p className="lead mb-4">
                  Software Engineer, Web Developer & User Researcher
                </p>
                <p className="mb-4">
                  Building & helping others is what I do best.
                </p>

                <div className="d-flex gap-3 mb-4 social-links">
                  <a
                    href="https://github.com/MaelPorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark rounded-pill"
                  >
                    <i className="bi bi-github me-2"></i>GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mael-federo-38629429a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary rounded-pill"
                  >
                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                  </a>
                </div>

                <div className="d-flex gap-3 main-cta-buttons d-lg-flex d-none mt-5">
                  <a
                    href="/projects"
                    className="btn btn-dark btn-lg rounded-pill px-4"
                  >
                    Explore My Work <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image">
                <img
                  src="/image.jpg"
                  alt="Profile Picture"
                  className="img-fluid"
                  style={{
                    maxWidth: "450px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                    boxShadow: "none",
                    border: "none",
                  }}
                />
              </div>

              <div className="d-flex gap-3 mt-5 d-lg-none mobile-cta-buttons justify-content-center">
                <a
                  href="/projects"
                  className="btn btn-dark btn-lg rounded-pill px-4"
                >
                  Explore My Work <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section id="Academics" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-5 fw-bold">Academic Journey</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Overall Degree Classification */}
              <div className="row g-4 degree-classification-card">
                <div className="col-md-8 mx-auto">
                  <div className="card border-0 shadow-sm">
                    <div className="card-header bg-dark text-white">
                      <h4 className="card-title mb-0">
                        Overall Degree Classification
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                            <span className="fw-semibold">
                              BSc (Hons) Software Engineering
                            </span>
                            <span className="badge bg-dark fs-6">2:1</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                            <span className="fw-semibold">Overall GPA</span>
                            <span className="badge bg-dark fs-6">3.05</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                {/* Year 3 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-header bg-dark text-white text-center">
                      <h4 className="card-title mb-0">Year 3</h4>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Dissertation Study</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Software Engineering Culture</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Usability Testing</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Project Management</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-header bg-dark text-white text-center">
                      <h4 className="card-title mb-0">Year 2</h4>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Database Principles</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Web Programming</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Usability Engineering</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-center align-items-center p-3 bg-light rounded">
                            <span>Data Structures & Algorithms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-5 fw-bold">About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text fs-5">
                        Hi, I'm <span className="gradient-bold-name">Mael Federo</span>, a Software Engineering graduate
                        from the University of Portsmouth. I've been passionate
                        about technology since childhood, from exploring how
                        computers work to building my first HTML pages at 11.
                      </p>

                      <p className="card-text fs-5">
                        Throughout my degree, I developed strong skills in
                        full-stack development, database management, and
                        user-centred design. I'm driven by curiosity and a
                        desire to build clean, intuitive solutions.
                      </p>

                      <p className="card-text fs-5">
                        Beyond coding, I love football, gaming, and
                        self-improvement - always striving to learn, grow, and
                        help others along the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section id="Certifications" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-5 fw-bold">
                Certifications & Awards
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-4">
                {/* Award 1 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-award-fill text-primary fs-2 me-3"></i>
                        <div>
                          <h5 className="card-title">
                            Hacking 4 MoD Foundation Module
                          </h5>
                          <p className="text-muted mb-2">Ministry of Defence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Award 2 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-award-fill text-primary fs-2 me-3"></i>
                        <div>
                          <h5 className="card-title">
                            Undergraduate Personal Achievement Award
                          </h5>
                          <p className="text-muted mb-2">
                            University of Portsmouth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certification 1 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-award-fill text-primary fs-2 me-3"></i>
                        <div>
                          <h5 className="card-title">
                            JavaScript Algorithms and Data Structures
                          </h5>
                          <p className="text-muted mb-2">freeCodeCamp</p>
                          <p className="card-text">
                            Completed comprehensive training in JavaScript
                            fundamentals, ES6, algorithms, and data structures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certification 2 */}
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-award-fill text-primary fs-2 me-3"></i>
                        <div>
                          <h5 className="card-title">Responsive Web Design</h5>
                          <p className="text-muted mb-2">freeCodeCamp</p>
                          <p className="card-text">
                            Mastered responsive web design principles, HTML5,
                            CSS3, and accessibility best practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">© 2025 Mael Federo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
