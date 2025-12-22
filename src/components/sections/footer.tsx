"use client";

import { scrollToSection } from "@/lib/utils/scroll";
import { socialLinks } from "../ui/social-links";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className={`${pacifico.className} mb-4 text-xl tracking-tight  `}
            >
              Samiul Islam
            </h3>
            <p className="text-sm text-muted-foreground">
              Fullstack Web Developer specializing in building exceptional
              digital experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={(e) => handleNavClick(e, item.toLowerCase())}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Samiul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
