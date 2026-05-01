import React from "react";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectArchLayer {
  layer: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  role: string;
  tags: string[];
  links: ProjectLink[];
  overview: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  architecture: ProjectArchLayer[];
  achievements: string[];
  mockup: React.ReactNode;
}

/* ─── Placeholder mockup components ──────────────────────────────── */

function ShoppyistMockup() {
  return (
    <div className="mockup-shell">
      {/* Browser chrome */}
      <div className="mockup-browser">
        <div className="mockup-browser__bar">
          <span className="mockup-browser__dot" />
          <span className="mockup-browser__dot" />
          <span className="mockup-browser__dot" />
          <div className="mockup-browser__url">amazon.com/product/...</div>
        </div>
        <div className="mockup-browser__body">
          {/* Fake product page */}
          <div className="mockup-product">
            <div className="mockup-product__img" />
            <div className="mockup-product__info">
              <div className="mockup-line mockup-line--wide" />
              <div className="mockup-line" />
              <div className="mockup-line mockup-line--short" style={{ background: "rgba(240,109,47,0.6)" }} />
              <div className="mockup-line mockup-line--short" />
              <div className="mockup-btn" />
            </div>
          </div>
          {/* Floating badge */}
          <div className="mockup-badge">
            <div className="mockup-badge__ring">
              <div className="mockup-badge__score">68</div>
            </div>
            <div className="mockup-badge__label">Eco Score</div>
            <div className="mockup-badge__actions">
              <div className="mockup-badge__stay">Stay</div>
              <div className="mockup-badge__go">Go →</div>
            </div>
          </div>
        </div>
      </div>
      {/* Alternatives panel */}
      <div className="mockup-panel">
        <div className="mockup-panel__title">Better alternatives</div>
        {[{ name: "EcoShop", score: 91 }, { name: "GreenMart", score: 84 }, { name: "NatureBox", score: 79 }].map(alt => (
          <div className="mockup-alt" key={alt.name}>
            <div className="mockup-alt__logo" />
            <div className="mockup-alt__name">{alt.name}</div>
            <div className="mockup-alt__score" style={{ color: "#5ad77f" }}>{alt.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionBucketMockup() {
  const movies = ["Action", "Drama", "Sci-Fi", "Thriller", "Comedy", "Horror"];
  const statuses = ["Watching", "Completed", "Plan to Watch", "On Hold"];
  const statusColors = ["#f06d2f", "#5ad77f", "#a99f8e", "#e8c84a"];
  return (
    <div className="mockup-shell mockup-shell--vb">
      {/* Nav bar */}
      <div className="mockup-nav">
        <div className="mockup-nav__brand">VisionBucket</div>
        <div className="mockup-nav__links">
          {["Discover", "My List", "Reviews", "Forum"].map(l => (
            <div key={l} className="mockup-nav__link">{l}</div>
          ))}
        </div>
        <div className="mockup-nav__avatar" />
      </div>
      {/* Genre header */}
      <div className="mockup-genre-row">
        {movies.slice(0, 4).map((g, i) => (
          <div key={g} className={`mockup-genre-chip ${i === 0 ? "mockup-genre-chip--active" : ""}`}>{g}</div>
        ))}
      </div>
      {/* Movie grid */}
      <div className="mockup-movie-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="mockup-movie-card">
            <div className="mockup-movie-card__poster" style={{
              background: `linear-gradient(135deg, hsl(${i * 40}, 40%, 20%), hsl(${i * 40 + 60}, 30%, 10%))`
            }} />
            <div className="mockup-movie-card__status" style={{ color: statusColors[i % 4] }}>
              {statuses[i % 4]}
            </div>
            <div className="mockup-line mockup-line--short" style={{ marginTop: "0.4rem" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function UCISearchMockup() {
  const results = [
    { title: "CS 121 - Information Retrieval", url: "ics.uci.edu/~djp3/classes/2024_01_INF141", snippet: "Course page for Information Retrieval at UCI. Covers web crawling, indexing, and ranking algorithms..." },
    { title: "ICS Faculty - Donald J. Patterson", url: "ics.uci.edu/~djp3", snippet: "Professor of Teaching in Informatics at UCI. Research interests include ubiquitous computing..." },
    { title: "Bren School of Information & Computer Sciences", url: "ics.uci.edu", snippet: "The Donald Bren School of ICS at UC Irvine is the only computing school in the UC system..." },
  ];
  return (
    <div className="mockup-shell mockup-shell--search">
      <div className="mockup-search-header">
        <div className="mockup-search-logo">UCI Search</div>
        <div className="mockup-search-bar">
          <span className="mockup-search-bar__icon">⌕</span>
          <span className="mockup-search-bar__text">information retrieval algorithms</span>
          <div className="mockup-search-bar__btn">Search</div>
        </div>
        <div className="mockup-search-meta">About 50,247 results (0.38 seconds)</div>
      </div>
      <div className="mockup-results">
        {results.map((r, i) => (
          <div key={i} className="mockup-result">
            <div className="mockup-result__url">{r.url}</div>
            <div className="mockup-result__title">{r.title}</div>
            <div className="mockup-result__snippet">{r.snippet}</div>
          </div>
        ))}
      </div>
      {/* Stats bar */}
      <div className="mockup-stats">
        <div className="mockup-stat"><span className="mockup-stat__num">50K+</span><span>pages indexed</span></div>
        <div className="mockup-stat"><span className="mockup-stat__num">&lt;500ms</span><span>query time</span></div>
        <div className="mockup-stat"><span className="mockup-stat__num">−40%</span><span>memory saved</span></div>
      </div>
    </div>
  );
}

/* ─── Project detail data ─────────────────────────────────────────── */

export const projectDetails: ProjectDetail[] = [
  {
    id: "shoppyist",
    title: "Shoppyist",
    subtitle: "A Chrome extension suite that scores brands by their alignment with social and political issues — sustainability, pro-choice, gun rights, and more.",
    date: "October 2025",
    role: "Sole Engineer — architected and built the full system",
    tags: ["Vue.js", "TypeScript", "Cloudflare Workers", "MongoDB", "Firebase", "Chrome MV3", "Tailwind CSS", "Vite"],
    links: [
      { label: "Case Study", href: "#", external: false },
    ],
    overview:
      "Shoppyist is a platform of Chrome extensions (Manifest V3) that shows users how well brands and companies align with specific social or political issues. Each extension focuses on a single issue — sustainability, pro-choice, gun rights, labor rights — built from one shared codebase. When a user visits a supported site, a floating badge displays the company's score (0–100) and suggests better-aligned alternatives with affiliate links.",
    problem:
      "Conscious consumers want to shop in alignment with their values, but researching a brand's practices across dozens of issues for every purchase is impractical. Existing rating systems are scattered, require separate lookups, and don't surface actionable alternatives in the moment of decision.",
    solution:
      "Inject a non-intrusive floating badge directly into the shopping page using a Chrome content script with Shadow DOM isolation. The badge reads the current domain, looks up its score from a pre-built static bundle (no network call needed), and offers one-click navigation to better-aligned alternatives via an affiliate-tracked link. A Cloudflare Workers backend handles click telemetry, referral validation, and redirect compliance.",
    features: [
      {
        title: "Multi-issue, single codebase",
        description:
          "Eight distinct extension versions (sustainability, pro-choice, gun rights, labor, etc.) are all built from the same codebase via environment variables (VITE_ISSUE_SLUG). Each issue gets its own branding, color palette, icons, and score bundle generated at build time.",
      },
      {
        title: "Type-safe Chrome messaging",
        description:
          "A custom generic message-passing layer using TypeScript discriminated unions ensures every message between the background service worker, content script, and popup is fully typed — eliminating an entire class of runtime bugs common in extensions.",
      },
      {
        title: "Local-first, zero-latency scores",
        description:
          "Scores are bundled as static JSON at build time via an ETL pipeline (MongoDB → generate-issue-data.ts → per-issue bundles). No network request is needed to show a score — the content script has everything it needs at injection time.",
      },
      {
        title: "Affiliate & telemetry compliance",
        description:
          "Loyalize affiliate tracking follows a 3-tier suppression ruleset — checking URL parameters, referrer chains, and cookies before applying tracking. A redirect-tracker service worker intercepts navigation to detect affiliate network pass-throughs.",
      },
      {
        title: "Firebase authentication",
        description:
          "Full auth flow including email/password signup, Google OAuth via chrome.identity, email verification, and password reset — all inside the extension's side panel with route guards protecting authenticated views.",
      },
      {
        title: "Cloudflare Workers backend",
        description:
          "Serverless edge endpoints handle /logClick, /logTelemetry, /validateReferral, and /r (redirect) — deployed globally with MongoDB durable storage and Firebase Admin token verification.",
      },
    ],
    architecture: [
      {
        layer: "Content Script",
        items: [
          "Injects into every HTTP/HTTPS page via Shadow DOM (style isolation)",
          "ScoreBadgeIcon.vue — animated SVG ring fill, color-coded by threshold",
          "Draggable badge anchored to right edge, position persisted in chrome.storage",
          "Dispatches score/alternatives/click messages to background worker",
        ],
      },
      {
        layer: "Background Service Worker",
        items: [
          "Registry-based message router (score, auth, tracking, preferences handlers)",
          "Chrome alarm-based periodic sync every 1–5 min for telemetry and click batches",
          "Redirect-tracker service: intercepts navigation to flag affiliate chains",
          "Badge text + color updated on every tab navigation",
        ],
      },
      {
        layer: "Panel UI (Vue 3)",
        items: [
          "Memory-history Vue Router (no URL changes inside extension)",
          "Auth-guarded routes: OnboardingView → LoginView → MainView",
          "MainView: score breakdown, explanation text, alternatives list",
          "SettingsView: cashback toggle, telemetry opt-out, referral code, theme",
        ],
      },
      {
        layer: "Data Layer",
        items: [
          "MongoDB export → scripts/generate-issue-data.ts → per-issue JSON bundles",
          "StaticRepository (prod) reads bundled JSON; MockRepository (dev) uses fixtures",
          "Cloudflare Workers API client wraps fetch with typed request/response",
        ],
      },
    ],
    achievements: [
      "Built 8-issue multi-theme build system from a single shared codebase",
      "Zero-latency score lookup via local-first static data bundling",
      "100% data retention during network outages (local-first sync strategy)",
      "Type-safe cross-context Chrome messaging eliminates runtime message bugs",
      "Loyalize affiliate compliance across 20+ approved merchants",
    ],
    mockup: <ShoppyistMockup />,
  },

  {
    id: "vision-bucket",
    title: "Vision Bucket",
    subtitle: "A full-stack movie and TV show social platform for discovering, tracking, and reviewing content with friends.",
    date: "March 2024",
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase", "TMDB API", "React Router"],
    links: [
      { label: "View on GitHub", href: "https://github.com/trollbro71/vision_bucket", external: true },
    ],
    overview:
      "Vision Bucket is a social web application for tracking and discussing movies and TV shows. Users can browse thousands of titles via the TMDB API, mark content with granular watch statuses, write reviews with star ratings, and engage with a community forum split into general discussions and industry news threads.",
    problem:
      "Existing watch-tracking apps (Letterboxd, Trakt) are either too focused on film criticism or lack the social/forum component that drives discovery through conversation. Keeping a personal list, reading community reviews, and following industry discussions all required jumping between separate platforms.",
    solution:
      "Build a unified React SPA backed by Firebase (auth + Firestore) and the TMDB API, giving users a single destination for discovery, personal tracking, reviewing, and discussion. A Node.js/Express API layer handles data processing and serves as the authoritative source for user-generated content.",
    features: [
      {
        title: "TMDB-powered discovery",
        description:
          "Genre-filtered movie carousels powered by The Movie Database API with responsive layouts (1–4 cards visible depending on viewport). Direction-aware slide animations using modulo arithmetic for infinite cycling.",
      },
      {
        title: "Five-status watch tracking",
        description:
          "Each piece of content can be marked Watching, Completed, On Hold, Dropped, or Plan to Watch — stored as separate Firestore document arrays per user for efficient per-status queries. Status badges are color-coded and visible across the app.",
      },
      {
        title: "Community reviews",
        description:
          "Star-rated reviews with full Firestore persistence. Users can read all community reviews for a title or view their own review history from their profile page.",
      },
      {
        title: "Discussion forums",
        description:
          "Two separate boards — General (recommendations, discussions) and News (industry updates) — with threaded posts and user attribution.",
      },
      {
        title: "Firebase authentication",
        description:
          "Firebase Auth powers sign-up, login, and session management. onAuthStateChanged hooks keep user state reactive across tabs without polling.",
      },
      {
        title: "Responsive design",
        description:
          "Breakpoint detection via window.resize events drives column count and staggered animation delays on grid items, optimized for mobile (<700px), tablet (<1024px), and desktop.",
      },
    ],
    architecture: [
      {
        layer: "Frontend (React + TypeScript)",
        items: [
          "React 18.2 with TypeScript — React Router DOM for client-side navigation",
          "Page components: Discover, MovieDetail, Profile, Reviews, Forum, Auth",
          "Carousel component: modulo-based infinite cycle, direction-aware CSS transitions",
          "Axios HTTP client with typed API response interfaces",
        ],
      },
      {
        layer: "Backend (Node.js / Express)",
        items: [
          "RESTful API: authentication middleware, route handlers for movies/shows/reviews",
          "Firebase Admin SDK for server-side token verification",
          "Data processing layer normalizes TMDB responses for client consumption",
        ],
      },
      {
        layer: "Data & Auth",
        items: [
          "Firebase Firestore: user documents with nested watch-status arrays",
          "TMDB API: movie data, posters, ratings — API key + Bearer token auth",
          "localStorage: persists movie/show lists client-side for instant re-renders",
        ],
      },
    ],
    achievements: [
      "25% improvement in page load performance via code splitting and lazy loading",
      "Infinite-scroll carousel with direction-aware animations and no third-party carousel library",
      "Firestore data model supports efficient per-status queries across large watch lists",
      "Unified platform covering discovery, tracking, reviews, and community discussion",
    ],
    mockup: <VisionBucketMockup />,
  },

  {
    id: "uci-search",
    title: "Python Search Engine",
    subtitle: "A high-performance web crawler and inverted-index search engine capable of indexing and querying 50,000+ documents at sub-500ms latency.",
    date: "May 2024",
    role: "Systems Engineer (Academic — UCI CS 121)",
    tags: ["Python", "Information Retrieval", "Algorithms", "Web Crawling", "BeautifulSoup", "Threading"],
    links: [
      { label: "View on GitHub", href: "https://github.com/trollbro71/UCI-websearch", external: true },
    ],
    overview:
      "A ground-up implementation of a web crawler and search engine built for UCI's Information Retrieval course (CS 121). The system crawls the UCI ICS domain, tokenizes and indexes content using a custom inverted index, deduplicates near-identical pages with simhashing, and answers free-text queries in under 500ms across a 50,000+ document corpus.",
    problem:
      "General-purpose search engines are black boxes. Building one from scratch forces you to confront the full complexity of information retrieval: the crawling politeness problem, near-duplicate detection at scale, memory-efficient index structures, and the latency vs. completeness trade-off in ranking.",
    solution:
      "Implement a modular pipeline: a multi-threaded frontier-based crawler with per-domain politeness queuing, a content extractor with stopword removal and TF-IDF weighting, a simhash deduplicator for near-duplicate detection, and a compressed inverted index that fits under 500MB while indexing tens of thousands of documents.",
    features: [
      {
        title: "Distributed frontier crawler",
        description:
          "A thread-pool-based crawler pulls URLs from a persistent frontier queue. Each worker downloads via UCI's spacetime cache server protocol, respecting per-domain politeness delays. Progress is saved to disk — the crawl can be paused and resumed without losing state.",
      },
      {
        title: "Custom inverted index",
        description:
          "Tokens from each page are weighted (TF-IDF), stopwords removed, and stored in a memory-efficient inverted index. The full index for 50K+ documents compresses under 500MB — a 40% memory reduction vs. a naïve implementation.",
      },
      {
        title: "Simhash deduplication",
        description:
          "Many ICS pages share near-identical content (mirrored calendars, paginated lists). A simhash fingerprint is computed for each page and compared against a seen-set before indexing, preventing near-duplicates from diluting results.",
      },
      {
        title: "Sub-500ms query latency",
        description:
          "At query time, token lookup into the inverted index is O(1) per term. Posting list intersection and TF-IDF ranking are computed in memory, keeping end-to-end latency well under 500ms across the full 50K document corpus.",
      },
      {
        title: "URL filtering & politeness",
        description:
          "An is_valid() filter rejects URLs by extension (images, PDFs, binaries) and domain (restricted to ics.uci.edu subdomains). Per-domain politeness queues enforce configurable delays between requests to avoid hammering servers.",
      },
      {
        title: "Token frequency analysis",
        description:
          "The scraper accumulates the top 300 tokens across the entire crawl corpus, logging them to TOKEN.LOG. This enables linguistic analysis of the ICS domain's vocabulary and validates index quality.",
      },
    ],
    architecture: [
      {
        layer: "Crawler (crawler/)",
        items: [
          "Orchestrator spawns N worker threads from a configurable thread pool",
          "Frontier: URL queue with visited-set deduplication, disk-persistent for pause/resume",
          "Workers: download via spacetime cache protocol, hand response to scraper",
          "Factory-pattern injection: swap Frontier/Worker implementations without touching core",
        ],
      },
      {
        layer: "Scraper (scraper.py)",
        items: [
          "BeautifulSoup HTML parsing: strips scripts/styles, extracts visible text and links",
          "Tokenizer: lowercases, removes non-alphanumeric, filters stopwords",
          "Simhash: 64-bit fingerprint per document, near-duplicate threshold comparison",
          "is_valid(): extension and domain filtering before any download is attempted",
        ],
      },
      {
        layer: "Index & Query",
        items: [
          "Inverted index: maps token → [(doc_id, tf_idf_weight), ...]",
          "Posting list merge: AND-query via sorted pointer walk on multiple lists",
          "Ranking: cosine similarity over TF-IDF vectors",
          "Index serialized to disk; loaded once at server start for query serving",
        ],
      },
    ],
    achievements: [
      "Indexed 50,000+ documents across the UCI ICS domain",
      "Sub-500ms query latency on the full corpus",
      "40% memory footprint reduction vs. naïve inverted index — full index under 500MB",
      "Simhash deduplication prevents near-duplicate inflation of search results",
      "Pause/resume capability via disk-persistent frontier state",
    ],
    mockup: <UCISearchMockup />,
  },
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.id === id);
}
