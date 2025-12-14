// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/constants/projects";

type Params = Promise<{ slug: string }>;

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={630}
        className="w-full h-64 object-cover rounded-lg mb-8"
        priority
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-2 mb-8">
        {project.features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Live Demo →
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
