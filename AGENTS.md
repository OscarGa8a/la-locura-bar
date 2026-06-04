# AGENTS.md — La Locura Bar

> Guidelines for agentic coding agents working in this repository.

## Project Overview

- **Framework**: Astro v6 (SSG, static site)
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Node.js**: >= 22.12.0

## Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally |
| `pnpm astro check` | Type-check the project |
| `pnpm astro -- --help` | Run any Astro CLI command |

**Testing**: No test framework is currently configured. This is a static marketing site. If tests are added, use Vitest for unit tests and Playwright for E2E.

**Linting/Formatting**: No linter or formatter is configured. Follow the conventions below consistently.

## Code Style

### TypeScript / Astro Frontmatter

- Use `interface` for component props (not `type`):
  ```ts
  interface Props {
    title: string;
    description: string;
    ogImage?: string;
  }
  const { title, description, ogImage = '/default.jpg' } = Astro.props;
  ```
- Destructure `Astro.props` with defaults inline.
- Use `type` for unions and aliases: `type MenuTab = keyof Menu;`
- Semicolons: use them consistently in interfaces and frontmatter.
- Single quotes for string literals in TS/JS.
- Export constants use `UPPER_SNAKE_CASE`: `export const WEEK_EVENTS`, `export const MENU`.

### Naming Conventions

| Kind | Convention | Example |
|------|------------|---------|
| Astro components | PascalCase | `Hero.astro`, `MenuSection.astro` |
| UI primitives | PascalCase | `Button.astro`, `Icons.astro` |
| Data modules | camelCase | `config.ts`, `content.ts` |
| CSS custom properties | kebab-case | `--color-accent`, `--font-display` |
| Tailwind custom tokens | kebab-case | `text-xxs`, `tracking-neon` |

### Astro Component Structure

```astro
---
// 1. Imports
import SectionHeader from "../ui/SectionHeader.astro";
import { MENU, type MenuTab } from "../../data/content";

// 2. Interface for props
interface Props {
  variant?: 'default' | 'compact';
}

// 3. Destructure with defaults
const { variant = 'default' } = Astro.props;
---

<!-- 4. Template -->
<section class="...">
  <slot />
</section>
```

### Styling

- **Tailwind CSS v4** — use `@theme` for custom tokens, `@utility` for reusable classes.
- Custom tokens live in `src/styles/global.css`.
- Prefer Tailwind utility classes over custom CSS.
- Custom CSS only for effects Tailwind can't express (neon glow, grain overlay, keyframes).
- Color palette: `bg`, `bg-2`, `bg-3`, `fg`, `fg-dim`, `muted`, `accent`, `accent-2`, `line`, `line-strong`.
- Font families: `font-display` (Bebas Neue), `font-body` (Space Grotesk), `font-mono` (JetBrains Mono).

### Scripts (Client Islands)

- Use `<script>` tags for client-side interactivity (vanilla JS only).
- Scope selectors carefully; use `data-*` attributes for targeting.
- Guard with `if` checks: `const el = document.querySelector(...); if (el) { ... }`

### Data Layer

- Centralize all hardcoded content in `src/data/`.
- Export typed interfaces alongside data: `export interface WeekEvent { ... }`.
- Pages and components import from `src/data/`, never hardcode strings.

### Imports

- Use relative imports with file extensions: `import Button from '../ui/Button.astro';`
- Group imports: external libs → internal components → data → styles.
- Use `type` keyword for type-only imports: `import { type MenuTab } from '../../data/content';`

### Project Structure

```
src/
├── components/
│   ├── sections/    # Page-level sections (Hero, About, MenuSection, etc.)
│   ├── ui/          # Reusable UI primitives (Button, Icons, SectionHeader)
│   └── seo/         # SEO components (SEOHead)
├── data/            # Centralized content + types (config.ts, content.ts)
├── layouts/         # Page layouts (Layout.astro)
├── pages/           # Route files (index.astro)
└── styles/          # Global CSS + Tailwind theme (global.css)
```

### Error Handling

- Astro SSG: errors surface at build time. Use `pnpm astro check` before committing.
- Client scripts: guard DOM queries with null checks before accessing properties.
- No runtime API calls in current codebase; if added, use try/catch with user-visible fallbacks.

### Conventional Commits

Use conventional commits for all changes:
- `feat: ...` — new features or components
- `fix: ...` — bug fixes (broken links, styling regressions)
- `refactor: ...` — code restructuring without behavioral change
- `style: ...` — CSS/Tailwind changes only
- `chore: ...` — dependency updates, config changes

### Adding New Features

1. **New page**: Create a `.astro` file in `src/pages/`. Route is determined by file path.
2. **New section component**: Add to `src/components/sections/`, import in the page.
3. **New UI primitive**: Add to `src/components/ui/`, use `interface Props` for configuration.
4. **New content data**: Add typed exports to `src/data/content.ts` or create a new file in `src/data/`.
5. **New styles**: Add tokens to `@theme` block, or define `@utility` classes in `src/styles/global.css`.

### Before Committing

1. Run `pnpm astro check` — verify zero TypeScript errors.
2. Run `pnpm build` — confirm the site compiles to `dist/` without errors.
3. Review any new `<script>` tags for null-safe DOM access.
