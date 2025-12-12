import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const profileImageUrl =
  "https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1MjYyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero profileImageUrl={profileImageUrl} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

