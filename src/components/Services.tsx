import { Palette, Code, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Clean and creative designs that capture your brand's essence and engage your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Responsive and scalable code built with modern technologies and best practices.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description: "Cohesive brand experiences that tell your story and connect with customers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-muted/30 py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl knewave-regular mb-12" data-testid="text-services-title">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-8 md:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              data-testid={`card-service-${index}`}
            >
              <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" data-testid={`icon-service-${index}`} />
              <h3 className="text-xl md:text-2xl knewave-regular mb-4" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="pacifico-regular text-muted-foreground" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
