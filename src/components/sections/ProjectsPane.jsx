import { projects } from "../../data/projects";

function ProjectsPane({ isActive, onFocus }) {
  return (
    <section
      className={`pane ${isActive ? "focused" : ""}`}
      onClick={onFocus}
      tabIndex={0}
    >
      <div className="pane-header">
        <span className="pane-id">2:</span>
        <span className="pane-title">projects</span>
      </div>
      <div className="pane-body">
        <div className="card-grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="card-tech">{p.tech.join(" · ")}</p>
              <a href={p.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPane;
