export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  tech: string[];
  features: string[];
  frontendRepo: string;
  backendRepo: string;
  liveUrl: string;
  category: "fullstack" | "frontend" | "tool" | "backend" | "mobile";
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "food-hub",
    title: "Food Hub",
    shortDescription:
      "Multi-vendor food delivery platform with role-based dashboards for Admins, Providers & Customers.",
    description:
      "Food Hub is a full-featured multi-vendor food delivery platform that connects customers with local restaurants. It provides separate role-based experiences for Admins, Restaurant Providers, and Customers — each with their own dedicated dashboard and workflow. Built with Next.js 16 (React 19), TypeScript, and Tailwind CSS v4 for a blazing-fast, type-safe experience.",
    image: "/projects/food-hub.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Auth",
      "React Hook Form",
      "Zod",
      "Axios",
    ],
    features: [
      "Admin Dashboard — user management, provider approvals & analytics",
      "Provider Dashboard — meal & order management, status updates",
      "Customer Portal — browse meals, cart, checkout & order history",
      "Role-based authentication & protected routes",
      "Meal browsing with search & category filters",
      "Form validation with React Hook Form + Zod",
      "Toast notifications with Sonner",
      "Fully responsive mobile-first design",
    ],
    frontendRepo: "https://github.com/SamiulIslam007/Food-Hub-Client",
    backendRepo: "https://github.com/SamiulIslam007/Food-Hub-Server",
    liveUrl: "https://foodhub-client-rho.vercel.app",
    category: "fullstack",
    year: "2026",
    featured: true,
  },
  {
    slug: "connect",
    title: "Connect",
    shortDescription:
      "Real-time social communication platform with live messaging, user profiles, and activity feeds.",
    description:
      "Connect is a real-time social communication platform built on the MERN stack. Users can create profiles, send connection requests, chat in real-time using WebSockets, and share updates through an activity feed — all in a clean, responsive interface powered by modern web technologies.",
    image: "/projects/connect.png",
    tags: ["MERN Stack", "Socket.io", "Real-time", "TypeScript"],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "TypeScript",
      "Tailwind CSS",
      "JWT Auth",
    ],
    features: [
      "Real-time messaging powered by Socket.io",
      "User authentication with JWT & secure sessions",
      "Friend / connection request system",
      "Live activity feed & notifications",
      "User profiles with avatar upload",
      "Online / offline status indicators",
      "Message read receipts",
      "Responsive, clean chat UI",
    ],
    frontendRepo: "https://github.com/SamiulIslam007/connect-client",
    backendRepo: "https://github.com/SamiulIslam007/Connect-Backend",
    liveUrl: "",
    category: "fullstack",
    year: "2026",
    featured: true,
  },
  {
    slug: "dcit-club-website",
    title: "DCIT Club Website",
    shortDescription:
      "Official website for Dhaka College IT Club — event management, member directory & dark mode support.",
    description:
      "A comprehensive platform for Dhaka College IT Club to manage events, showcase innovations, and maintain a member directory. Built with Next.js and TypeScript for a fast, accessible, and responsive experience, enhanced with smooth Framer Motion animations and full dark/light mode support.",
    image: "/projects/dcit-club.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Dark Mode"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    features: [
      "Event management & showcase",
      "Member directory",
      "Dark / Light mode support",
      "Framer Motion page animations",
      "Fully responsive design",
    ],
    frontendRepo: "",
    backendRepo: "",
    liveUrl: "https://dcitweb.vercel.app",
    category: "frontend",
    year: "2025",
    featured: true,
  },
  {
    slug: "samiul-healthcare-system",
    title: "Samiul Healthcare System",
    shortDescription:
      "Role-based healthcare management platform with separate access for Admins, Doctors & Patients.",
    description:
      "Samiul Healthcare System is a full-featured healthcare management backend that powers role-based experiences for Admins, Doctors, and Patients. It handles user authentication, role management, appointments, prescriptions, and payments on top of a relational PostgreSQL database. Built with TypeScript, Express.js, and Prisma ORM for a robust, type-safe, and scalable API layer.",
    image: "/projects/samiul-healthcare-system.png",
    tags: ["TypeScript", "Express.js", "Prisma ORM", "PostgreSQL"],
    tech: [
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST API",
      "JWT Auth",
      "Zod",
      "bcrypt",
      "dotenv",
    ],
    features: [
      "Role-based access for Admin, Doctor & Patient",
      "User management with secure authentication & authorization",
      "Doctor & patient profiles linked to a central user model",
      "Appointment scheduling between doctors and patients",
      "Prescription management tied to appointments",
      "Payment tracking with status & method enums",
      "PostgreSQL + Prisma schema designed for healthcare workflows",
      "Environment-based configuration with .env support",
    ],
    frontendRepo: "",
    backendRepo:
      "https://github.com/SamiulIslam007/samiul-healthcare-system-backend",
    liveUrl: "",
    category: "backend",
    year: "2026",
    featured: true,
  },
];
