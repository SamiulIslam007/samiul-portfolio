"use client";

import { useState } from "react";
import {
  Menu,
  Home,
  User,
  Cpu,
  GraduationCap,
  FolderGit2,
  Mail,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants/nav-links";
import { socialLinks } from "@/components/ui/social-links";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const iconMap: Record<string, any> = {
  Home: Home,
  About: User,
  Skills: Cpu,
  Education: GraduationCap,
  Projects: FolderGit2,
  Contact: Mail,
};

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-10 w-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Open menu"
        >
          <Menu className="size-6 text-foreground" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] border-l border-border bg-background/95 backdrop-blur-xl flex flex-col h-full p-0 shadow-2xl [&>button]:top-6 [&>button]:right-6 [&>button]:bg-secondary/20 hover:[&>button]:bg-red-500/10 [&>button]:rounded-full [&>button]:p-2 [&>button_svg]:size-5 transition-all"
      >
        <SheetHeader className="p-6 border-b border-border/50">
          <SheetTitle className="text-left flex items-center gap-2">
            <span
              className={`${pacifico.className} text-xl md:text-2xl tracking-tight font-semibold`}
            >
              Samiul Islam
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const Icon = iconMap[link.label] || Home;

              return (
                <SheetClose key={link.sectionId} asChild>
                  <button
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className="group flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-accent transition-all duration-300 w-full text-left active:scale-95"
                  >
                    <span className="p-2 rounded-lg bg-secondary group-hover:bg-background border border-transparent group-hover:border-border transition-colors">
                      <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                    </span>
                    <span className="font-medium text-base tracking-wide text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </button>
                </SheetClose>
              );
            })}
          </nav>
        </div>
        <div className="p-6 mt-auto border-t border-border/50 bg-secondary/10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-wider text-primary/80 uppercase">
              Connect with me
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="p-2.5 rounded-full bg-background border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
