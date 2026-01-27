import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Star, Award, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuCard } from "@/components/MenuCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import heroDosa from "@/assets/dosa_banner.jpg";
import plainDosa from "@/assets/new_plain_dosa.jpg";
import masalaDosa from "@/assets/new_masala_dosa.jpg";
import gheeDosa from "@/assets/new_ghee_roast.jpg";
import cheeseDosa from "@/assets/new_Cheese _Dosa.jpeg";

const featuredItems = [
  {
    name: "Plain Dosa",
    description: "Crispy golden dosa, served with sambar and chutneys",
    image: plainDosa,
  },
  {
    name: "Masala Dosa",
    description: "Classic dosa filled with spiced potato masala",
    image: masalaDosa,
    tag: "Popular",
  },
  {
    name: "Ghee Roast",
    description: "Extra crispy dosa roasted in pure clarified butter",
    image: gheeDosa,
  },
  {
    name: "Cheese Dosa",
    description: "Fusion favorite with melted cheese topping",
    image: cheeseDosa,
    tag: "Chef's Special",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.7", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const Index = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Best South Indian Restaurant Ottawa, Canada | Dosa King Palace</title>
        <meta 
          name="description" 
          content="Enjoy authentic South Indian flavors at the best South Indian restaurant in Canada, Ottawa. Dosa King Palace serves crispy dosas, rich curries, and traditional tastes." 
        />
      </Helmet>
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
            The Best South Indian Restaurant in Ottawa
          </motion.h1>

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                Made with love using generations-old recipes, delivering the taste you expect from the best South Indian restaurant in Ottawa.
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
                  src={plainDosa}
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
                  Where Every Dosa Tells a Story of Tradition, Flavor & <span className="text-gradient">Love</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Craving authentic South Indian flavors? You're in the right place! At Dosa King, we delight you with crispy dosas, fragrant biryanis, and wholesome homestyle comfort food that takes your taste buds straight to Chennai — right here on Holland Avenue. Experience why we're known as the best South Indian restaurant in Ottawa for genuine taste and unforgettable meals.
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
                Visit us today or order online to experience authentic South Indian tradition at the best South Indian restaurant in Ottawa
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
