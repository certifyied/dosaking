import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Star, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuCard } from "@/components/MenuCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import heroDosa from "@/assets/hero-dosa.jpg";
import plainDosa from "@/assets/menu-plain-dosa.jpg";
import masalaDosa from "@/assets/menu-masala-dosa.jpg";
import gheeDosa from "@/assets/menu-ghee-dosa.jpg";
import specialDosa from "@/assets/menu-special-dosa.jpg";

const featuredItems = [
  {
    name: "Plain Dosa",
    description: "Crispy golden dosa, served with sambar and chutneys",
    price: "₹80",
    image: plainDosa,
  },
  {
    name: "Masala Dosa",
    description: "Classic dosa filled with spiced potato masala",
    price: "₹120",
    image: masalaDosa,
    tag: "Popular",
  },
  {
    name: "Ghee Roast",
    description: "Extra crispy dosa roasted in pure clarified butter",
    price: "₹140",
    image: gheeDosa,
  },
  {
    name: "Cheese Dosa",
    description: "Fusion favorite with melted cheese topping",
    price: "₹160",
    image: specialDosa,
    tag: "Chef's Special",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Clock, value: "29", label: "Years of Legacy" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const Index = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={heroDosa}
            alt="Crispy golden dosa with chutneys"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
              Authentic South Indian Cuisine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            Crispy. Golden.
            <br />
            <span className="text-gradient">Legendary Dosas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
          >
            Experience the art of traditional dosa making, perfected over three decades
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Order Now</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Specialties
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured <span className="text-gradient">Dosas</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Handcrafted with love, using traditional recipes passed down through generations
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MenuCard {...item} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/menu">View Full Menu</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl" />
                <img
                  src={masalaDosa}
                  alt="Our story"
                  className="relative w-full rounded-2xl shadow-card"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Story
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  A Legacy of <span className="text-gradient">Taste</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                Since 2023, Dosa King has been serving authentic South Indian cuisine with a passion for perfection. What started as a small family kitchen has grown into a beloved destination for dosa lovers across the city.

                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every dosa we serve carries the warmth of tradition, the crispness of expertise, 
                  and the love of three generations of dosa masters.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">Read Our Story</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-spice/20" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Experience the <span className="text-gradient">Best Dosa</span> in Town?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Visit us today or order online for a taste of authentic South Indian tradition
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Order Now</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/gallery">View Gallery</Link>
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

export default Index;
