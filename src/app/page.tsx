import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const profileImageUrl = "/portfolio-image/profile.jpeg";
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
