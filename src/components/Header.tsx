import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-background/80 backdrop-blur-md px-6 md:px-8 shadow-sm z-50">
      <h1 
        className="text-3xl knewave-regular cursor-pointer hover-elevate" 
        onClick={() => scrollToSection("hero")}
        data-testid="link-logo"
      >
        Hatim
      </h1>
      
      <nav className="hidden md:flex gap-8 pacifico-regular">
        <button 
          onClick={() => scrollToSection("about")}
          className="hover-elevate active-elevate-2 text-foreground transition-opacity hover:opacity-70"
          data-testid="link-about"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("services")}
          className="hover-elevate active-elevate-2 text-foreground transition-opacity hover:opacity-70"
          data-testid="link-services"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className="hover-elevate active-elevate-2 text-foreground transition-opacity hover:opacity-70"
          data-testid="link-projects"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection("blog")}
          className="hover-elevate active-elevate-2 text-foreground transition-opacity hover:opacity-70"
          data-testid="link-blog"
        >
          Blog
        </button>
        <button 
          onClick={() => scrollToSection("contact")}
          className="hover-elevate active-elevate-2 text-foreground transition-opacity hover:opacity-70"
          data-testid="link-contact"
        >
          Contact
        </button>
      </nav>

      <Button
        size="icon"
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-testid="button-menu-toggle"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md shadow-lg md:hidden">
          <nav className="flex flex-col gap-4 p-6 pacifico-regular">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-left hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-left hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-left hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-projects-mobile"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-left hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-blog-mobile"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-left hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
