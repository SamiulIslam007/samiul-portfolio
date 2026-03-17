"use client";

import { useMemo } from "react";

type Skill = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "devops" | "language" | "other";
};

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "REST APIs", level: 94, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  // DevOps / Tools
  { name: "Git & GitHub", level: 92, category: "devops" },
  { name: "Docker", level: 80, category: "devops" },
  { name: "CI/CD", level: 80, category: "devops" },
  { name: "Vercel", level: 90, category: "devops" },
  // Languages
  { name: "JavaScript (ES6+)", level: 94, category: "language" },
  { name: "TypeScript", level: 90, category: "language" },
  { name: "Python", level: 70, category: "language" },
  { name: "C", level: 40, category: "language" },
  { name: "C++", level: 30, category: "language" },
];

const categoryMeta: Record<
  Skill["category"],
  { label: string; accent: string; description: string }
> = {
  frontend: {
    label: "Frontend",
    accent: "from-sky-400 via-blue-500 to-indigo-500",
    description: "Modern, responsive interfaces with pixel-perfect layouts.",
  },
  backend: {
    label: "Backend",
    accent: "from-emerald-400 via-emerald-500 to-teal-500",
    description: "Robust APIs, databases and application logic.",
  },
  devops: {
    label: "DevOps & Tools",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    description: "Shipping, monitoring and automating code to production.",
  },
  language: {
    label: "Languages",
    accent: "from-violet-400 via-purple-500 to-fuchsia-500",
    description: "Strong foundations in core programming languages.",
  },
  other: {
    label: "Other",
    accent: "from-slate-400 via-slate-500 to-slate-600",
    description: "Supporting tools and workflows I use regularly.",
  },
};

export function Skills() {
  const grouped = useMemo(() => {
    const byCategory: Record<Skill["category"], Skill[]> = {
      frontend: [],
      backend: [],
      devops: [],
      language: [],
      other: [],
    };

    for (const skill of skills) {
      byCategory[skill.category].push(skill);
    }

    // sort each category descending by level
    (Object.keys(byCategory) as Skill["category"][]).forEach((key) => {
      byCategory[key].sort((a, b) => b.level - a.level);
    });

    return byCategory;
  }, []);

  const otherTechnologies = [
    "Redux",
    "React Query",
    "Zustand",
    "Prisma",
    "WebSockets",
    "Jest",
    "Testing Library",
    "Storybook",
    "Figma",
    "AWS",
    "Supabase",
    "Flutter",
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Tech Radar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-sky-400 bg-clip-text text-transparent">
              Strengths
            </span>
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A high-level view of the technologies I use every day. Each bar
            represents my practical confidence based on real projects, not just
            tutorial knowledge.
          </p>
        </div>

        {/* Skill Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {(Object.keys(grouped) as Skill["category"][])
            .filter((key) => grouped[key].length > 0 && key !== "other")
            .map((key) => {
              const meta = categoryMeta[key];
              const catSkills = grouped[key];

              return (
                <div
                  key={key}
                  className="relative group rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  {/* gradient edge */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.accent}`}
                  />

                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {meta.label}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                          {meta.description}
                        </p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <div className="flex items-center gap-1 mt-1">
                          <span>60</span>
                          <span className="h-px w-6 bg-border" />
                          <span>100</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {catSkills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs md:text-sm">
                            <span className="font-medium text-foreground/90">
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative h-2.5 rounded-full bg-secondary/60 overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,#ffffff24_1px,transparent_0)] bg-[size:8px_8px]" />
                            <div
                              className={`relative h-full rounded-full bg-gradient-to-r ${meta.accent} shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-700`}
                              style={{
                                width: `${skill.level}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Additional Skills as Pills */}
        <div className="mt-14">
          <h4 className="text-center mb-6 text-lg md:text-xl font-semibold">
            Supporting Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary/60 text-xs md:text-sm rounded-full border border-border/70 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
