import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl knewave-regular mb-12 text-center" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl knewave-regular mb-6" data-testid="text-contact-info-title">
              Contact Information
            </h3>
            <div className="space-y-4 pacifico-regular">
              <div className="flex items-center gap-3" data-testid="text-contact-location">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Ciudad Real, Spain</span>
              </div>
              <div className="flex items-center gap-3" data-testid="text-contact-email">
                <Mail className="h-5 w-5 text-primary" />
                <span>hatim@example.com</span>
              </div>
              <div className="flex items-center gap-3" data-testid="text-contact-phone">
                <Phone className="h-5 w-5 text-primary" />
                <span>+34 123 456 789</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pacifico-regular"
              data-testid="input-name"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pacifico-regular"
              data-testid="input-email"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="pacifico-regular"
              data-testid="input-message"
            />
            <Button 
              type="submit" 
              size="lg"
              className="w-full pacifico-regular"
              data-testid="button-submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
