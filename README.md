# Thomas Tran — Portfolio

A React + TypeScript portfolio with project case studies, experience, education, skills, leadership, and a downloadable résumé.

## Run locally

```sh
npm ci
npm start
```

Open http://localhost:3000/portfolio/. Use `npm run build` for production and `npm test -- --watchAll=false --runInBand` for navigation/content checks.

## Update content

- `src/siteContent.ts`: profile, experience, education, project summaries, skills, leadership, contact links, and résumé path.
- `src/data/projectDetails.tsx`: project details. Roles, dates, repository links, and outcomes are aligned with the supplied résumé.
- `public/Thomas-Tran-Resume.pdf`: an unchanged copy of the supplied PDF, linked in the header and contact section.
- `src/ProjectVisual.tsx`: abstract project illustrations, not screenshots.
- `src/App.css` and `src/styles/ProjectPage.css`: shared design and responsive layouts.
- `public/index.html`: page description and social metadata.

The headshot remains an intentional placeholder until a photo is supplied.

## Hosting

The site is deployed to https://thomasdevtran.github.io/portfolio/ by `.github/workflows/deploy-pages.yml`. Pushes to `main` run tests, build the app, and deploy the build artifact to GitHub Pages. The workflow can also be run manually.

HashRouter keeps project URLs refresh-safe on static hosting, for example `/portfolio/#/project/vision-bucket`. Section links use the router too. The `homepage` field sets the production base path, and local artwork and résumé URLs use `PUBLIC_URL` so they work below `/portfolio/`.

## Tests

CRA's Jest version does not resolve React Router 7's package exports. The `jest.moduleNameMapper` entries in `package.json` point to the installed CommonJS files; `src/setupTests.ts` supplies encoding APIs missing from the older jsdom environment.

## Live project showcase

Vision Bucket and Block by Cube are featured first, with direct links to their live sites. Shoppyist and Search Engine & Web Crawler remain available as résumé projects. Each has its own case study.

Vision Bucket's demo is explicitly described as a browser-local demo with live movie data, separate from the server-side authentication and persistence documented by its backend repository. The exact about-page link is also included in the case study.

The live project artwork is a composed illustration, not a screenshot. Local assets in `public/projects/` were collected from the supplied live sites:

- Film poster artwork: TMDB, as displayed by Vision Bucket. Source images: `https://image.tmdb.org/t/p/w500/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg`, `https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg`, and `https://image.tmdb.org/t/p/w500/tN799oUR0f1gUKDYdMNrDaY7I51.jpg`. The responses are WebP and are stored with `.webp` extensions.
- Minecraft item textures: Mojang Studios, as displayed by Block by Cube at `/textures/items/diamond_sword.png`, `/textures/items/rose.png`, and `/textures/items/emerald.png` (version 26.3).

Attribution appears on each relevant case study. Block by Cube's technical description is based on its live site and public repository README/package manifest at `https://github.com/thomasdevtran/minecraft_block_by_block`.
