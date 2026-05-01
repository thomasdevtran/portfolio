import { useEffect, useState } from "react";
import "./App.css";
import ParticleField from "./ParticleField";
import { siteContent } from "./siteContent";

function App() {
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCompact(window.scrollY > 72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    nav,
    hero,
    availability,
    about,
    projects,
    skillGroups,
    contact,
    footer,
  } = siteContent;

  return (
    <div className="app-shell" id="home">
      <div className="grid-bg" aria-hidden="true" />

      <header className={`site-header ${isHeaderCompact ? "site-header--compact" : ""}`}>
        <a className="brand-mark" href="#home">
          {nav.brand}
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="section-kicker">{hero.eyebrow}</p>
            <h1>
              {hero.titleStart} <em>{hero.titleAccent}</em>
            </h1>
            <p className="hero-summary">{hero.summary}</p>
            <div className="hero-actions">
              <a className="button-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="button-secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Intro details">
            <ParticleField />
            <div className="panel-card panel-card--intro">
              <span className="panel-label">Current focus</span>
              <p>{hero.panelBlurb}</p>
            </div>
            <div className="panel-card">
              <span className="panel-label">Quick facts</span>
              <ul className="fact-list">
                {hero.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="meta-strip" aria-label="Highlights">
          <div className="tag-row">
            {hero.stack.map((item) => (
              <span key={item} className="tag-chip">
                {item}
              </span>
            ))}
          </div>
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            {availability}
          </p>
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="section-index">01</p>
            <h2>About</h2>
          </div>
          <div className="two-column-layout">
            <div>
              <h3 className="feature-heading">
                {about.headingStart} <em>{about.headingAccent}</em>
              </h3>
            </div>
            <div className="body-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="work">
          <div className="section-heading">
            <p className="section-index">02</p>
            <h2>Selected Work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <p className="project-number">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip tag-chip--small">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.href}>{project.linkLabel}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="section-index">03</p>
            <h2>Skills &amp; Stack</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <p className="skill-card__title">{group.title}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <div className="section-heading">
            <p className="section-index">04</p>
            <h2>Contact</h2>
          </div>
          <div className="two-column-layout">
            <div>
              <h3 className="feature-heading">
                {contact.headingStart} <em>{contact.headingAccent}</em>
              </h3>
              <p className="body-copy body-copy--single">{contact.summary}</p>
            </div>
            <div className="contact-list">
              {contact.links.map((link) => (
                <a key={link.label} className="contact-row" href={link.href}>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{footer.copy}</p>
        <a href="#home">{footer.backToTopLabel}</a>
      </footer>
    </div>
  );
}

export default App;
