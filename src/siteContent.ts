export const siteContent = {
  profile: {
    location: "Anaheim, California",
    intro:
      "I’m a software engineer and UC Irvine graduate, pursuing a part-time master’s in Computer Science at Cal State Fullerton. I build full-stack applications with a focus on performance, reliability, and the people using them.",
    about: [
      "I’m Thomas, a software engineer based in Anaheim, California. I graduated from UC Irvine with a B.S. in Software Engineering in March 2026 and am pursuing a part-time M.S. in Computer Science at Cal State Fullerton, expected May 2028.",
      "My work spans browser extensions, full-stack web applications, and search systems. I enjoy taking a project from its first working version through the security, testing, and performance improvements that make it ready for real users.",
      "I’m open to software engineering opportunities and relocation within California.",
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
        "Shipped a TypeScript Chrome extension to 500+ users, collaborating with engineers and data scientists from initial development through production release.",
        "Reduced runtime API calls by 20% and page load time from about 1 second to under 500 ms by precomputing MongoDB telemetry into static JSON for 15+ product configurations.",
        "Resolved integration race conditions by redesigning message passing between background service workers and content scripts.",
        "Built a Cloudflare Workers and MongoDB backend for click tracking, with offline write buffering and synchronization when connectivity returns.",
      ],
      projectId: "shoppyist",
    },
  ],
  leadership: {
    title: "Eagle Scout & Senior Patrol Leader",
    organization: "Troop 413",
    date: "2016 – 2022",
    description:
      "Led a 25-person troop and coordinated 30 volunteers for an Eagle Scout service project, managing logistics, budget, and stakeholders.",
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
      id: "vision-bucket",
      category: "Live demo · Full-stack application",
      title: "Vision Bucket",
      summary:
        "Discover films, build a watchlist, write reviews, and join discussions. Try the no-sign-in demo, then explore the security, testing, and API work behind it.",
      tags: ["React", "TypeScript", "Express", "Firestore"],
      primaryHref: "https://thomasdevtran.github.io/vision_bucket/#/",
      primaryLabel: "Try live demo",
      note: "No sign-in needed · Demo activity stays in your browser",
      featured: true,
    },
    {
      id: "block-by-cube",
      category: "Live website · Creative tool",
      title: "Block by Cube",
      summary:
        "Turn Minecraft items, blocks, and player skins into real-life cube crafts. Get paint palettes, material counts, and step-by-step guides with 2D and 3D previews.",
      tags: ["Vue", "TypeScript", "Three.js"],
      primaryHref: "https://www.blockbycube.com/",
      primaryLabel: "Visit website",
      note: "Free build guides · No account needed",
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
      items: ["TypeScript / JavaScript", "Python", "Java", "C / C++", "SQL"],
    },
    {
      title: "Web & backend",
      items: ["React", "Node.js / Express", "Cloudflare Workers", "REST APIs"],
    },
    {
      title: "Data & tools",
      items: [
        "MongoDB / Firestore",
        "PostgreSQL / Firebase Auth",
        "Docker",
        "Git / GitHub Actions",
      ],
    },
    {
      title: "Testing",
      items: [
        "Jest / Pytest",
        "Supertest",
        "Firebase emulators",
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
