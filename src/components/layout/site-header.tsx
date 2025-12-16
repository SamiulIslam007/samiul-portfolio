"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Update theme
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSection("hero");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center font-semibold text-xl justify-between h-16 md:h-20">
          <button
            onClick={handleLogoClick}
            className={`${pacifico.className} text-xl md:text-2xl tracking-tight font-semibold`}
          >
            Samiul Islam
          </button>

          <NavbarDesktop />

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="icon"
              className="rounded-lg p-0"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="size-6" />
              ) : (
                <Moon className="size-6" />
              )}
            </Button>

            <NavbarMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
