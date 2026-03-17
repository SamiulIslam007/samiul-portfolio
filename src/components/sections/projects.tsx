"use client";

import { Globe, Code2, Server, ArrowUpRight, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { projects } from "@/lib/constants/projects";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  fullstack:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  frontend:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  tool: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project is crafted with clean
            code, solid architecture, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full border capitalize ${
                      categoryColors[project.category] ??
                      "bg-secondary text-foreground border-border"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary/90 shadow-lg"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground ml-2 shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-border/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                  {project.frontendRepo && (
                    <a
                      href={project.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
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
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Server className="w-3.5 h-3.5" />
                      Backend
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                  >
                    Details
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-medium"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
