# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js 13+ app using the `/app` directory structure, bootstrapped with `create-next-app`.
- The codebase is TypeScript-first, with React Server Components and Client Components.
- UI components are organized under `components/` and `components/ui/`.
- Global styles and theme variables are managed in `app/globals.css` using Tailwind CSS and custom properties.

## Key Directories & Files
- `app/`: Main app routes, layouts, and pages. Example: `app/page.tsx`, `app/dashboard/page.tsx`.
- `components/`: Shared React components. Subfolder `ui/` contains atomic UI elements (e.g., `button.tsx`, `input.tsx`).
- `hooks/`: Custom React hooks (e.g., `use-mobile.ts`).
- `lib/`: Utility functions (e.g., `utils.ts`).
- `public/`: Static assets (SVGs, favicon).
- `globals.css`: Tailwind CSS setup, custom theme variables, and dark mode support.
- `package.json`: Scripts, dependencies, and project metadata.

## Developer Workflows
- **Start Dev Server:** `pnpm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Build:** `pnpm run build`.
- **Lint:** `pnpm run lint` (uses ESLint config in `eslint.config.mjs`).
- **Type Check:** `npm run type-check` (if defined in `package.json`).
- **Format:** Use Prettier if configured.

## Project-Specific Patterns
- **Styling:** Uses Tailwind CSS via `@import` in `globals.css`. Custom theme variables are defined with CSS custom properties and the `@theme inline` block.
- **Dark Mode:** Managed via the `.dark` class and custom variant in `globals.css`.
- **Component Structure:** Prefer functional components. UI primitives live in `components/ui/`, higher-level components in `components/`.
- **TypeScript:** All logic and components should be typed. Use `tsconfig.json` for project-wide settings.
- **Routing:** Follows Next.js `/app` directory conventions. Each folder under `app/` is a route; `page.tsx` is the entry point.

## Integration Points
- **Fonts:** Uses `next/font` for Geist font optimization.
- **External:** Designed for deployment on Vercel; see README for details.

## Examples
- To add a new page: create a folder under `app/` (e.g., `app/about/`) and add `page.tsx`.
- To add a new UI element: add a file to `components/ui/` and export a functional component.
- To update global styles: edit `app/globals.css` and use Tailwind or custom properties.

## Conventions
- Use atomic UI components for consistency.
- Prefer CSS custom properties for theme values.
- Keep business logic in hooks or `lib/`.
- Avoid placing logic in page components; keep them declarative.

---

If any section is unclear or missing, please provide feedback for further refinement.
