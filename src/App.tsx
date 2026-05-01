import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import ParticleField from "./ParticleField";
import LoadingScreen from "./LoadingScreen";
import ProjectPage from "./pages/ProjectPage";
import { siteContent } from "./siteContent";

const EASE_OUT = "easeOut" as const;
const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const viewportOnce = { once: true, margin: "-80px" as const };
const viewportCards = { once: true, margin: "-60px" as const };

/* ── project slug map ─────────────────────────────────────────────── */
const PROJECT_SLUGS: Record<string, string> = {
  "Shoppyist": "shoppyist",
  "Vision Bucket": "vision-bucket",
  "Python Search Engine": "uci-search",
};

/* ── Home page ────────────────────────────────────────────────────── */
function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsHeaderCompact(window.scrollY > 72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const { nav, hero, availability, about, projects, skillGroups, contact, footer } =
    siteContent;

  const heroVisible = !isLoading;

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className="app-shell" id="home">
        <motion.div className="scroll-progress" style={{ scaleX }} />

        <motion.div
          className="cursor-glow"
          animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
          aria-hidden="true"
        />

        <div className="grid-bg" aria-hidden="true" />
        <div className="ambient-orb ambient-orb--1" aria-hidden="true" />
        <div className="ambient-orb ambient-orb--2" aria-hidden="true" />

        {/* HEADER */}
        <header className={`site-header ${isHeaderCompact ? "site-header--compact" : ""}`}>
          <a className="brand-mark" href="#home">{nav.brand}</a>
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
          {/* HERO */}
          <section className="hero-section">
            <div className="hero-copy">
              <motion.p
                className="section-kicker"
                initial={{ opacity: 0, y: 24 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: EASE_SMOOTH }}
              >
                {hero.titleStart} <em>{hero.titleAccent}</em>
              </motion.h1>
              <motion.p
                className="hero-summary"
                initial={{ opacity: 0, y: 24 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.38, ease: EASE_OUT }}
              >
                {hero.summary}
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.52, ease: EASE_OUT }}
              >
                <a className="button-primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="button-secondary" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </motion.div>
            </div>

            <motion.aside
              className="hero-panel"
              initial={{ opacity: 0, x: 40 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE_OUT }}
              aria-label="Intro details"
            >
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
            </motion.aside>
          </section>

          {/* META STRIP */}
          <motion.section
            className="meta-strip"
            aria-label="Highlights"
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 1.0, ease: EASE_OUT }}
          >
            <div className="tag-row">
              {hero.stack.map((item) => (
                <span key={item} className="tag-chip">{item}</span>
              ))}
            </div>
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {availability}
            </p>
          </motion.section>

          {/* ABOUT */}
          <motion.section
            className="content-section"
            id="about"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            viewport={viewportOnce}
          >
            <div className="section-heading">
              <p className="section-index">01</p>
              <h2>About</h2>
            </div>
            <div className="two-column-layout">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                viewport={{ once: true }}
              >
                <h3 className="feature-heading">
                  {about.headingStart} <em>{about.headingAccent}</em>
                </h3>
              </motion.div>
              <div className="body-copy">
                {about.paragraphs.map((paragraph, i) => (
                  <motion.p
                    key={paragraph}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: EASE_OUT }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            className="content-section"
            id="work"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            viewport={viewportOnce}
          >
            <div className="section-heading">
              <p className="section-index">02</p>
              <h2>Selected Work</h2>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => {
                const slug = PROJECT_SLUGS[project.title];
                return (
                  <motion.article
                    className={`project-card${index === 0 ? " project-card--featured" : ""}`}
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_OUT }}
                    viewport={viewportCards}
                    whileHover={{ y: -8, transition: { duration: 0.22, ease: EASE_OUT } }}
                  >
                    <p className="project-number">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip tag-chip--small">{tag}</span>
                      ))}
                    </div>
                    <div className="project-card__actions">
                      {slug && (
                        <Link to={`/project/${slug}`} className="project-link">
                          Case study →
                        </Link>
                      )}
                      {project.href.startsWith("http") && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {project.linkLabel} ↗
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            className="content-section"
            id="skills"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            viewport={viewportOnce}
          >
            <div className="section-heading">
              <p className="section-index">03</p>
              <h2>Skills &amp; Stack</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, i) => (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_OUT }}
                  viewport={viewportCards}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <p className="skill-card__title">{group.title}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* CONTACT */}
          <motion.section
            className="content-section"
            id="contact"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            viewport={viewportOnce}
          >
            <div className="section-heading">
              <p className="section-index">04</p>
              <h2>Contact</h2>
            </div>
            <div className="two-column-layout">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                viewport={{ once: true }}
              >
                <h3 className="feature-heading">
                  {contact.headingStart} <em>{contact.headingAccent}</em>
                </h3>
                <p className="body-copy body-copy--single">{contact.summary}</p>
              </motion.div>
              <div className="contact-list">
                {contact.links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    className="contact-row"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.09, ease: EASE_OUT }}
                    viewport={{ once: true }}
                    whileHover={{ x: 6, transition: { duration: 0.18 } }}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="site-footer">
          <p>{footer.copy}</p>
          <a href="#home">{footer.backToTopLabel}</a>
        </footer>
      </div>
    </>
  );
}

/* ── Root with routing ────────────────────────────────────────────── */
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
