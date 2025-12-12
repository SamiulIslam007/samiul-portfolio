"use client";

import { NAV_LINKS } from "@/lib/constants/nav-links";
import { scrollToSection } from "@/lib/utils/scroll";

/**
 * Desktop navigation bar component
 * Shows inline navigation links with hover effects
 */
export function NavbarDesktop() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <button
          key={link.sectionId}
          onClick={(e) => handleNavClick(e, link.sectionId)}
          className="text-sm hover:text-primary transition-colors relative group"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </nav>
  );
}
