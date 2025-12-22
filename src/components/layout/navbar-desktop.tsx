"use client";

import { NAV_LINKS } from "@/lib/constants/nav-links";
import { scrollToSection } from "@/lib/utils/scroll";
import { usePathname, useRouter } from "next/navigation";

export function NavbarDesktop() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string,
    href: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(sectionId);
    } else {
      router.push(href);
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <button
          key={link.sectionId}
          onClick={(e) => handleNavClick(e, link.sectionId, link.href)}
          className="text-sm hover:text-primary transition-colors relative group"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </button>
      ))}
    </nav>
  );
}
