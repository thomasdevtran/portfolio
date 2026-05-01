import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projectDetails";
import "../styles/ProjectPage.css";

const EASE_OUT = "easeOut" as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id ?? "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!project) {
    return (
      <div className="pp-not-found">
        <p>Project not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    );
  }

  return (
    <div className="pp-shell">
      {/* ── BACK NAV ── */}
      <motion.div
        className="pp-back-wrap"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <Link to="/" className="pp-back">
          ← Back to portfolio
        </Link>
      </motion.div>

      {/* ── HERO ── */}
      <motion.header
        className="pp-hero"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
      >
        <div className="pp-hero__meta">
          <span className="pp-kicker">{project.date}</span>
          <span className="pp-kicker pp-kicker--sep">·</span>
          <span className="pp-kicker">{project.role}</span>
        </div>
        <h1 className="pp-title">{project.title}</h1>
        <p className="pp-subtitle">{project.subtitle}</p>
        <div className="pp-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag-chip tag-chip--small">{t}</span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="pp-links">
            {project.links.map((l) => (
              <a
                key={l.label}
                className="button-primary"
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {l.label} {l.external ? "↗" : ""}
              </a>
            ))}
          </div>
        )}
      </motion.header>

      {/* ── MOCKUP / PLACEHOLDER ── */}
      <motion.div
        className="pp-mockup-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT }}
      >
        <div className="pp-mockup-label">UI Preview</div>
        {project.mockup}
      </motion.div>

      {/* ── OVERVIEW ── */}
      <motion.section
        className="pp-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="pp-section-title"><span>01</span>Overview</h2>
        <p className="pp-body">{project.overview}</p>
      </motion.section>

      {/* ── PROBLEM / SOLUTION ── */}
      <motion.section
        className="pp-section pp-two-col"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="pp-callout pp-callout--problem">
          <div className="pp-callout__label">Problem</div>
          <p>{project.problem}</p>
        </div>
        <div className="pp-callout pp-callout--solution">
          <div className="pp-callout__label">Solution</div>
          <p>{project.solution}</p>
        </div>
      </motion.section>

      {/* ── FEATURES ── */}
      <motion.section
        className="pp-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="pp-section-title"><span>02</span>Key Features</h2>
        <div className="pp-features">
          {project.features.map((f, i) => (
            <motion.div
              key={f.title}
              className="pp-feature"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
              viewport={{ once: true }}
            >
              <div className="pp-feature__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="pp-feature__title">{f.title}</h3>
              <p className="pp-feature__desc">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── ARCHITECTURE ── */}
      <motion.section
        className="pp-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="pp-section-title"><span>03</span>Architecture</h2>
        <div className="pp-arch">
          {project.architecture.map((layer, i) => (
            <motion.div
              key={layer.layer}
              className="pp-arch-layer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
              viewport={{ once: true }}
            >
              <div className="pp-arch-layer__name">{layer.layer}</div>
              <ul className="pp-arch-layer__items">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── ACHIEVEMENTS ── */}
      <motion.section
        className="pp-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="pp-section-title"><span>04</span>Results & Achievements</h2>
        <div className="pp-achievements">
          {project.achievements.map((a, i) => (
            <motion.div
              key={a}
              className="pp-achievement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_OUT }}
              viewport={{ once: true }}
            >
              <span className="pp-achievement__icon">✓</span>
              <span>{a}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── FOOTER NAV ── */}
      <div className="pp-footer-nav">
        <Link to="/" className="pp-back">← Back to all projects</Link>
      </div>
    </div>
  );
}
