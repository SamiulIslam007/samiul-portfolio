# Project Structure

This document outlines the modular folder structure of the portfolio website.

## Directory Structure

```
samiul-portfolio/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with header/footer
│   │   ├── page.tsx                  # Home page (single scroll)
│   │   ├── globals.css               # Global styles & Tailwind
│   │   └── projects/
│   │       ├── page.tsx              # All projects listing (/projects)
│   │       └── [slug]/
│   │           └── page.tsx          # Project detail page (/projects/:slug)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx       # Main header (logo, nav, theme)
│   │   │   ├── navbar-desktop.tsx    # Desktop navigation
│   │   │   └── navbar-mobile.tsx     # Mobile menu (Sheet)
│   │   │
│   │   ├── sections/
│   │   │   ├── hero.tsx              # Hero section
│   │   │   ├── about.tsx             # About section
│   │   │   ├── skills.tsx            # Skills section
│   │   │   ├── education.tsx         # Education section
│   │   │   ├── projects.tsx          # Featured projects preview
│   │   │   ├── contact.tsx           # Contact form
│   │   │   └── footer.tsx            # Footer
│   │   │
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── sheet.tsx             # Mobile menu drawer
│   │       ├── image-with-fallback.tsx
│   │       ├── social-links.ts       # Social media links data
│   │       ├── utils.ts              # cn() utility
│   │       └── use-mobile.ts         # Mobile breakpoint hook
│   │
│   └── lib/
│       ├── constants/
│       │   ├── nav-links.ts          # Navigation links (supports isRoute)
│       │   ├── projects.ts           # All project data (type + array)
│       │   └── education.ts          # Education data
│       ├── hooks/
│       │   └── use-typewriter.ts     # Typewriter effect hook
│       └── utils/
│           ├── scroll.ts             # Smooth scroll utility
│           └── cn.ts                 # className merge utility
│
├── public/
│   ├── portfolio-image/              # Profile & institution logos
│   └── projects/                     # Project screenshots
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Key Features

### Responsive Navigation

- **Desktop**: Inline navigation links with hover effects
- **Mobile/Tablet**: Hamburger menu icon that opens a Sheet component
- **Single Source of Truth**: All nav links defined in `lib/constants/nav-links.ts`
- **Accessibility**: ARIA attributes, keyboard navigation, focus management

### Mobile Menu

The mobile menu (`navbar-mobile.tsx`) uses shadcn/ui's Sheet component:
- Slides in from the right
- Smooth animations
- Closes on:
  - Outside click
  - ESC key
  - Navigation link click
- Focus trap when open
- Keyboard accessible

### Component Organization

- **Layout**: Reusable layout components (header, footer)
- **Sections**: Feature-based page sections
- **UI**: Shared UI primitives (buttons, sheets, etc.)
- **Lib**: Utilities and constants

## Design Principles

1. **Modularity**: Clear separation of concerns
2. **Reusability**: Shared components and utilities
3. **Type Safety**: Full TypeScript coverage
4. **Accessibility**: ARIA attributes, keyboard navigation
5. **Responsive**: Mobile-first design approach



