"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { educationData } from "@/lib/constants/education";

export function Education() {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              An overview of my academic foundation, highlighting the
              institutions and milestones that have shaped my journey.
            </p>
          </div>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="group relative h-full bg-card hover:bg-card/80 border border-border/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Header: Logo & Title */}
                <div className="flex items-start gap-5 mb-6 relative z-10">
                  <div className="relative shrink-0 p-3 bg-secondary/30 rounded-xl border border-border shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.degree}</span>
                    </div>
                  </div>
                </div>

                {/* Badges Section */}
                <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold border border-border">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border ${
                      edu.gpa.toString().includes("Progress") ||
                      edu.gpa.toString().includes("Awaiting")
                        ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                        : "bg-green-500/10 text-green-600 border-green-500/20"
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {edu.gpa}
                  </div>
                </div>

                {/* Description - Fixed Color Issue */}
                <div className="relative z-10 mt-auto">
                  <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
