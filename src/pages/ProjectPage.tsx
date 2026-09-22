import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectById, projectDetails } from "../data/projectDetails";
import ProjectVisual from "../ProjectVisual";
import "../styles/ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id ?? "");
  useEffect(() => {
    document.title = project
      ? `${project.title} — Thomas Tran`
      : "Project not found — Thomas Tran";
  }, [project]);
  if (!project)
    return (
      <section className="not-found">
        <h1>Project not found</h1>
        <p>This project isn’t in the portfolio.</p>
        <Link className="text-link" to="/#work">
          ← Back to projects
        </Link>
      </section>
    );
  const next =
    projectDetails[
      (projectDetails.indexOf(project) + 1) % projectDetails.length
    ];
  return (
    <article className="project-page">
      <Link className="text-link project-back" to="/#work">
        ← All projects
      </Link>
      <header className="project-heading">
        <p className="eyebrow">
          {project.date} · {project.role}
        </p>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.links
          .filter((link) => link.href !== "#")
          .map((link, index) => (
            <a
              className={
                index === 0 ? "button-primary" : "text-link project-source"
              }
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel="noreferrer"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
      </header>
      {project.demoNote && (
        <aside className="demo-note">
          <h2>Try the demo</h2>
          <p>{project.demoNote}</p>
        </aside>
      )}
      <div className="project-banner">
        <ProjectVisual id={project.id} />
      </div>
      {project.artworkCredit && (
        <p className="artwork-credit">{project.artworkCredit}</p>
      )}
      <section className="detail-section">
        <h2>Overview</h2>
        <p>{project.overview}</p>
        <div className="problem-solution">
          <div>
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div>
            <h3>The approach</h3>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>
      <section className="detail-section">
        <h2>What I built</h2>
        <div className="feature-grid">
          {project.features.map((feature) => (
            <div key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="detail-section">
        <h2>Under the hood</h2>
        <p className="detail-intro">
          A closer look at how the pieces fit together.
        </p>
        <div className="architecture-list">
          {project.architecture.map((layer) => (
            <details key={layer.layer}>
              <summary>{layer.layer}</summary>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>
      <section className="detail-section">
        <h2>Results &amp; takeaways</h2>
        <ul className="achievement-list">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <nav className="project-footer-nav" aria-label="Project navigation">
        <Link className="text-link" to="/#work">
          ← All projects
        </Link>
        <Link className="text-link" to={`/project/${next.id}`}>
          Next: {next.title} →
        </Link>
      </nav>
    </article>
  );
}
