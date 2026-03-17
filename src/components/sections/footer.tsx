"use client";

import { scrollToSection } from "@/lib/utils/scroll";
import { socialLinks } from "../ui/social-links";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const scrollLinks = [
  { label: "Home", sectionId: "hero", href: "/#hero" },
  { label: "About", sectionId: "about", href: "/#about" },
  { label: "Skills", sectionId: "skills", href: "/#skills" },
  { label: "Education", sectionId: "education", href: "/#education" },
  { label: "Contact", sectionId: "contact", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string,
    href: string
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className={`${pacifico.className} mb-3 text-xl tracking-tight`}>
              Samiul Islam
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fullstack Web Developer &amp; Cyber Security Enthusiast. Building
              fast, secure, and scalable digital experiences.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {scrollLinks.map((item) => (
                <li key={item.sectionId}>
                  <button
                    onClick={(e) => handleNavClick(e, item.sectionId, item.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Projects
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/projects/food-hub"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Food Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/connect"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Connect
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/dcit-club-website"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  DCIT Club Website
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  View All
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Samiul Islam. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
