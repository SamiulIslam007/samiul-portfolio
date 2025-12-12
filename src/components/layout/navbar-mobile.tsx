"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants/nav-links";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";

/**
 * Mobile navigation component
 * Uses shadcn/ui Sheet for a polished slide-in menu
 * Includes keyboard accessibility and focus management
 */
export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setOpen(false); // Close menu when link is clicked
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        id="mobile-menu"
        className="w-[300px] sm:w-[400px]"
      >
        <div className="flex flex-col gap-6 mt-8">
          <div className="text-lg font-semibold mb-4">Navigation</div>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <SheetClose key={link.sectionId} asChild>
                <button
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="text-left px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-base font-medium"
                >
                  {link.label}
                </button>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

