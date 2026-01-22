import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

// Import blog images sequentially (blog1 → first blog, blog2 → second blog, etc.)
import blog1 from "@/assets/blog_images/front-view-pakistan-food-arrangement.jpg";
import blog2 from "@/assets/blog_images/high-angle-pakistan-food-with-rice.jpg";
import blog3 from "@/assets/blog_images/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus.jpg";
import blog4 from "@/assets/blog_images/side-view-casserole-with-sauces.jpg";
import blog5 from "@/assets/blog_images/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table.jpg";
import blog6 from "@/assets/blog_images/top-view-assortment-with-delicious-pakistan-meal.jpg";

// Sample blog data - can be moved to a separate file or API later
const blogPosts = [
  {
    id: 1,
    title: "Why Dosa King Palace is the Best South Indian Restaurant in Ottawa You Must Try",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog1,
    date: "2024-01-15",
    category: "Cooking Tips",
    content: `If you're searching for the best South Indian restaurant in Ottawa, look no further than Dosa King Palace. With authentic flavors, welcoming ambience, and a menu that celebrates the diverse culinary traditions of South India, Dosa King Palace has become a go-to destination for food lovers across the city. Whether you're a longtime fan of South Indian cuisine or trying it for the first time, this restaurant delivers an unforgettable dining experience that keeps guests coming back again and again.

A Taste of Authentic South Indian Cuisine
One of the main reasons Dosa King Palace is considered the best South Indian restaurant in Ottawa is its commitment to authentic flavors. Every dish on the menu is crafted using traditional South Indian spices, techniques, and fresh ingredients imported where possible to preserve the true taste of the region. From crispy dosas and fluffy idlis to rich, aromatic curries and flavorful chutneys, the menu reflects the diversity of South Indian cooking.

An Extensive Menu for Every Palate
The menu caters to vegans, vegetarians, and meat lovers alike, offering dosas, idlis, uttapams, vadas, curries, biryanis, and desserts.

Quality Ingredients and Fresh Preparation
Each dish is prepared fresh to order using high-quality ingredients, ensuring consistent taste and flavor.

Welcoming and Comfortable Dining Experience
Warm ambience, cultural décor, and friendly staff create a relaxed dining environment.

Perfect for Every Occasion
Ideal for family meals, casual dining, and special occasions.

Rave Reviews from Customers
Positive reviews highlight authenticity, service, and consistency.

Conclusion
Dosa King Palace offers a complete South Indian dining experience and stands as a must-visit destination in Ottawa.`
  },
  {
    id: 2,
    title: "Top 5 Reasons You'll Love the Best Dosa in Ottawa at Dosa King Palace",
    excerpt: "Discover the top five reasons why Dosa King Palace serves the best dosa in Ottawa, from authentic South Indian taste to wide variety, perfect accompaniments, and consistent quality.",
    image: blog2,
    date: "2024-01-10",
    category: "Culture",
    content: `When it comes to authentic South Indian cuisine, Ottawa food lovers turn to Dosa King Palace for quality and consistency. Here are the top five reasons it is known for serving the best dosa in Ottawa.

1. Authentic South Indian Taste You Can Trust
Traditional fermentation, precise cooking, and authentic spices deliver perfect dosas every time.

2. Wide Variety of Dosas
From classic to specialty dosas, there's something for every taste preference.

3. Perfectly Balanced Chutneys and Sambar
Freshly prepared sides enhance every bite.

4. Ideal Choice for Families and Groups
Comfortable seating, friendly service, and a family-friendly menu make it a favorite.

5. Consistent Quality and Great Value
Fresh preparation, generous portions, and fair pricing ensure satisfaction.

Why Dosa King Palace Stands Out in Ottawa
Authentic recipes, fresh ingredients, and warm hospitality define the experience.

Final Thoughts
Dosa King Palace continues to earn its reputation as the best South Indian restaurant and best dosa destination in Ottawa.`
  },
  {
    id: 3,
    title: "Health Benefits of Fermented Foods",
    excerpt: "Learn about the incredible health benefits of fermented foods like dosa batter, including improved digestion, enhanced nutrient absorption, and gut health.",
    image: blog3,
    date: "2024-01-05",
    category: "Health",
    content: `Fermented foods have been a cornerstone of traditional diets for thousands of years, and modern science is now confirming what our ancestors knew: these foods are incredibly beneficial for our health.

Dosa batter, like many fermented foods, undergoes a natural fermentation process where beneficial bacteria and yeasts break down the food components. This process not only enhances flavor but also significantly improves nutritional value.

One of the primary benefits is improved digestion. The fermentation process pre-digests complex carbohydrates and proteins, making them easier for our bodies to break down. This is particularly beneficial for people with sensitive digestive systems. The beneficial bacteria (probiotics) in fermented foods help maintain a healthy gut microbiome, which is crucial for overall digestive health.

Fermentation also increases the bioavailability of nutrients. The process breaks down phytic acid, an anti-nutrient found in grains and legumes that can interfere with mineral absorption. This means your body can absorb more iron, zinc, and other essential minerals from fermented foods.

The probiotics in fermented dosa batter support immune function. A significant portion of our immune system resides in the gut, and maintaining a healthy balance of gut bacteria is essential for immune health. Regular consumption of fermented foods can help strengthen your immune response.

Fermented foods are also rich in B vitamins, which are produced during the fermentation process. These vitamins are essential for energy production, brain function, and maintaining healthy skin and hair.

For those managing blood sugar, fermented foods can be beneficial. The fermentation process can lower the glycemic index of foods, meaning they cause a slower, more gradual rise in blood sugar levels compared to their non-fermented counterparts.

At Dosa King, we take pride in using traditional fermentation methods that maximize these health benefits. Our dosa batter is naturally fermented, ensuring you get all the probiotic and nutritional benefits that make South Indian cuisine not just delicious, but also incredibly healthy.`
  },
  {
    id: 4,
    title: "Spice Blends: The Heart of South Indian Cuisine",
    excerpt: "Dive into the world of South Indian spice blends - from sambar powder to rasam powder, discover how these aromatic mixtures create authentic flavors.",
    image: blog4,
    date: "2023-12-28",
    category: "Cooking Tips",
    content: `Spice blends are the soul of South Indian cuisine. These carefully crafted mixtures of roasted and ground spices create the complex, layered flavors that define dishes like sambar, rasam, and various curries.

Sambar powder is perhaps the most essential spice blend in South Indian cooking. It typically includes coriander seeds, red chilies, fenugreek seeds, curry leaves, and asafoetida. Each ingredient is carefully roasted to bring out its unique flavor before being ground together. The result is a warm, aromatic powder that forms the base of sambar, a tangy lentil stew that's a staple in South Indian meals.

Rasam powder, used in the tangy, spicy soup called rasam, has a different profile. It emphasizes black pepper, cumin, and coriander, creating a lighter, more peppery flavor. Rasam is not just delicious - it's also considered a digestive aid and is often served at the end of a meal.

Curry powder, though often associated with British adaptations, has authentic South Indian versions. These blends vary by region and family, but typically include turmeric, coriander, cumin, fenugreek, and various chilies. At Dosa King, we use a house blend that's been refined over generations.

The secret to great spice blends lies in the roasting process. Each spice has an optimal roasting time and temperature. Over-roasting can make spices bitter, while under-roasting leaves them raw and harsh. The spices should be roasted separately, as they have different optimal temperatures, then combined and ground.

Storage is crucial. Spice blends should be stored in airtight containers away from light and heat. Whole spices stay fresh longer than ground ones, which is why many South Indian kitchens grind spices fresh for each meal.

At Dosa King, we prepare our spice blends in small batches to ensure maximum freshness and flavor. Our chefs roast and grind spices daily, following traditional methods that have been passed down through generations. This attention to detail is what makes our dishes taste authentically South Indian.`
  },
  {
    id: 5,
    title: "Our Journey: From Family Kitchen to Restaurant",
    excerpt: "The inspiring story of how Dosa King grew from a small family kitchen to becoming a beloved destination for authentic South Indian cuisine.",
    image: blog5,
    date: "2023-12-20",
    category: "Our Story",
    content: `The story of Dosa King is a tale of passion, tradition, and the power of authentic flavors. It began in a small family kitchen in Chennai, where our founder learned the art of South Indian cooking from her grandmother.

Those early mornings in the kitchen were magical. The aroma of freshly ground spices, the sizzle of dosas on the tawa, and the warmth of family coming together over breakfast - these memories became the foundation of what Dosa King is today.

When we moved to Ottawa, we brought these recipes and traditions with us. What started as cooking for friends and family soon became a dream: to share authentic South Indian cuisine with the Ottawa community. We wanted to create a place where people could experience the same warmth and flavors we grew up with.

Opening Dosa King was a labor of love. Every detail mattered - from sourcing authentic ingredients to training our team in traditional cooking methods. We insisted on using the same fermentation techniques, the same spice blends, and the same attention to detail that made our family recipes special.

The early days were challenging. We worked long hours, perfecting each recipe, ensuring consistency, and building relationships with our customers. But seeing the joy on people's faces when they tasted our dosas for the first time made it all worthwhile.

Word spread quickly. People came not just for the food, but for the experience - the authentic flavors, the warm service, and the sense of community we've created. We've been honored to serve thousands of customers, from those discovering South Indian cuisine for the first time to homesick South Indians finding a taste of home.

Today, Dosa King stands as a testament to the power of staying true to your roots while embracing new communities. We're proud to be Ottawa's destination for authentic South Indian cuisine, and we're grateful to every customer who has been part of our journey.

Our commitment remains the same: to serve food made with love, using traditional methods, and to create a space where everyone feels welcome. This is more than a restaurant to us - it's a bridge between cultures, a celebration of tradition, and a home away from home.`
  },
  {
    id: 6,
    title: "Pairing Chutneys with Dosas: A Complete Guide",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog6,
    date: "2023-12-15",
    category: "Cooking Tips",
    content: `The perfect dosa experience isn't complete without the right chutney. These flavorful condiments elevate the dosa from good to extraordinary, and understanding how to pair them is an art in itself.

Coconut chutney is the classic pairing for dosas. Made from fresh coconut, green chilies, ginger, and tempered with mustard seeds and curry leaves, it provides a cooling contrast to the crispy, slightly tangy dosa. The creamy texture and mild heat complement plain dosas beautifully, while also balancing the spiciness of masala dosas.

Tomato chutney offers a tangy, slightly sweet alternative. Made with ripe tomatoes, onions, and a blend of spices, it has a more robust flavor profile. This chutney pairs excellently with masala dosas, as its tanginess cuts through the richness of the potato filling. The vibrant red color also adds visual appeal to your plate.

Onion chutney, with its sharp, pungent flavor, is perfect for those who love bold tastes. Made from sautéed onions, red chilies, and tamarind, it adds a spicy kick that works well with plain dosas and ghee roast dosas. The caramelized onions provide a depth of flavor that enhances the dosa's natural taste.

Peanut chutney is a regional favorite, especially in Andhra Pradesh. Made from roasted peanuts, chilies, and tamarind, it has a nutty, earthy flavor with a hint of sourness. This chutney pairs wonderfully with crispy dosas, adding a rich, protein-packed element to the meal.

The key to perfect chutney pairing is balance. A mild, creamy chutney like coconut works with spicy dosas, while a bold, tangy chutney like tomato complements milder dosas. The texture also matters - smooth chutneys work well with crispy dosas, while chunkier chutneys add interesting texture contrasts.

At Dosa King, we serve a variety of chutneys with every dosa, allowing you to mix and match to find your perfect combination. Our chutneys are made fresh daily, using traditional recipes that have been refined over generations. We believe that the right chutney can transform a good dosa into an unforgettable experience.`
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
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPost) {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

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
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
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

      {/* Blog Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogPortal>
          <AnimatePresence>
            {selectedPost && (
              <>
                <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
                <DialogPrimitive.Content
                  className={cn(
                    "fixed left-[50%] top-[50%] z-50 w-[95vw] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] bg-card border border-primary/20 rounded-xl sm:rounded-2xl p-0 gap-0 shadow-card duration-300 mx-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
                  )}
                  onEscapeKeyDown={(e) => {
                    setSelectedPost(null);
                  }}
                  onPointerDownOutside={(e) => {
                    setSelectedPost(null);
                  }}
                >
                  <DialogHeader className="p-4 sm:p-6 pb-4 border-b border-border/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                            {selectedPost.category}
                          </span>
                          <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                            <Calendar size={14} className="sm:w-4 sm:h-4" />
                            <time dateTime={selectedPost.date}>{formatDate(selectedPost.date)}</time>
                          </div>
                        </div>
                        <DialogTitle className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-left pr-8 sm:pr-12">
                          {selectedPost.title}
                        </DialogTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 transition-all hover:scale-110"
                        onClick={() => setSelectedPost(null)}
                        aria-label="Close"
                      >
                        <X size={18} className="sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </DialogHeader>
                  
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Featured Image */}
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-invert max-w-none">
                      <div className="text-foreground leading-relaxed space-y-4">
                        {selectedPost.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPrimitive.Content>
              </>
            )}
          </AnimatePresence>
        </DialogPortal>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;

