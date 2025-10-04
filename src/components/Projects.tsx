import barber1 from "@assets/generated_images/Barber_shop_demo_project_80027e4e.png";
import barber2 from "@assets/generated_images/Vintage_barber_shop_project_f2cab81c.png";
import barber3 from "@assets/generated_images/Urban_barber_shop_project_71b903c9.png";

const projects = [
  { 
    id: 1, 
    title: "Modern Barber Studio", 
    img: barber1, 
    link: "/projects/barber-1/index.html" 
  },
  { 
    id: 2, 
    title: "Vintage Barbershop", 
    img: barber2, 
    link: "/projects/barber-2/index.html" 
  },
  { 
    id: 3, 
    title: "Urban Cuts", 
    img: barber3, 
    link: "/projects/barber-3/index.html" 
  },
  { 
    id: 4, 
    title: "Premium Barber Lounge", 
    img: barber1, // Using barber1 as placeholder for barber-4
    link: "/projects/barber-4/index.html" 
  },
];

export default function Projects() {
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="max-w-[1200px] mx-auto py-20 md:py-28 px-6">
      <h2 className="text-3xl md:text-4xl knewave-regular mb-10 text-center" data-testid="text-projects-title">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 group bg-card"
            data-testid={`card-project-${project.id}`}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                data-testid={`img-project-${project.id}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-center mb-4 knewave-regular text-lg md:text-xl" data-testid={`text-project-title-${project.id}`}>
                {project.title}
              </h3>
              <button
                onClick={() => handleProjectClick(project.link)}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                data-testid={`btn-project-preview-${project.id}`}
              >
                See Live Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
