import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

// Sample blog data - can be moved to a separate file or API later
const blogPosts = [
  {
    id: 1,
    title: "The Art of Making Perfect Dosa Batter",
    excerpt: "Discover the secrets behind creating the perfect dosa batter - from selecting the right rice and lentils to the fermentation process that gives dosas their unique flavor.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    date: "2024-01-15",
    category: "Cooking Tips",
  },
  {
    id: 2,
    title: "Traditional South Indian Breakfast: A Complete Guide",
    excerpt: "Explore the rich tradition of South Indian breakfasts, from crispy dosas to fluffy idlis, and learn about the cultural significance of these beloved dishes.",
    image: "https://images.unsplash.com/photo-1585937421612-0a1edd772266?w=800&q=80",
    date: "2024-01-10",
    category: "Culture",
  },
  {
    id: 3,
    title: "Health Benefits of Fermented Foods",
    excerpt: "Learn about the incredible health benefits of fermented foods like dosa batter, including improved digestion, enhanced nutrient absorption, and gut health.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    date: "2024-01-05",
    category: "Health",
  },
  {
    id: 4,
    title: "Spice Blends: The Heart of South Indian Cuisine",
    excerpt: "Dive into the world of South Indian spice blends - from sambar powder to rasam powder, discover how these aromatic mixtures create authentic flavors.",
    image: "https://images.unsplash.com/photo-1601052133247-7c1c0a0f4b3a?w=800&q=80",
    date: "2023-12-28",
    category: "Cooking Tips",
  },
  {
    id: 5,
    title: "Our Journey: From Family Kitchen to Restaurant",
    excerpt: "The inspiring story of how Dosa King grew from a small family kitchen to becoming a beloved destination for authentic South Indian cuisine.",
    image: "https://images.unsplash.com/photo-1631452180519-0bfb0795df39?w=800&q=80",
    date: "2023-12-20",
    category: "Our Story",
  },
  {
    id: 6,
    title: "Pairing Chutneys with Dosas: A Complete Guide",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
    date: "2023-12-15",
    category: "Cooking Tips",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Stories & <span className="text-gradient">Recipes</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover cooking tips, cultural insights, and stories from our kitchen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-border"
                >
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      className="w-full group/btn justify-between p-0 h-auto font-medium text-primary hover:text-primary/80"
                      asChild
                    >
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </Link>
                    </Button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/30" />
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay Updated with Our <span className="text-gradient">Latest Posts</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Subscribe to our newsletter and never miss a new recipe or story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button variant="hero" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

