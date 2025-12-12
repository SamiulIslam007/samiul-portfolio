# Samiul Islam - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Next.js App Router** - Latest Next.js with App Router architecture
- **TypeScript** - Full type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautiful, accessible component library
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile
- **Dark Mode** - Theme toggle with system preference detection
- **Smooth Scrolling** - Smooth section navigation
- **Mobile Menu** - Polished mobile navigation using Sheet component

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with header and footer
    page.tsx           # Home page
    globals.css        # Global styles and Tailwind directives
    
  components/
    layout/
      site-header.tsx      # Main header component
      navbar-desktop.tsx   # Desktop navigation
      navbar-mobile.tsx    # Mobile navigation with Sheet
    sections/
      hero.tsx            # Hero section
      about.tsx           # About section
      skills.tsx          # Skills section
      projects.tsx        # Projects showcase
      contact.tsx         # Contact form
      footer.tsx          # Footer component
    ui/                   # shadcn/ui components
      button.tsx
      sheet.tsx
      utils.ts
      ...
      
  lib/
    constants/
      nav-links.ts        # Navigation links configuration
    utils/
      scroll.ts           # Scroll utility functions
      cn.ts              # className utility
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To create a production build:

```bash
npm run build
npm start
```

## Key Components

### SiteHeader
The main header component that includes:
- Logo/brand
- Desktop navigation (inline links)
- Mobile navigation (hamburger menu with Sheet)
- Theme toggle

### NavbarMobile
Uses shadcn/ui's Sheet component for a polished slide-in menu:
- Keyboard accessible (ESC to close)
- Focus trap when open
- Closes on outside click
- Closes when navigation link is clicked
- Smooth animations

### Navigation Links
All navigation links are defined in `src/lib/constants/nav-links.ts` as a single source of truth, used by both desktop and mobile navigation.

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons

## License

Private project - All rights reserved.

