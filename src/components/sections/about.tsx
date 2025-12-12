"use client";

import { Code2, Zap, Layout } from "lucide-react";

export function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const strengths = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code that scales",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project",
    },
    {
      icon: Layout,
      title: "Scalable Architecture",
      description: "Building robust systems designed for growth",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="lg:col-span-7">
            <h3 className="mb-6 text-2xl md:text-3xl font-semibold">
              Get to Know Me
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a full-stack web developer with 3–4 years of hands-on
                experience building modern web applications. I work comfortably
                across the stack—crafting responsive front-end interfaces and
                developing reliable back-end systems, including REST/GraphQL
                APIs. I focus on writing clean, maintainable code and building
                products that feel fast, smooth, and user-friendly.
              </p>
              <p>
                Alongside development, I’m deeply interested in cybersecurity. I
                study common web vulnerabilities and how to prevent them, and
                I’m working toward becoming a Web Application Penetration
                Tester. I believe strong applications are not only functional
                and beautiful, but also secure by design.
              </p>
              <p>
                I’m currently an Inter 1st Year (Science) student at Dhaka
                College. Outside of study and coding, I explore new
                technologies, follow real-world security research, and keep
                improving through consistent practice—because my goals are big,
                and I’m committed to reaching them.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl text-primary mb-2 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Strength Cards */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <strength.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Specialization Badge */}
            <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Specialized in
                  </div>
                  <div className="text-lg font-semibold">
                    Fullstack Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
