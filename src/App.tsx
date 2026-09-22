import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { siteContent } from "./siteContent";
import ProjectPage from "./pages/ProjectPage";
import ProjectVisual from "./ProjectVisual";
import "./App.css";

function HomePage() {
  const {
    profile,
    projects,
    skillGroups,
    contact,
    education,
    experience,
    leadership,
    resume,
  } = siteContent;
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · UC Irvine</p>
          <h1 id="intro-title">
            Hi, I’m <span>Thomas.</span>
          </h1>
          <p className="hero-description">
            I build thoughtful web experiences,
            <br className="desktop-break" /> from the interface to the
            infrastructure.
          </p>
          <p className="hero-summary">{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/#work">
              Explore my work <span aria-hidden="true">↓</span>
            </Link>
            {contact.links.slice(1, 3).map((link) => (
              <a
                className="text-link"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="profile-block">
          <div
            className="portrait-placeholder"
            role="img"
            aria-label="Placeholder for Thomas Tran’s headshot"
          >
            <span className="portrait-initials">TT</span>
            <span className="portrait-caption">Headshot coming soon</span>
          </div>
          <p className="location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </p>
        </div>
      </section>
      <section
        className="content-section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I’ve built</p>
            <h2 id="work-title">Selected projects</h2>
          </div>
          <span className="section-note">
            Explore the live sites or read how they’re built
          </span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.featured ? " project-card--live" : ""}`}
              key={project.id}
            >
              {project.featured ? (
                <a
                  className="project-image-link"
                  href={project.primaryHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live site`}
                >
                  <ProjectVisual id={project.id} />
                </a>
              ) : (
                <Link
                  className="project-image-link"
                  to={`/project/${project.id}`}
                  aria-label={`Read about ${project.title}`}
                >
                  <ProjectVisual id={project.id} />
                </Link>
              )}
              <div className="project-card-body">
                <p className="project-category">{project.category}</p>
                <h3>
                  <Link to={`/project/${project.id}`}>
                    {project.title} <span aria-hidden="true">↗</span>
                  </Link>
                </h3>
                <p className="project-description">{project.summary}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <p className="project-note">{project.note}</p>
                <div className="project-actions">
                  {project.primaryHref && (
                    <a
                      className={
                        project.featured ? "button-primary" : "text-link"
                      }
                      href={project.primaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.primaryLabel} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <Link className="text-link" to={`/project/${project.id}`}>
                    {project.primaryHref ? "Case study" : "Read case study"}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="content-section experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Building for real users</p>
            <h2 id="experience-title">Experience</h2>
          </div>
        </div>
        {experience.map((job) => (
          <article className="experience-entry" key={job.company}>
            <div className="experience-meta">
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <p className="entry-date">{job.date}</p>
              <p className="entry-context">{job.context}</p>
            </div>
            <div>
              <ul className="experience-highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/project/${job.projectId}`}>
                More about the project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section
        className="content-section about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">A little background</p>
          <h2 id="about-title">About me</h2>
          <p className="personal-note">
            <svg
              viewBox="0 0 40 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M8 15 7 3l10 7h6L33 3l-1 12c8 19-32 19-24 0Z" />
              <path d="M14 18h1m10 0h1m-8 5 2 2 2-2M2 20l9 2m-8 5 8-2m18-3 9-2m-9 5 8 2" />
            </svg>
            Cat person. Always curious.
          </p>
        </div>
        <div className="about-copy">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="availability">
            <span aria-hidden="true" />
            {siteContent.availability}
          </p>
        </div>
      </section>
      <section
        className="content-section education-section"
        id="education"
        aria-labelledby="education-title"
      >
        <div>
          <p className="eyebrow">Where I’ve learned</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="education-list">
          {education.map((school) => (
            <article className="education-detail" key={school.school}>
              <div className="education-top">
                <div>
                  <h3>{school.school}</h3>
                  <p>{school.degree}</p>
                </div>
                <span className="education-year">{school.date}</span>
              </div>
              <p className="education-note">{school.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="content-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tools I work with</p>
            <h2 id="skills-title">Skills &amp; technologies</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section
        className="content-section leadership-section"
        aria-labelledby="leadership-title"
      >
        <div>
          <p className="eyebrow">Beyond the code</p>
          <h2 id="leadership-title">Leadership</h2>
        </div>
        <div className="leadership-detail">
          <div className="education-top">
            <div>
              <h3>{leadership.title}</h3>
              <p>{leadership.organization}</p>
            </div>
            <span className="education-year">{leadership.date}</span>
          </div>
          <p>{leadership.description}</p>
        </div>
      </section>
      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p>
            I’m open to software engineering roles and interesting projects.
            <br className="desktop-break" /> I’d love to hear what you’re
            working on.
          </p>
          <a className="contact-email" href={contact.links[0].href}>
            {contact.links[0].value} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-socials">
          <a
            className="text-link"
            href={resume.href}
            download={resume.filename}
          >
            {resume.label} <span aria-hidden="true">↓</span>
          </a>
          {contact.links
            .slice(1)
            .filter((link) => link.href !== "#")
            .map((link) => (
              <a
                className="text-link"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView();
      if (hash === "#main") target?.focus({ preventScroll: true });
    } else window.scrollTo({ top: 0, behavior: "auto" });
    if (pathname === "/") document.title = "Thomas Tran — Software Engineer";
  }, [pathname, hash, key]);
  return (
    <div className="site-shell" id="home">
      <Link className="skip-link" to={`${pathname}#main`}>
        Skip to content
      </Link>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Thomas Tran home">
          tt<span>.</span>
        </Link>
        <nav aria-label="Main navigation">
          {siteContent.nav.links.map((link) => (
            <Link key={link.href} to={`/${link.href}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-contact"
          href={siteContent.resume.href}
          download={siteContent.resume.filename}
        >
          {siteContent.resume.label} <span aria-hidden="true">↓</span>
        </a>
      </header>
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>Page not found</h1>
                <p>Let’s get you back to the portfolio.</p>
                <Link className="text-link" to="/">
                  Back to home →
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Thomas Tran</p>
        <span>Made with care, and React.</span>
        <Link to={`${pathname}#home`}>
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </footer>
    </div>
  );
}
export default App;
