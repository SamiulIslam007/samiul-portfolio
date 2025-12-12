"use client";

import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online marketplace with real-time inventory and payment processing",
      image:
        "https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY1MzAxMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform with advanced filtering and reporting",
      image:
        "https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjUxOTY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "GraphQL", "D3.js", "Node.js"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with kanban boards and team chat",
      image:
        "https://images.unsplash.com/photo-1651129522359-ce483a8263a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NjUyODYxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "WebSocket", "MongoDB", "Tailwind"],
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "Modern social platform with real-time messaging and content sharing",
      image:
        "https://images.unsplash.com/photo-1710870509663-16f20f75d758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUzMDEyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Firebase", "REST API"],
      link: "#",
    },
    {
      title: "SaaS Application",
      description:
        "Enterprise-grade SaaS platform with multi-tenancy and role-based access",
      image:
        "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHB8ZW58MXx8fHwxNzY1MzAxMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Prisma", "Auth0", "AWS"],
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure banking application with biometric authentication and instant transfers",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjkxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Node.js", "Security"],
      link: "#",
    },
  ];

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
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary/90"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
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

