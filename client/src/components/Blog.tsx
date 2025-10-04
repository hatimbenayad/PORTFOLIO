import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogImage from "@assets/generated_images/Blog_post_featured_image_5d2c1c0e.png";

const blogPosts = [
  {
    title: "Modern Web Design Trends 2025",
    excerpt: "Explore the latest design trends shaping the web landscape this year.",
    image: blogImage,
    date: "Jan 15, 2025",
  },
  {
    title: "Building Responsive Layouts",
    excerpt: "Best practices for creating layouts that work on any device.",
    image: blogImage,
    date: "Jan 10, 2025",
  },
  {
    title: "The Art of Typography",
    excerpt: "How to choose and pair fonts for maximum impact and readability.",
    image: blogImage,
    date: "Jan 5, 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="max-w-[1200px] mx-auto py-20 md:py-28 px-6">
      <h2 className="text-3xl md:text-4xl knewave-regular mb-10 text-center" data-testid="text-blog-title">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card 
            key={post.title} 
            className="rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            data-testid={`card-blog-${index}`}
          >
            <div className="overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                data-testid={`img-blog-${index}`}
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground pacifico-regular mb-2" data-testid={`text-blog-date-${index}`}>
                {post.date}
              </p>
              <h3 className="text-xl knewave-regular mb-3" data-testid={`text-blog-title-${index}`}>
                {post.title}
              </h3>
              <p className="pacifico-regular text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${index}`}>
                {post.excerpt}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="pacifico-regular"
                data-testid={`button-read-more-${index}`}
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
