import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuCard } from "@/components/MenuCard";

import plainDosa from "@/assets/menu-plain-dosa.jpg";
import masalaDosa from "@/assets/menu-masala-dosa.jpg";
import gheeDosa from "@/assets/menu-ghee-dosa.jpg";
import specialDosa from "@/assets/menu-special-dosa.jpg";

const categories = ["All", "Plain", "Masala", "Ghee", "Special"];

const menuItems = [
  // Plain Dosas
  {
    name: "Plain Dosa",
    description: "Classic crispy dosa served with sambar and coconut chutney",
    price: "₹80",
    image: plainDosa,
    category: "Plain",
  },
  {
    name: "Paper Dosa",
    description: "Extra thin and crispy, the thinnest dosa experience",
    price: "₹100",
    image: plainDosa,
    category: "Plain",
  },
  {
    name: "Rava Dosa",
    description: "Crispy semolina dosa with a unique texture",
    price: "₹110",
    image: plainDosa,
    category: "Plain",
  },
  // Masala Dosas
  {
    name: "Masala Dosa",
    description: "Stuffed with spiced potato masala, our signature dish",
    price: "₹120",
    image: masalaDosa,
    category: "Masala",
    tag: "Bestseller",
  },
  {
    name: "Onion Masala Dosa",
    description: "Topped with caramelized onions and potato filling",
    price: "₹140",
    image: masalaDosa,
    category: "Masala",
  },
  {
    name: "Paneer Masala Dosa",
    description: "Filled with spiced cottage cheese and potato",
    price: "₹180",
    image: masalaDosa,
    category: "Masala",
  },
  // Ghee Dosas
  {
    name: "Ghee Roast",
    description: "Roasted in pure ghee for extra crispness and flavor",
    price: "₹140",
    image: gheeDosa,
    category: "Ghee",
    tag: "Popular",
  },
  {
    name: "Ghee Masala Dosa",
    description: "Ghee roasted with potato masala filling",
    price: "₹160",
    image: gheeDosa,
    category: "Ghee",
  },
  {
    name: "Butter Ghee Roast",
    description: "Double richness with butter and ghee",
    price: "₹170",
    image: gheeDosa,
    category: "Ghee",
  },
  // Special Dosas
  {
    name: "Cheese Dosa",
    description: "Topped with melted mozzarella cheese",
    price: "₹160",
    image: specialDosa,
    category: "Special",
    tag: "Chef's Special",
  },
  {
    name: "Mysore Masala Dosa",
    description: "Spicy red chutney spread with masala filling",
    price: "₹150",
    image: specialDosa,
    category: "Special",
  },
  {
    name: "Spring Dosa",
    description: "Fusion dosa with vegetable spring roll filling",
    price: "₹180",
    image: specialDosa,
    category: "Special",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

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
              Our Menu
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Discover Our <span className="text-gradient">Dosas</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From classic plain to innovative specials, explore our complete collection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card text-muted-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MenuCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                All Dosas Served with <span className="text-gradient">Love</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every dosa comes with our signature sambar, coconut chutney, and tomato chutney. 
                Customize your order with extra ghee, cheese, or your choice of fillings.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Vegetarian
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Jain Options Available
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-spice" />
                  Spice Level Adjustable
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
