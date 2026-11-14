export const siteContent = {
  profile: {
    location: "Anaheim, California",
    intro:
      "I’m a software engineer and UC Irvine graduate, pursuing a part-time master’s in Computer Science at Cal State Fullerton. I build full-stack applications with a focus on performance, reliability, and the people using them.",
    about: [
      "I’m Thomas, a software engineer based in Anaheim, California. I graduated from UC Irvine with a B.S. in Software Engineering in March 2026 and am pursuing a part-time M.S. in Computer Science at Cal State Fullerton, expected May 2028.",
      "My work spans browser extensions, full-stack web applications, and search systems. I enjoy taking a project from its first working version through the security, testing, and performance improvements that make it ready for real users.",
      "I’m open to software engineering opportunities and relocation.",
    ],
  },
  resume: {
    href: `${process.env.PUBLIC_URL}/Thomas-Tran-Resume.pdf`,
    label: "Résumé",
    filename: "Thomas-Tran-Resume.pdf",
  },
  education: [
    {
      school: "California State University, Fullerton",
      degree: "M.S. Computer Science · Part-time",
      date: "Expected May 2028",
      note: "Fullerton, California",
    },
    {
      school: "University of California, Irvine",
      degree: "B.S. Software Engineering",
      date: "March 2026",
      note: "Dean’s Honor List · Spring 2025, Winter 2026",
    },
  ],
  experience: [
    {
      company: "Shoppyist",
      role: "Software Engineer · Industry Capstone",
      date: "Sep 2025 – Mar 2026",
      context: "UC Irvine industry partnership · Irvine, CA",
      highlights: [
        "Helped develop and ship a TypeScript Chrome extension to 500+ users, contributing from initial development through production release.",
        "Reduced page load time from about 1 second to under 500 ms by precomputing MongoDB telemetry into static JSON for 15+ product configurations.",
        "Resolved integration race conditions by redesigning message passing between background service workers and content scripts.",
        "Co-built a Cloudflare Workers and MongoDB backend for click tracking, with offline write buffering and synchronization when connectivity returns.",
      ],
      projectId: "shoppyist",
    },
  ],
  leadership: {
    title: "Eagle Scout & Senior Patrol Leader",
    organization: "Troop 413",
    date: "2016 – 2022",
    description:
      "Led a 25-person troop and organized an Eagle Scout service project.",
  },
  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  availability: "Open to opportunities",
  projects: [
    {
      id: "block-by-cube",
      category: "Live website · Full-stack application",
      title: "Block by Cube",
      summary:
        "Plan real-life cube crafts from 1,100+ Minecraft items and blocks, plus player skins. Follow 3D build guides and save progress across devices with a private cloud library.",
      tags: ["Vue 3", "TypeScript", "Supabase", "PostgreSQL", "Three.js"],
      primaryHref: "https://www.blockbycube.com/",
      primaryLabel: "Visit website",
      note: "Browse freely · Optional accounts for private cloud saves",
      featured: true,
    },
    {
      id: "vision-bucket",
      category: "Live demo · Full-stack application",
      title: "Vision Bucket",
      summary:
        "Discover films, track a watchlist, and write reviews. Explore a React/Express platform with collaborative lists, API authorization, integration tests, and safe data migrations.",
      tags: ["React", "TypeScript", "Express", "Firestore"],
      primaryHref: "https://thomasdevtran.github.io/vision_bucket/#/",
      primaryLabel: "Try live demo",
      note: "No sign-in needed · Demo activity stays in your browser",
      featured: true,
    },
    {
      id: "shoppyist",
      category: "Industry capstone · Browser extension",
      title: "Shoppyist",
      summary:
        "A shopping extension shipped to 500+ users. Helped improve load times and build reliable messaging and a backend that buffers writes while offline.",
      tags: ["TypeScript", "Cloudflare Workers", "MongoDB"],
      primaryHref: "",
      primaryLabel: "",
      note: "Industry capstone · Shipped to 500+ users",
      featured: false,
    },
    {
      id: "uci-search",
      category: "Search & information retrieval",
      title: "Search Engine & Web Crawler",
      summary:
        "Ranked search across 50,000+ documents, with average queries below 500 ms. Built a multithreaded crawler and a memory-efficient indexing pipeline.",
      tags: ["Python", "TF-IDF", "Web Crawling"],
      primaryHref: "https://github.com/thomasdevtran/UCI-websearch",
      primaryLabel: "View crawler source",
      note: "50,000+ documents · Average queries below 500 ms",
      featured: false,
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["TypeScript / JavaScript", "Python", "SQL", "Java"],
    },
    {
      title: "Web & backend",
      items: [
        "React / Vue 3",
        "Three.js / Vite",
        "Chrome Extensions (Manifest V3)",
        "Node.js / Express / REST APIs",
        "Cloudflare Workers / Vercel Functions",
      ],
    },
    {
      title: "Data & tools",
      items: [
        "Supabase / PostgreSQL",
        "MongoDB / Firestore",
        "Firebase Auth / Redis",
        "Git / GitHub Actions",
        "Linux",
      ],
    },
    {
      title: "Testing",
      items: [
        "Vitest / Jest",
        "Supertest",
        "PGlite / Firebase emulators",
        "Unit & integration testing",
      ],
    },
  ],
  contact: {
    links: [
      {
        label: "Email",
        value: "toemasu1452@gmail.com",
        href: "mailto:toemasu1452@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/thomasdevtran",
        href: "https://github.com/thomasdevtran",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/ThomasTran1452",
        href: "https://www.linkedin.com/in/ThomasTran1452",
      },
    ],
  },
};
