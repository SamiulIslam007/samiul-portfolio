import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/constants/projects";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
  Server,
  Globe,
  Calendar,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Samiul Islam`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative pt-4 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 capitalize">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-secondary border border-border text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium hover:shadow-lg hover:shadow-primary/20 text-sm"
              >
                <Globe className="w-4 h-4" />
                Live Demo
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}
            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all font-medium text-sm"
              >
                <Code2 className="w-4 h-4" />
                Frontend Repo
                <Github className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all font-medium text-sm"
              >
                <Server className="w-4 h-4" />
                Backend Repo
                <Github className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-secondary mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-muted-foreground">
                <Tag className="w-4 h-4" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-secondary border border-border rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl border border-border bg-card shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Links
                </h3>
                <div className="flex flex-col gap-2">
                  {project.liveUrl ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-full justify-start gap-2"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60" />
                      </a>
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 text-muted-foreground text-sm border border-border/50">
                      <Globe className="w-4 h-4" />
                      <span>Live demo coming soon</span>
                    </div>
                  )}

                  {project.frontendRepo ? (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-start gap-2"
                    >
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 className="w-4 h-4" />
                        Frontend Repo
                        <Github className="w-3.5 h-3.5 ml-auto opacity-60" />
                      </a>
                    </Button>
                  ) : null}

                  {project.backendRepo ? (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-start gap-2"
                    >
                      <a
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Server className="w-4 h-4" />
                        Backend Repo
                        <Github className="w-3.5 h-3.5 ml-auto opacity-60" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Features</span>
                  <span className="font-medium">{project.features.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-20 pt-12 pb-4 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Other Projects</h2>
              <Link
                href="/projects"
                className="flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex gap-4"
                >
                  <div className="relative w-14 h-14 rounded-lg bg-secondary border border-border shrink-0 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                      {p.shortDescription}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
