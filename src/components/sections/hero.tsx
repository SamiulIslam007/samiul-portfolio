"use client";

import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { scrollToSection } from "@/lib/utils/scroll";
import { useTypewriter } from "@/lib/hooks/use-typewriter";

interface HeroProps {
  profileImageUrl: string;
}

const ROLES = [
  "Fullstack Web Developer",
  "Cyber Security Enthusiast",
  "API & Database Designer",
];

export function Hero({ profileImageUrl }: HeroProps) {
  const typewriterText = useTypewriter(ROLES, 100, 50, 2000);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Name - Clean, solid color, no gradient */}
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Samiul Islam
            </h1>

            {/* Typewriter Effect for Roles */}
            <div className="mb-8 min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem]">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
                <span className="inline-block">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Building modern web applications with Next.js, React, Node.js, and
              REST/GraphQL APIs. I create scalable, performant, and beautiful
              digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => handleScrollToSection("projects")}
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
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
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  src={profileImageUrl}
                  alt="Samiul Islam - Fullstack Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
