import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background py-16 px-6 pacifico-regular">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl knewave-regular mb-4" data-testid="text-footer-contact-title">
            Contact
          </h3>
          <p className="mb-2" data-testid="text-footer-location">Ciudad Real, Spain</p>
          <p data-testid="text-footer-email">hatim@example.com</p>
        </div>

        <div>
          <h3 className="text-2xl knewave-regular mb-4" data-testid="text-footer-follow-title">
            Follow
          </h3>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="hover-elevate active-elevate-2 p-2 rounded-md transition-opacity hover:opacity-70"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="hover-elevate active-elevate-2 p-2 rounded-md transition-opacity hover:opacity-70"
              data-testid="link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="hover-elevate active-elevate-2 p-2 rounded-md transition-opacity hover:opacity-70"
              data-testid="link-github"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl knewave-regular mb-4" data-testid="text-footer-newsletter-title">
            Newsletter
          </h3>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground"
              data-testid="input-newsletter"
            />
            <Button 
              type="submit" 
              variant="secondary"
              data-testid="button-subscribe"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-background/20 text-center text-sm">
        <p data-testid="text-copyright">
          © 2025 Hatim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
