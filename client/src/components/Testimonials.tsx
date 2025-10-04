import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import client1 from "@assets/generated_images/Testimonial_client_portrait_one_9749fe9f.png";
import client2 from "@assets/generated_images/Testimonial_client_portrait_two_7f0b60c5.png";
import client3 from "@assets/generated_images/Testimonial_client_portrait_three_af51db13.png";

const testimonials = [
  {
    quote: "Hatim delivered an exceptional website that exceeded our expectations. Professional, creative, and highly skilled.",
    name: "Marcus Johnson",
    role: "CEO, TechStart",
    image: client1,
  },
  {
    quote: "Working with Hatim was a pleasure. The attention to detail and design expertise truly set our project apart.",
    name: "Sarah Chen",
    role: "Founder, StyleCo",
    image: client2,
  },
  {
    quote: "Outstanding work! The website perfectly captures our brand and has significantly improved our online presence.",
    name: "David Martinez",
    role: "Director, Innovate Labs",
    image: client3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/30 py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl knewave-regular mb-12" data-testid="text-testimonials-title">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="p-8 rounded-2xl"
              data-testid={`card-testimonial-${index}`}
            >
              <Avatar className="h-20 w-20 mx-auto mb-6" data-testid={`avatar-testimonial-${index}`}>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <p className="pacifico-regular italic text-muted-foreground mb-6" data-testid={`text-testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              <p className="text-lg font-semibold" data-testid={`text-testimonial-name-${index}`}>
                {testimonial.name}
              </p>
              <p className="pacifico-regular text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                {testimonial.role}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
