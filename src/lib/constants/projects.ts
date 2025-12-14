export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech: string[];
  features: string[];
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "todo-app",
    title: "Task Management System",
    description: "Collaborative tool with kanban boards and team chat",
    image: "https://images.unsplash.com/photo-1651129522359-ce483a8263a7?...",
    tags: ["Next.js", "WebSocket", "MongoDB", "Tailwind"],
    tech: ["Next.js", "TypeScript", "MongoDB"],
    features: ["Auth", "CRUD", "Responsive UI"],
    live: "https://todo.samiul.vercel.app",
    github: "https://github.com/samiul/todo-app",
  },
];
