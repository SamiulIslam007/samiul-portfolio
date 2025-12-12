"use client";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to build exceptional web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="mb-6 text-center text-xl font-semibold">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar - clean, no gradient */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills as Pills */}
        <div className="mt-12">
          <h4 className="text-center mb-6 text-xl font-semibold">
            Other Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
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
              "Vercel",
              "Supabase",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-sm rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default"
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
