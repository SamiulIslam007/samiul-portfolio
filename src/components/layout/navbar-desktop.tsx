"use client";

import { NAV_LINKS, NavLink } from "@/lib/constants/nav-links";
import { scrollToSection } from "@/lib/utils/scroll";
import { usePathname, useRouter } from "next/navigation";

export function NavbarDesktop() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    link: NavLink
  ) => {
    if (link.isRoute) {
      router.push(link.href);
    } else if (pathname === "/") {
      e.preventDefault();
      scrollToSection(link.sectionId);
    } else {
      router.push(link.href);
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = link.isRoute
          ? pathname === link.href
          : false;

        return (
          <button
            key={link.sectionId}
            onClick={(e) => handleNavClick(e, link)}
            className={`text-sm transition-colors relative group font-medium ${
              isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        );
      })}
    </nav>
  );
}
