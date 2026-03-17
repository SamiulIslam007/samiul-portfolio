"use client";

import { useState } from "react";
import { projects } from "@/lib/constants/projects";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code2,
  Server,
  Globe,
  Layers,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

const CATEGORIES = [
  "All",
  "Fullstack",
  "Frontend",
  "Backend",
  "Mobile App",
] as const;

const categoryColors: Record<string, string> = {
  fullstack:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  frontend:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  tool: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = projects.filter((p) => {
    switch (activeCategory) {
      case "All":
        return true;
      case "Fullstack":
        return p.category === "fullstack";
      case "Frontend":
        return Boolean(p.frontendRepo);
      case "Backend":
        return Boolean(p.backendRepo);
      case "Mobile App":
        return p.category === "mobile";
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero Banner ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
              <Layers className="w-4 h-4" />
              <span>My Work</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">All </span>
              <span className="bg-gradient-to-r from-primary via-blue-500 to-sky-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of real-world projects I&apos;ve built from
              multi-vendor platforms to real-time social apps. Each one crafted
              with care, clean code and solid architecture.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {projects.length} Projects
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {projects.filter((p) => p.category === "fullstack").length}{" "}
                Fullstack
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                {projects.filter((p) => Boolean(p.frontendRepo)).length}{" "}
                Frontend
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {projects.filter((p) => Boolean(p.backendRepo)).length} Backend
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                {projects.filter((p) => p.category === "mobile").length} Mobile
                App
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter Tabs ─── */}
      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.toLowerCase())
                      .length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <Layers className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filtered.map((project) => (
                <div
                  key={project.slug}
                  className="group relative bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-secondary">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border capitalize ${
                          categoryColors[project.category] ??
                          "bg-secondary text-foreground border-border"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm border border-border text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 shrink-0 ml-3"
                        aria-label={`View ${project.title} details`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full border border-border">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-md hover:shadow-primary/20 font-medium"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}

                      {project.frontendRepo && (
                        <a
                          href={project.frontendRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-secondary border border-border text-sm rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 font-medium"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          Frontend
                        </a>
                      )}

                      {project.backendRepo && (
                        <a
                          href={project.backendRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-secondary border border-border text-sm rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 font-medium"
                        >
                          <Server className="w-3.5 h-3.5" />
                          Backend
                        </a>
                      )}

                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-1.5 px-4 py-2 border border-border text-sm rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-200 font-medium ml-auto"
                      >
                        Details
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground">
            I&apos;m open to freelance projects, collaborations, and full-time
            opportunities. Let&apos;s build something great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-medium"
            >
              Get in Touch
            </Link>
            <a
              href="https://github.com/SamiulIslam007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
