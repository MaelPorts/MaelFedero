export default function ProjectCard({ project }) {
  return (
    <div className="project-card fade-in">
      <div className="project-card-header">
        <h5 className="project-card-title">{project.title}</h5>
        {project.year && (
          <p className="project-card-subtitle">Year: {project.year}</p>
        )}
      </div>
      <div className="project-card-body">
        <p className="project-description">{project.description}</p>

        {project.technologies && (
          <div className="skills-container">
            <strong className="d-block mb-2">Technologies:</strong>
            <div>
              {project.technologies.split(",").map((tech, index) => (
                <span key={index} className="skill-tag">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.skills && (
          <div className="skills-container">
            <strong className="d-block mb-2">Skills:</strong>
            <div>
              {project.skills.split(",").map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="d-flex gap-2 mt-3">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-dark"
            >
              <i className="bi bi-github me-1"></i>GitHub
            </a>
          )}
          {project.live_demo_url && (
            <a
              href={project.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
