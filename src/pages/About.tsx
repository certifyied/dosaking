import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Leaf, Award, Users, Star, ChefHat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";

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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Best South Indian Restaurant Ottawa, Canada | Dosa King Palace</title>
        <meta 
          name="description" 
          content="Dosa King Palace is the best South Indian restaurant in Canada, Ottawa, offering authentic dosas, idlis, sambar, and delicious South Indian cuisine." 
        />
      </Helmet>
      <StructuredData type="organization" />
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
              About <span className="text-gradient">Dosa King Ottawa</span>
            </h1>
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
                      <div className="font-display text-2xl font-bold text-foreground">Since</div>
                      <div className="text-muted-foreground text-sm">October 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Story
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  From Tradition to <span className="text-gradient">Your Table</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Dosa King Ottawa was born from a heartfelt dream—to bring the comforting, authentic flavors of South India to families across the city. As a proud family South Indian restaurant in Ottawa, our story begins in Kerala, where our founder grew up surrounded by the rich aromas of home-cooked meals, from sizzling mustard seeds to perfectly crisp dosas fresh off the griddle.
                  </p>
                  <p>
                    Since opening in October 2023, our mission has been simple: serve traditional South Indian cuisine made with fresh ingredients, time-honored recipes, and genuine care. What started as a small passion quickly grew into a beloved gathering place where guests feel like family.
                  </p>
                  <p>
                    Today, Dosa King continues to celebrate heritage, flavor, and togetherness—offering every guest an authentic dining experience that brings South Indian traditions straight to your table.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Authentic Dining Experience Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Authentic South Indian <span className="text-gradient">Dining Experience in Canada</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
               Dosa King Palace is a family South Indian restaurant in Ottawa dedicated to serving authentic flavours inspired by the rich culinary heritage of South India. When you step through our doors, you’re not just enjoying a meal—you’re experiencing a tradition that has been lovingly passed down through generations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Whether you’re a student missing the taste of home, a food lover eager to explore bold new flavours, or a family looking for comforting, wholesome dishes, Dosa King Palace offers something for everyone. Our commitment to quality, authenticity, and warm hospitality has made us a trusted destination for those seeking genuine South Indian cuisine in a welcoming, family-friendly setting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                What Sets Us Apart
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                What Makes Us <span className="text-gradient">Special</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  The Art of Fermentation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Batters naturally fermented for that signature tang and airy texture. Great dosas begin with great batter, and great batter needs time. We follow age-old techniques, with no shortcuts and no compromises—just patience and tradition.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Traditional Techniques, Modern Standards
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authentic recipes prepared with the highest food safety. Every recipe in our kitchen has a story. Our Mysore masala dosa follows our grandmother's method. Our filter coffee uses the exact blend our family has trusted for decades.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-card rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Community First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving homesick students, adventurous foodies, and families who've made Dosa King their tradition. We've become a home for everyone—whether you're craving a taste of home or exploring South Indian cuisine for the first time, we'll guide you to your new favorite dish.
                </p>
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
                  Our team of expert chefs brings decades of combined experience to every dish. Trained in the traditional methods of South Indian cooking, they ensure that every dosa meets our exacting standards of quality and taste.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <strong className="text-foreground">15+ expert chefs</strong> working together to bring you the authentic flavors of South India. Our chefs, servers, and staff share one passion: great food and genuine hospitality. We're more than a team—we're family, and we're excited to welcome you into it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-gradient">Philosophy</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-background rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Quality Over Everything
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh ingredients, no compromises. We grind our spices in-house and prepare everything from scratch.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-background rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Hospitality From the Heart
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guests are blessings, and we treat you like family. In South Indian culture, "Athithi Devo Bhava"—the guest is God. This ancient principle guides everything we do.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-background rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Preserving Tradition, Embracing Everyone
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a dosa devotee or a first-timer, we'll guide you to your new favorite dish and ensure you leave with a smile.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our Commitment to <span className="text-gradient">You</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Fresh ingredients, prepared daily</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Authentic recipes, traditional methods</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Clean, welcoming environment</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Friendly, knowledgeable staff</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Dietary accommodations (vegetarian, vegan, gluten-free)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Consistent quality you can count on</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">Generous portions at fair prices</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">✓</span>
                  <p className="text-muted-foreground text-lg">A dining experience you'll want to repeat</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Ottawa Loves Dosa King Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Why Ottawa <span className="text-gradient">Loves Dosa King</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-left">
                <p>
                  Spend a day at Dosa King Palace, a beloved family South Indian restaurant in Ottawa, and you’ll witness something truly special. Students gather over comforting plates of sambar rice, families celebrate milestones with generous thalis, and friends and couples come together to enjoy their favorite dosas. It’s a place where both familiar faces and first-time guests feel equally at home.
                </p>
                {/* <p>
                  These moments—the laughter, the satisfied sighs after that first bite, the "this tastes exactly like my grandmother's cooking"—this is why we do what we do. We're not just serving food; we're creating memories and building a community around the rich traditions of South Indian cuisine.
                </p>
                <p className="text-center font-medium text-foreground">
                  At Dosa King, we're building more than a restaurant—we're building a place where food brings people together, where traditions are honored, and where every meal is prepared with love.
                </p> */}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
