# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js (Pages Router) TypeScript app.

- `src/pages/`: route entry points (`index.tsx`, `404.tsx`, `500.tsx`, `_app.tsx`, `_document.tsx`).
- `src/components/`: reusable UI and page sections.
- `src/components/sections/`: content blocks (for example `Hero.tsx`, `Partners.tsx`).
- `src/components/ui/`: smaller presentational building blocks.
- `src/styles/`: global and module CSS.
- `public/`: static assets, localization files, and partner logos.
- `screens/`: visual references/screenshots used during UI work.

Use the alias `@/*` for imports from `src` (configured in `tsconfig.json`).

## Build, Test, and Development Commands
Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: start local dev server at `http://localhost:3000`.
- `pnpm build`: create production build.
- `pnpm start`: run production server from the built app.
- `pnpm lint`: run ESLint (`eslint.config.mjs` with Next.js + TypeScript rules).

Example workflow:
```bash
pnpm install
pnpm lint
pnpm dev
```

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`, `.tsx`), `strict` mode enabled.
- Indentation: 2 spaces; keep files formatted consistently with existing code.
- Components: PascalCase (`PhotoBanner.tsx`, `LanguageSwitcher.tsx`).
- Route files and CSS modules follow Next.js conventions (`index.tsx`, `Home.module.css`).
- Prefer named, grouped exports via local `index.ts` barrels where already used.

## Testing Guidelines
There is currently no committed automated test suite (`test` script is not defined).

- Minimum check before PR: `pnpm lint` and manual validation in `pnpm dev`.
- For new tests, prefer co-located `*.test.ts(x)` files near the component/feature.
- Add a `test` script in `package.json` when introducing a framework (Vitest/Jest/Playwright).

## Commit & Pull Request Guidelines
Recent history uses concise imperative subjects (for example: `Add ...`, `Update ...`, `Enhance ...`).

- Keep commit subject short and action-oriented.
- One logical change per commit when practical.
- PRs should include:
  - clear summary of behavior/UI changes;
  - linked issue/task (if available);
  - screenshots for visual updates;
  - verification steps (commands run, pages checked, locales validated).
