import aboutImage from "@assets/generated_images/About_section_portrait_photo_b948f74a.png";

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto py-20 md:py-28 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl knewave-regular mb-6" data-testid="text-about-title">
          About Me
        </h2>
        <p className="pacifico-regular leading-relaxed text-muted-foreground mb-4" data-testid="text-about-description">
          I'm Hatim, a creative web developer passionate about design, performance, and modern UI experiences. 
          Based in Ciudad Real, Spain, I specialize in crafting beautiful, functional websites that leave a lasting impression.
        </p>
        <p className="pacifico-regular leading-relaxed text-muted-foreground" data-testid="text-about-description-2">
          With years of experience in web development and design, I bring ideas to life through clean code and 
          thoughtful user experiences. Every project is an opportunity to create something special.
        </p>
      </div>
      <div>
        <img 
          src={aboutImage} 
          alt="About Hatim" 
          className="rounded-2xl shadow-lg w-full h-auto object-cover" 
          data-testid="img-about"
        />
      </div>
    </section>
  );
}
