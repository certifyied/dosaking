import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import menuPdf from "@/assets/dosa king menu .pdf";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Menu | Best South Indian Restaurant Ottawa, Canada</title>
        <meta 
          name="description" 
          content="Explore the delicious menu of the best South Indian restaurant in Ottawa, Canada. Dosa King Palace offers crispy dosas, idlis, curries, and authentic flavors." 
        />
      </Helmet>
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
              Our Menu
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Discover Our <span className="text-gradient">Complete Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse through our extensive menu featuring authentic South Indian cuisine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto flex justify-center">
              <Button
                variant="hero"
                size="xl"
                asChild
                className="cursor-pointer"
              >
                <a
                  href={menuPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Dosa King Menu PDF"
                >
                  View Our Menu
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
