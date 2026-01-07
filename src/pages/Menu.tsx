import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import menuPdf from "@/assets/dosa king menu .pdf";

const Menu = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Fallback: hide loading after reasonable time even if iframe doesn't load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Explore Our Menu | Best South Indian Restaurant in Ottawa, Canada</title>
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

      {/* PDF Display Section - Full UI visible */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
                    <p className="text-muted-foreground">Loading menu...</p>
                  </div>
                </div>
              )}

              {!loading && (
                <div className="bg-card rounded-2xl shadow-soft p-4 md:p-8 border border-border">
                  <iframe
                    src={menuPdf}
                    className="w-full rounded-lg border border-border"
                    title="Menu PDF"
                    style={{
                      minHeight: "800px",
                      height: "calc(100vh - 400px)"
                    }}
                    onLoad={handleIframeLoad}
                  />
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
