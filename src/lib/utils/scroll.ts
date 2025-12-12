/**
 * Utility function to smoothly scroll to a section
 * Accounts for fixed header offset
 */
export function scrollToSection(sectionId: string, offset: number = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

