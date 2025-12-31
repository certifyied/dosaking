import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Leaf, Award, Users, Star, ChefHat } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

import aboutFood from "@/assets/about-food.jpg";
import galleryChef from "@/assets/gallery-chef.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dosa is crafted with passion and care, just like home-cooked meals.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest ingredients daily to ensure authentic taste.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in South Indian cuisine across the region.",
  },
  {
    icon: Users,
    title: "Family Legacy",
    description: "Three generations of dosa masters sharing their craft with you.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Started our journey with a passion for authentic dosas and fresh flavors"
  },
  {
    year: "2024",
    title: "First Milestone",
    description: "Built a strong local customer base and refined our signature menu"
  },
  {
    year: "2025",
    title: "Growth Phase",
    description: "Expanded operations and increased daily customer reach"
  },
  {
    year: "Future",
    title: "Digital & Expansion",
    description: "Planning online ordering, delivery services, and new outlets"
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              South Indian <span className="text-gradient">Dosa Making</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A journey of passion, tradition, and the pursuit of the perfect dosa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-card"
                >
                  <img
                    src={aboutFood}
                    alt="Traditional South Indian spread"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card">
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-display text-2xl font-bold text-foreground">29+</div>
                      <div className="text-muted-foreground text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Authentic South Indian<span className="text-gradient"> Dining Experience in Canada</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    DosaKing Palace is a premier South Indian restaurant in Canada, dedicated to serving authentic flavours inspired by the rich culinary traditions of South India. Established in October 2023, the restaurant was founded with a clear vision — to offer high-quality South Indian cuisine prepared using traditional recipes, fresh ingredients, and uncompromising standards.
                  </p>
                  <p>
                    Word of his crispy, golden dosas spread quickly. Neighbors became regulars, 
                    and regulars became family. What started as a passion project became a 
                    movement to preserve and celebrate authentic South Indian cuisine.
                  </p>
                  <p>
                    Today, Dosa King stands as a testament to that humble beginning. Every dosa 
                    we serve carries the same love, the same precision, and the same dedication 
                    to perfection that Shri Raghunathan instilled in every crisp we made.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                What Defines Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-background rounded-2xl p-8 text-center hover:shadow-card transition-all duration-500"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Milestones & <span className="text-gradient">Memories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <ScrollReveal
                  key={index}
                  delay={index * 0.15}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Content */}
                    <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 shadow-glow" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" className="lg:order-2">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-card"
                >
                  <img
                    src={galleryChef}
                    alt="Our master chef"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:order-1">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Team
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Meet the <span className="text-gradient">Masters</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team of expert chefs brings decades of combined experience to every dish. 
                  Trained in the traditional methods of South Indian cooking, they ensure that 
                  every dosa meets our exacting standards of quality and taste.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">15+</strong> Expert Chefs
                  </span>
                </div>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Join Our Team</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
