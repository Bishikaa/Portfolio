import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-foreground">

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("#home")}
              className={`nav-link text-foreground hover:text-primary transition-colors ${
                activeSection === "home" ? "text-primary" : ""
              }`}
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className={`nav-link text-foreground hover:text-primary transition-colors ${
                activeSection === "about" ? "text-primary" : ""
              }`}
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className={`nav-link text-foreground hover:text-primary transition-colors ${
                activeSection === "projects" ? "text-primary" : ""
              }`}
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("#skills")}
              className={`nav-link text-foreground hover:text-primary transition-colors ${
                activeSection === "skills" ? "text-primary" : ""
              }`}
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className={`nav-link text-foreground hover:text-primary transition-colors ${
                activeSection === "contact" ? "text-primary" : ""
              }`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors cursor-pointer border-none"
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 cursor-pointer border-none bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("#home")}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === "home" ? "text-primary" : ""
                }`}
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === "about" ? "text-primary" : ""
                }`}
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === "projects" ? "text-primary" : ""
                }`}
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("#skills")}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === "skills" ? "text-primary" : ""
                }`}
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors cursor-pointer border-none bg-transparent ${
                  activeSection === "contact" ? "text-primary" : ""
                }`}
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
