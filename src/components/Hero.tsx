import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Creative_workspace_hero_background_9587e98a.png";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-[70vh] flex flex-col justify-center items-center text-center text-white"
    >
      <img 
        src={heroImage} 
        alt="Creative workspace" 
        className="absolute inset-0 w-full h-full object-cover -z-20" 
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      
      <h1 className="text-4xl md:text-6xl knewave-regular mb-4 px-4" data-testid="text-hero-title">
        Crafting Web Experiences
      </h1>
      <p className="text-lg md:text-xl pacifico-regular mb-6 px-4" data-testid="text-hero-subtitle">
        Developer | Designer | Creator
      </p>
      <Button 
        variant="default"
        size="lg"
        onClick={scrollToProjects}
        className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 rounded-xl pacifico-regular text-lg"
        data-testid="button-view-projects"
      >
        View Projects
      </Button>
    </section>
  );
}
