import { useState } from "react";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { universityProjects, technicalProjects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("personal");

  // Group university projects by year
  const projectsByYear = universityProjects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  // Sort years in descending order (Year 3, Year 2, Year 1)
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="display-3 fw-bold text-center mb-3">My Projects</h1>
          <p className="lead text-center text-muted mb-5">
            An overview of my academic and personal work
          </p>

          {/* Tabs */}
          <div className="d-flex justify-content-center">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item me-3" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "personal" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("personal")}
                  type="button"
                >
                  <i className="bi bi-code-square me-2"></i>Personal Projects
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "academic" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("academic")}
                  type="button"
                >
                  <i className="bi bi-mortarboard me-2"></i>Academic Projects
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-5">
        <div className="container">
          <div className="tab-content">
            {/* Personal Projects Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "personal" ? "show active" : ""
              }`}
              role="tabpanel"
            >
              <div className="projects-grid">
                {technicalProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Academic Projects Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "academic" ? "show active" : ""
              }`}
              role="tabpanel"
            >
              {sortedYears.map((year) => (
                <div key={year} className="year-section mb-5">
                  <div className="year-header mb-4">
                    <h3 className="year-title">
                      <i className="bi bi-book me-2"></i>Year {year}
                    </h3>
                  </div>
                  <div className="projects-grid">
                    {projectsByYear[year].map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ))}
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
