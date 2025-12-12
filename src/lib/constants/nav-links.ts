/**
 * Single source of truth for navigation links
 * Used by both desktop and mobile navigation components
 */
export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];


