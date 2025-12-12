"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";

/**
 * Main site header component
 * Includes logo, navigation (desktop + mobile), and theme toggle
 * Handles scroll-based styling changes
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme initialization and changes
  useEffect(() => {
    // Check for saved theme preference or system preference
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-xl md:text-2xl tracking-tight hover:text-primary transition-colors font-medium"
          >
            Samiul Islam
          </button>

          {/* Desktop Navigation */}
          <NavbarDesktop />

          {/* Right side: Mobile menu + Theme toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile Navigation */}
            <NavbarMobile />

            {/* Theme Toggle */}
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="ghost"
              size="icon"
              className="p-2 rounded-lg"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

