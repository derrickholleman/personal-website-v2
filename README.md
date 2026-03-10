# personal-website-v2

My personal portfolio website built with SvelteKit, Svelte 5, Tailwind CSS. Test coverage with Playwright and Vitest. Deployed on Netlify.

## Technologies

- **SvelteKit** - Full-stack framework
- **Svelte 5** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Unit testing
- **Playwright** - End-to-end testing
- **ESLint + Prettier** - Code quality and formatting
- **lint-staged** - Pre-commit checks

## Features

- Home page with links to Resume and Projects
- Projects page with reusable project cards in a responsive grid
- Dark theme design
- Responsive layout

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Navigate to `http://localhost:5173/`.

### Build

Build the project for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Testing

Run unit tests:

```sh
npm run test
```

Run end-to-end tests:

```sh
npm run e2e
```

## Code Quality

Format code:

```sh
npm run format
```

Lint code:

```sh
npm run lint
```

Type check:

```sh
npm run check
```

## Project Structure

```
src/
├── lib/
│   └── components/
│       ├── Footer/              # Footer component
│       │   ├── __tests__/
│       │   └── Footer.svelte
│       └── ProjectCard/         # Reusable project card component
│           ├── __tests__/
│           └── ProjectCard.svelte
├── routes/
│   ├── projects/                # /projects page
│   │   └── +page.svelte
│   ├── +layout.svelte
│   └── +page.svelte             # Home page
├── app.css
└── setupTests.ts

e2e/                             # Playwright e2e tests
static/                          # Static assets (images, icons)
```

## Pre-commit Hooks

This project uses lint-staged to run checks before commits:

- Prettier (auto-format)
- ESLint (auto-fix)

All checks must pass before a commit is allowed.
