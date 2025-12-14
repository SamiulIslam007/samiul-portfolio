"use client";

import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { projects } from "@/lib/constants/projects";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary/90"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
