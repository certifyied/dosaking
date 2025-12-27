import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

import heroDosa from "@/assets/hero-dosa.jpg";
import aboutFood from "@/assets/about-food.jpg";
import plainDosa from "@/assets/menu-plain-dosa.jpg";
import masalaDosa from "@/assets/menu-masala-dosa.jpg";
import gheeDosa from "@/assets/menu-ghee-dosa.jpg";
import specialDosa from "@/assets/menu-special-dosa.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryChef from "@/assets/gallery-chef.jpg";
import galleryChutneys from "@/assets/gallery-chutneys.jpg";
import gallerySambar from "@/assets/gallery-sambar.jpg";

const galleryImages = [
  { src: heroDosa, title: "Signature Dosa", category: "Food" },
  { src: galleryInterior, title: "Restaurant Ambiance", category: "Interior" },
  { src: masalaDosa, title: "Masala Dosa", category: "Food" },
  { src: galleryChef, title: "Master Chef at Work", category: "Behind the Scenes" },
  { src: galleryChutneys, title: "Fresh Chutneys", category: "Food" },
  { src: gheeDosa, title: "Ghee Roast Dosa", category: "Food" },
  { src: aboutFood, title: "Traditional Spread", category: "Food" },
  { src: gallerySambar, title: "Hot Sambar", category: "Food" },
  { src: plainDosa, title: "Plain Dosa on Tawa", category: "Behind the Scenes" },
  { src: specialDosa, title: "Cheese Dosa", category: "Food" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
              Gallery
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              A Visual <span className="text-gradient">Feast</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the beauty of our cuisine through these stunning captures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-primary text-sm font-medium">{image.category}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl shadow-card"
              />
              <div className="mt-6 text-center">
                <span className="text-primary text-sm font-medium">{selectedImage.category}</span>
                <h3 className="font-display text-2xl font-semibold text-foreground mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Follow Us on <span className="text-gradient">Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Tag us @dosaking for a chance to be featured
            </p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              @dosaking
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
