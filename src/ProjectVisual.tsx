/** Project artwork composed from live-site assets; not product screenshots. */
export default function ProjectVisual({ id }: { id: string }) {
  if (id === "vision-bucket")
    return (
      <div
        className="project-visual live-artwork vision-artwork"
        aria-hidden="true"
      >
        <div className="artwork-heading">
          <span>Vision Bucket</span>
          <small>DISCOVER · TRACK · DISCUSS</small>
        </div>
        <div className="poster-artwork">
          {["film-one", "film-two", "film-three"].map((name) => (
            <img
              src={`${process.env.PUBLIC_URL}/projects/${name}.webp`}
              alt=""
              width="150"
              height="225"
              loading="lazy"
              key={name}
            />
          ))}
        </div>
        <span className="live-site-caption">
          A place for films and the conversations after.
        </span>
      </div>
    );
  if (id === "block-by-cube")
    return (
      <div
        className="project-visual live-artwork block-artwork"
        aria-hidden="true"
      >
        <div className="artwork-heading">
          <span>Block by Cube</span>
          <small>FROM PIXELS TO YOUR SHELF</small>
        </div>
        <div className="cube-artwork">
          {["rose", "diamond-sword", "emerald"].map((name) => (
            <div className="pixel-tile" key={name}>
              <img
                src={`${process.env.PUBLIC_URL}/projects/${name}.png`}
                alt=""
                width="96"
                height="96"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <span className="live-site-caption">
          Pick a build. Get your paints. Make it yours.
        </span>
      </div>
    );
  return (
    <div className={`project-visual project-visual--${id}`} aria-hidden="true">
      {id === "shoppyist" ? (
        <>
          <div className="extension-window">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <div className="extension-content">
              <span className="shopping-bag">
                <svg
                  viewBox="0 0 60 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 22h34l4 34H9l4-34Z" />
                  <path d="M22 25V16a8 8 0 0 1 16 0v9" />
                </svg>
              </span>
              <div className="visual-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <span className="extension-check">✓</span>
          <span className="visual-caption">Thoughtful shopping, built in.</span>
        </>
      ) : id === "vision-bucket" ? (
        <>
          <div className="film-tickets">
            <div className="film-ticket film-ticket-back">
              <span>WATCHLIST</span>
            </div>
            <div className="film-ticket">
              <span>VISION BUCKET</span>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="8" y="6" width="32" height="36" rx="3" />
                <path d="M15 6v36m18-36v36M8 15h7m-7 9h7m-7 9h7m18-18h7m-7 9h7m-7 9h7" />
                <path d="m21 18 8 6-8 6Z" />
              </svg>
              <small>Discover. Save. Discuss.</small>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="search-illustration">
            <div className="illustration-query">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="10" cy="10" r="6" />
                <path d="m15 15 5 5" />
              </svg>
              <span>Find the right result.</span>
            </div>
            <div className="search-index">
              <span>crawl</span>
              <b>→</b>
              <span>index</span>
              <b>→</b>
              <span>rank</span>
            </div>
            <div className="search-document">
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="visual-caption">50,000+ documents. One query.</span>
        </>
      )}
    </div>
  );
}
