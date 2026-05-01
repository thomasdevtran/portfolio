export const siteContent = {
  nav: {
    brand: "Thomas Tran",
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Software Engineer · UC Irvine 2026",
    titleStart: "Building digital work that feels",
    titleAccent: "intentional.",
    summary:
      "Hey, I'm Thomas — a full-stack engineer who cares as much about the code as the experience it creates. I build fast, reliable web applications from the browser all the way to the backend.",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: { label: "About me", href: "#about" },
    panelBlurb:
      "Building production-grade web apps — from Chrome extensions and React SPAs to serverless backends and data pipelines.",
    facts: [
      "Based in Anaheim, CA",
      "Available for full-time or freelance",
      "B.S. Software Engineering, UC Irvine",
      "Full-stack, systems, and browser extension dev",
      "Cat person (meowdy 🐱)",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vue.js",
      "Node.js",
      "Python",
      "Cloudflare Workers",
    ],
  },
  availability: "Open to opportunities",
  about: {
    headingStart: "Builder first,",
    headingAccent: "always learning.",
    paragraphs: [
      "I'm a Software Engineering student at UC Irvine (Class of 2026), focused on building web applications that are technically rigorous and intuitively designed. My coursework spans Data Structures & Algorithms, Computer Networks, Database Management, and Operating Systems.",
      "My projects range from architecting multi-context Chrome extensions with type-safe messaging systems to building serverless Cloudflare Workers backends and high-performance Python search engines. I care about performance, clean code, and user experience equally.",
      "I'm currently open to full-time software engineering roles. If you're building something that demands both technical depth and thoughtful design, let's talk.",
    ],
  },
  projects: [
    {
      title: "Shoppyist",
      description:
        "Architected a Chrome extension suite (Manifest V3) using Vue 3 + TypeScript with a type-safe messaging system coordinating background workers, content scripts, and popup views. Built a Cloudflare Workers backend with MongoDB handling click tracking, telemetry, and an ETL pipeline that enables 7+ political/ethical stances from a single codebase.",
      tags: ["Vue.js", "TypeScript", "Cloudflare Workers", "MongoDB", "Firebase", "Chrome MV3"],
      href: "#",
      linkLabel: "View project",
    },
    {
      title: "Vision Bucket",
      description:
        "Led full-stack development with a React/TypeScript frontend and Node.js/Express backend. Engineered a secure RESTful API with user authentication as the core data foundation, and improved page load performance by 25% through code splitting and lazy loading.",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
      href: "https://github.com/trollbro71/vision_bucket",
      linkLabel: "View on GitHub",
    },
    {
      title: "Python Search Engine",
      description:
        "Built a high-performance search engine indexing 50,000+ documents with sub-500ms query latency. Custom inverted index reduced memory footprint by 40% and kept the full index under 500MB, backed by an automated web crawler for data population.",
      tags: ["Python", "Algorithms", "Web Crawling", "Information Retrieval"],
      href: "https://github.com/trollbro71/UCI-websearch",
      linkLabel: "View on GitHub",
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["TypeScript / JavaScript", "Python", "Java", "C / C++ / Rust"],
    },
    {
      title: "Frontend",
      items: ["React", "Vue.js", "HTML & CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Node.js / Express", "Cloudflare Workers", "REST APIs", "Firebase"],
    },
    {
      title: "Data & Cloud",
      items: ["MongoDB / MySQL / PG", "AWS S3", "Docker", "Git & CI/CD"],
    },
  ],
  contact: {
    headingStart: "Let's make your next",
    headingAccent: "idea real.",
    summary:
      "I'm always open to interesting projects and opportunities. Reach out through any of these channels.",
    links: [
      {
        label: "Email",
        value: "toemasu1452@gmail.com",
        href: "mailto:toemasu1452@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/trollbro71",
        href: "https://github.com/trollbro71",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/ThomasTran1452",
        href: "https://www.linkedin.com/in/ThomasTran1452",
      },
      { label: "Resume", value: "Download PDF", href: "#" },
    ],
  },
  footer: {
    copy: "© 2026 Thomas Tran. Built with React & Framer Motion.",
    backToTopLabel: "Back to top ↑",
  },
};
