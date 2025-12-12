"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Shield,
  Code2,
} from "lucide-react";
import Image from "next/image";

interface HeroProps {
  profileImageUrl: string;
}

export function Hero({ profileImageUrl }: HeroProps) {
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullName = "Samiul Islam";
  const typingSpeed = 100; // milliseconds per character
  const pauseBeforeRestart = 2000; // pause at the end before restarting

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Pause at the end, then restart
      const timeout = setTimeout(() => {
        setDisplayedName("");
        setCurrentIndex(0);
      }, pauseBeforeRestart);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">
                Hello, I&apos;m
              </p>
              <h1 className="mb-2 min-h-[1.2em]">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  {displayedName}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>

            {/* Role Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm">Fullstack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm">Cyber Security Specialist</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Building secure, scalable web applications with Next.js, React,
              Node.js, and REST/GraphQL APIs. Specializing in cybersecurity best
              practices, secure architecture, and protecting digital assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-md border border-border hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg border border-border"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glowing background effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/50 to-transparent rounded-2xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Decorative rings */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-2xl border border-primary/10 animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "0.5s" }}
              ></div>

              {/* Main image container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border-4 border-card shadow-2xl">
                  <Image
                    src={profileImageUrl as string}
                    width={400}
                    height={500}
                    alt="Samiul Islam - Fullstack Developer & Cyber Security Specialist"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-card border border-primary/50 rounded-full shadow-xl backdrop-blur-sm flex items-center gap-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                  </div>
                  <span className="text-sm">Available for Hire</span>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
