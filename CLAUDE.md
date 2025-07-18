# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000, auto-opens browser)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

Note: No test commands are currently configured. Consider adding a testing framework when needed.

## Project Architecture

This is a React application built with Vite and styled with Tailwind CSS v4. The project uses a component-based architecture with the following structure:

- **Entry Point**: `src/main.jsx` → `src/App.jsx`
- **Routing**: React Router DOM v7 for navigation
- **State Management**: React Context API (theme provider implemented)
- **Styling**: Tailwind CSS v4 with CSS variables, Radix UI for unstyled components, shadcn/ui for pre-built components
- **Animations**: Framer Motion for complex animations, tw-animate-css for Tailwind animations

### Key Directories

- `src/components/ui/`: shadcn/ui components (button, badge, navbar, etc.)
- `src/components/magicui/`: Custom TypeScript UI components
- `src/components/common/`: Shared components (header, footer, theme-switch)
- `src/pages/`: Page-level components
- `src/lib/`: Utility functions (includes cn() for className merging)

### Important Configuration

1. **Path Aliases**: `@/*` maps to `src/*` (configured in vite.config.js and jsconfig.json)
2. **Theme System**: Dark/light mode support via ThemeProvider context, stores preference in localStorage
3. **shadcn/ui**: Configured with New York style and stone color scheme

## Code Conventions

1. **File Extensions**: Use `.jsx` for React components, `.tsx` for TypeScript components (currently only in magicui/)
2. **Component Structure**: Functional components with hooks
3. **Styling**: Tailwind utility classes with cn() helper for conditional classes
4. **Icons**: Use lucide-react for icons
5. **Imports**: Use @ alias for src imports (e.g., `import { Button } from "@/components/ui/button"`)

## Development Notes

- Vite uses SWC for faster React compilation
- ESLint configured with React hooks and refresh plugins
- No TypeScript configuration yet (jsconfig.json provides basic IDE support)
- Tailwind CSS v4 uses Vite plugin (no tailwind.config.js needed)
- Components use CSS variables for theming (defined in src/css/globals.css)

When adding new features:
1. Place reusable UI components in `src/components/ui/`
2. Use the existing theme context for dark/light mode support
3. Follow the established pattern of using cn() for conditional classes
4. Utilize Framer Motion for animations when needed