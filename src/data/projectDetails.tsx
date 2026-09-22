export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  role: string;
  tags: string[];
  links: { label: string; href: string; external?: boolean }[];
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  architecture: { layer: string; items: string[] }[];
  achievements: string[];
  demoNote?: string;
  artworkCredit?: string;
}

// The supplied résumé is the source for roles, dates, links, and outcome figures.
export const projectDetails: ProjectDetail[] = [
  {
    id: "block-by-cube",
    title: "Block by Cube",
    subtitle:
      "A creative tool that turns Minecraft items, blocks, and player skins into step-by-step guides for real-life cube crafts.",
    date: "Live website",
    role: "Web development",
    tags: ["Vue", "TypeScript", "Three.js", "Vite", "Vitest", "Vercel"],
    links: [
      {
        label: "Visit website",
        href: "https://www.blockbycube.com/",
        external: true,
      },
      {
        label: "View source",
        href: "https://github.com/thomasdevtran/minecraft_block_by_block",
        external: true,
      },
    ],
    overview:
      "Block by Cube helps people make Minecraft-inspired crafts from physical cubes. Choose an item, block, or player skin, then follow a guide with a paint palette, material count, and build steps. The live site is free to explore without an account.",
    problem:
      "A reference image alone leaves makers counting pixels, estimating materials, and keeping track of each row or layer while they build.",
    solution:
      "Convert image pixels into cubes, group colors into a paint palette, and generate row-by-row or layer-by-layer instructions. Pair the written steps with 2D grids and interactive 3D previews, and save progress on the current device.",
    features: [
      {
        title: "Searchable build catalog",
        description:
          "Browse items, blocks, and plants, search by name, and switch between current and older textures. Starter projects provide a quick way into a first build.",
      },
      {
        title: "Material lists & guided steps",
        description:
          "Each guide includes paint colors and cube counts, followed by painting and assembly instructions with an enlarged view of the current row.",
      },
      {
        title: "Player skin builds",
        description:
          "Turn a player skin into layer-by-layer instructions for each body part. Uploaded skin files stay local to the browser.",
      },
      {
        title: "2D & 3D previews",
        description:
          "Use a 2D grid or an interactive Three.js voxel preview. The 3D viewer loads separately so it does not block the written guide.",
      },
      {
        title: "Progress, print & share",
        description:
          "Resume saved progress on the same device, print a complete guide, or share a link that preserves the item’s build settings.",
      },
      {
        title: "Testable generation engine",
        description:
          "The image-to-cubes, paint-palette, and step-generation logic lives in a standalone TypeScript engine with unit tests.",
      },
    ],
    architecture: [
      {
        layer: "Frontend",
        items: [
          "Vue and TypeScript with Vue Router",
          "Searchable catalog and guided build views",
          "2D step grid and lazily loaded Three.js voxel preview",
        ],
      },
      {
        layer: "Build Engine",
        items: [
          "Pure TypeScript image-to-cubes pipeline",
          "Paint-palette and step generation",
          "Unit tests with Vitest",
        ],
      },
      {
        layer: "Assets & Persistence",
        items: [
          "Extracted textures and a generated item catalog",
          "Local storage for build progress and preferences",
          "Uploaded skin images remain in the browser",
          "Vercel function for player-skin lookups through Mojang",
        ],
      },
    ],
    achievements: [
      "Published a usable craft-planning tool at blockbycube.com",
      "Connected a searchable catalog to materials, build steps, and previews",
      "Supported both item crafts and player-skin builds",
      "Added saved progress, printable guides, and shareable build settings",
    ],
    artworkCredit:
      "Minecraft textures and game artwork belong to Mojang Studios. Block by Cube is an independent fan project, not an official Minecraft product.",
  },
  {
    id: "shoppyist",
    title: "Shoppyist",
    subtitle:
      "A TypeScript Chrome extension shipped to 500+ users through a UC Irvine industry partnership.",
    date: "Sep 2025 – Mar 2026",
    role: "Software Engineer · Industry Capstone",
    tags: [
      "TypeScript",
      "Chrome Extensions",
      "Cloudflare Workers",
      "MongoDB",
      "Static JSON",
    ],
    links: [],
    overview:
      "Working with engineers and data scientists, I contributed to Shoppyist from initial development through production release. My work focused on extension performance, communication between browser contexts, and a backend for click tracking with support for offline writes.",
    problem:
      "Runtime API calls added load time, integration race conditions affected coordination between browser contexts, and click tracking needed to handle interruptions in connectivity.",
    solution:
      "Precompute MongoDB telemetry into static JSON, redesign message passing between background service workers and content scripts, and buffer backend writes while offline before synchronizing when connectivity returns.",
    features: [
      {
        title: "Precomputed product data",
        description:
          "Prepared static JSON from MongoDB telemetry for 15+ product configurations, reducing the work required at runtime.",
      },
      {
        title: "Cross-context messaging",
        description:
          "Redesigned message passing and coordinated state between background service workers and content scripts to resolve integration race conditions.",
      },
      {
        title: "Click-tracking backend",
        description:
          "Built a Cloudflare Workers and MongoDB backend to handle click-tracking data.",
      },
      {
        title: "Offline write buffering",
        description:
          "Buffered writes when connectivity was unavailable and synchronized them when the connection returned.",
      },
    ],
    architecture: [
      {
        layer: "Content Script",
        items: [
          "Coordinates state with background service workers",
          "Uses redesigned message passing to address integration race conditions",
        ],
      },
      {
        layer: "Background Service Workers",
        items: [
          "Coordinates extension state across browser contexts",
          "Exchanges messages with content scripts",
        ],
      },
      {
        layer: "Data & Backend",
        items: [
          "MongoDB telemetry precomputed into static JSON for 15+ product configurations",
          "Cloudflare Workers and MongoDB click-tracking backend",
          "Offline write buffering and synchronization on reconnection",
        ],
      },
    ],
    achievements: [
      "Contributed to a production release reaching 500+ users",
      "Reduced runtime API calls by 20%",
      "Reduced page load time from about 1 second to under 500 ms",
      "Supported 15+ product configurations with precomputed data",
      "Resolved integration race conditions in extension messaging",
    ],
  },
  {
    id: "vision-bucket",
    title: "Vision Bucket",
    subtitle:
      "A full-stack movie platform with watch tracking, ratings, profiles, and discussion boards.",
    date: "Full-stack project",
    role: "Full-Stack Developer",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Firestore",
      "Firebase Auth",
      "Supertest",
      "GitHub Actions",
    ],
    links: [
      {
        label: "Try live demo",
        href: "https://thomasdevtran.github.io/vision_bucket/#/",
        external: true,
      },
      {
        label: "About the live demo",
        href: "https://thomasdevtran.github.io/vision_bucket/#/about",
        external: true,
      },
      {
        label: "Frontend source",
        href: "https://github.com/thomasdevtran/vision_bucket",
        external: true,
      },
      {
        label: "Backend source",
        href: "https://github.com/thomasdevtran/vision_bucket_backend",
        external: true,
      },
    ],
    overview:
      "Vision Bucket began as a team project for movie tracking, ratings, profiles, and discussion. I extended it with backend security, tests, and continuous integration, adding the checks and tooling needed to maintain the application with more confidence.",
    demoNote:
      "Try it without signing in: find a film, save it to your library, add a rating or review, and reply to a discussion. Film data comes live from TMDB through the movie API. Your activity stays in this browser; the demo does not demonstrate server-side user authentication. The repositories document the full backend implementation.",
    artworkCredit:
      "Film poster artwork is provided by The Movie Database (TMDB). Vision Bucket uses the TMDB API but is not endorsed or certified by TMDB.",
    problem:
      "User-generated content needs access controls that restrict edits to authorized users. Backend changes also need repeatable integration checks, documented endpoints, and a safe way to evolve stored data.",
    solution:
      "Verify Firebase ID tokens, enforce roles and resource ownership, and run Supertest and Firebase-emulator integration tests in CI. Add a reversible Firestore migration, OpenAPI documentation, rate limiting, and structured request logging.",
    features: [
      {
        title: "Movie tracking & community",
        description:
          "Built a React and Express application for movie tracking, ratings, profiles, and discussion boards.",
      },
      {
        title: "Authentication & authorization",
        description:
          "Implemented Firebase ID-token verification, role-based authorization, and resource ownership checks to restrict edits to authorized users.",
      },
      {
        title: "Integration tests in CI",
        description:
          "Added Supertest and Firebase-emulator integration tests to the continuous integration workflow.",
      },
      {
        title: "Backend maintenance tools",
        description:
          "Added a reversible Firestore migration and OpenAPI documentation, alongside rate limiting and structured request logging.",
      },
    ],
    architecture: [
      {
        layer: "Frontend",
        items: [
          "React and TypeScript interface",
          "Movie tracking, ratings, profiles, and discussion boards",
        ],
      },
      {
        layer: "Backend & Data",
        items: [
          "Node.js and Express API with Firestore",
          "Firebase ID-token verification",
          "Role-based authorization and resource ownership checks",
          "Rate limiting and structured request logging",
        ],
      },
      {
        layer: "Testing & Maintenance",
        items: [
          "Supertest and Firebase-emulator integration tests in CI",
          "Reversible Firestore migration",
          "OpenAPI documentation",
        ],
      },
    ],
    achievements: [
      "Extended the original team project with backend security, testing, and CI",
      "Restricted edits through token verification, role checks, and resource ownership",
      "Added automated integration tests using Supertest and Firebase emulators",
      "Documented the API and added a reversible data migration",
    ],
  },
  {
    id: "uci-search",
    title: "Search Engine & Web Crawler",
    subtitle:
      "A Python search and crawling system covering 50,000+ documents with average query latency below 500 ms.",
    date: "Information retrieval project",
    role: "Developer",
    tags: [
      "Python",
      "Information Retrieval",
      "TF-IDF",
      "Web Crawling",
      "Multithreading",
    ],
    links: [
      {
        label: "Crawler source",
        href: "https://github.com/thomasdevtran/UCI-websearch",
        external: true,
      },
    ],
    overview:
      "Built ranked search over 50,000+ documents using tokenization, stemming, and TF-IDF scoring. A multithreaded crawler collects pages, while partial indexes and on-disk merging keep the indexing process memory-efficient.",
    problem:
      "Collecting and searching a large set of web pages requires both a controlled crawler and an indexing approach that manages memory use while keeping queries fast.",
    solution:
      "Combine URL canonicalization, deduplication, domain filtering, politeness controls, and restartable crawler state with partial indexes, on-disk merging, and TF-IDF ranking.",
    features: [
      {
        title: "Ranked retrieval",
        description:
          "Tokenization, stemming, and TF-IDF scoring support ranked search across more than 50,000 documents.",
      },
      {
        title: "Memory-efficient indexing",
        description:
          "Partial indexes and on-disk merging reduced indexing memory use by 40% and kept the final index below 500 MB.",
      },
      {
        title: "Multithreaded crawling",
        description:
          "Built a crawler with URL canonicalization, deduplication, domain filtering, and politeness controls.",
      },
      {
        title: "Restartable state",
        description:
          "The crawler retains restartable state so collection can continue after an interruption.",
      },
    ],
    architecture: [
      {
        layer: "Crawler",
        items: [
          "Multithreaded page collection",
          "URL canonicalization, deduplication, and domain filtering",
          "Politeness controls and restartable state",
        ],
      },
      {
        layer: "Indexing",
        items: [
          "Tokenization and stemming",
          "Partial indexes and on-disk merging",
          "Final index below 500 MB",
        ],
      },
      {
        layer: "Query & Ranking",
        items: [
          "TF-IDF scoring over 50,000+ documents",
          "Average query latency below 500 ms",
        ],
      },
    ],
    achievements: [
      "Ranked search over 50,000+ documents",
      "Average query latency below 500 ms",
      "40% reduction in indexing memory use",
      "Final index below 500 MB",
      "Collected 50,000+ pages using a multithreaded crawler",
    ],
  },
];
export function getProjectById(id: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.id === id);
}
