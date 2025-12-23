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
    slug: "dcit-club-website",
    title: "Dhaka College IT Club",
    description:
      "A comprehensive platform for Dhaka College IT Club to manage events and showcase innovations.",
    image: "/projects/dcit-club.png",
    tags: ["Next.js", "Tailwind", "Typescript", "Dark Mode"],
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Shadcn UI"],
    features: ["Event Management", "Member Directory", "Responsive Design"],
    live: "https://dcitweb.vercel.app",
    github: "",
  },
];
