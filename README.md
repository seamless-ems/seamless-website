# Seamless Website

A home page for a modern, event management web app built with React, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui. Automate speaker management, publish live schedules, and collaborate effortlessly—all in one platform.

## Features

- **Speaker Management:** Automated intake forms, approval workflows, branded promo cards, Google Sheets/Drive sync.
- **Schedule Management:** Live, publishable schedules from Google Sheets, auto-populated speaker details.
- **Content Management:** Centralized hub for files, automatic cloud sync, granular permissions, version control.
- **Beautiful UI:** Responsive, animated, and themeable with shadcn/ui and Tailwind CSS.
- **Demo Booking:** Integrated Calendly links for quick demo scheduling.

## Tech Stack

- **React** + **TypeScript**
- **Vite** (dev/build tool)
- **Tailwind CSS v4** (utility-first styling)
- **shadcn/ui** (component library)
- **Radix UI** (accessible primitives)
- **React Query** (data fetching/caching)
- **React Router** (routing)
- **Lucide Icons** (icon set)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

```
src/
  components/      # UI and page components
  hooks/           # Custom React hooks
  lib/             # Utility functions
  pages/           # Route pages (Index, NotFound)
  assets/          # Images and static assets
  App.tsx          # App root
  main.tsx         # Entry point
public/            # Static files
```

## Customization

- **Tailwind config:** See `tailwind.config.ts` for theme and color setup.
- **Component aliases:** See `components.json` for shadcn/ui config and path aliases.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Lint codebase

## License

MIT
