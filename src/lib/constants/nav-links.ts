export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
  isRoute?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#hero", sectionId: "hero" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Projects", href: "/projects", sectionId: "projects", isRoute: true },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];
