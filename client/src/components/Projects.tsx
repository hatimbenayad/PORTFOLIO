import barber1 from "@assets/generated_images/Barber_shop_demo_project_80027e4e.png";
import barber2 from "@assets/generated_images/Vintage_barber_shop_project_f2cab81c.png";
import barber3 from "@assets/generated_images/Urban_barber_shop_project_71b903c9.png";

const projects = [
  { 
    id: 1, 
    title: "Modern Barber Studio", 
    img: barber1, 
    link: "#" 
  },
  { 
    id: 2, 
    title: "Vintage Barbershop", 
    img: barber2, 
    link: "#" 
  },
  { 
    id: 3, 
    title: "Urban Cuts", 
    img: barber3, 
    link: "#" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto py-20 md:py-28 px-6">
      <h2 className="text-3xl md:text-4xl knewave-regular mb-10 text-center" data-testid="text-projects-title">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a 
            href={project.link}
            key={project.id} 
            className="block rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 group"
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
            <h3 className="text-center py-4 knewave-regular text-lg md:text-xl bg-card" data-testid={`text-project-title-${project.id}`}>
              {project.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
