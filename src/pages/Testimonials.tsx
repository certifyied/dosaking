import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sneha Patel",
    message: "Absolutely delicious and authentic South Indian food in Ottawa. Crispy dosas, flavorful chutneys, and excellent sambar. Curries, biriyani, and drinks were equally impressive. Friendly staff and a warm, welcoming atmosphere make this a must-visit.",
    rating: 5,
    mustTry: "Chicken 65 Biriyani, Ghee Dosa, Chicken Tikka Dosa",
    ratings: "Food 5/5 | Service 5/5 | Atmosphere 5/5",
  },
  {
    id: 2,
    name: "M B",
    message: "Hands down the best Chicken 65 ever. Extra spicy, juicy, and packed with bold flavor—nothing else comes close. Butter paneer masala is also top-tier. A dream spot for Indian food lovers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tyson Avery",
    message: "Fantastic dining experience! Perfectly crisp dosas served with delicious chutneys and sambar. The noodles were spicy, fresh, and full of flavor. Calm ambiance and great service made the meal even better.",
    rating: 5,
    ratings: "Food 5/5 | Service 5/5 | Atmosphere 5/5",
  },
  {
    id: 4,
    name: "Atif Mehmood",
    message: "One of the best dosas in Ottawa—crispy, flavorful, and perfectly cooked. Chicken 65 biriyani was generous and delicious. Finished with authentic Indian coffee that tasted just like home.",
    rating: 5,
    recommended: "Mysore Masala Dosa, Chicken 65 Biriyani",
  },
  {
    id: 5,
    name: "Indrani Das",
    message: "Fresh, crispy dosas and delicious food overall. Tried Chicken Kothu Porotta for the first time and loved it. Quick service and a calm environment. Highly recommended for food lovers.",
    rating: 5,
    ratings: "Food 5/5 | Service 5/5 | Atmosphere 4/5",
  },
  {
    id: 6,
    name: "Gurpreet Khokhar",
    message: "Absolutely loved the authentic flavors! Ghee masala dosa and idli-vada were outstanding. Special thanks to Mishal for the warm and attentive service. Comforting South Indian food done right.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aiswarya Madhu",
    message: "The best South Indian restaurant I've visited in Ottawa. Kothu porotta and chicken tikka dosa were mouth-watering. Generous portions and excellent service made the experience even better.",
    rating: 5,
    recommended: "Chicken 65 Biriyani",
  },
  {
    id: 8,
    name: "Kirti Gupta",
    message: "Loved the vibe and the food! The Chicken Porotta and Chicken Biriyani combo is unforgettable. Easily the best South Indian spot I've tried so far.",
    rating: 5,
  },
  {
    id: 9,
    name: "Anjitha T Raj",
    message: "Amazing experience with delicious food and friendly staff. Mysore Podi Masala Dosa, Ghee Podi Idly, and Medu Vada were all perfect. Will definitely be back again!",
    rating: 5,
    recommended: "Masala Dosa, Mysore Masala Dosa, Podi Idly",
  },
  {
    id: 10,
    name: "Adithyan K. O. P",
    message: "Warm, welcoming service and outstanding food quality. The mutton biryani was aromatic, flavorful, and generously portioned. Excellent value for authentic South Indian flavors.",
    rating: 5,
    ratings: "Food 5/5 | Service 5/5 | Atmosphere 5/5",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Reviews – Best South Indian Restaurant in Ottawa, Canada</title>
        <meta 
          name="description" 
          content="Read customer reviews of the best South Indian restaurant in Ottawa, Canada. Discover why guests love the authentic taste, service, and ambience at Dosa King Palace." 
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
              Testimonials
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient">Customers Say</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real experiences from people who love our food
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-500 border border-border h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote size={48} className="text-primary" />
                  </div>

                  {/* Customer Name */}
                  <h3 className="font-display font-semibold text-foreground mb-4 relative z-10">
                    {testimonial.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Message */}
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow relative z-10">
                    {testimonial.message}
                  </p>

                  {/* Supporting Lines */}
                  {(testimonial.mustTry || testimonial.recommended || testimonial.ratings) && (
                    <div className="space-y-2 pt-4 border-t border-border relative z-10">
                      {testimonial.mustTry && (
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Must Try:</span> {testimonial.mustTry}
                        </p>
                      )}
                      {testimonial.recommended && (
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Recommended:</span> {testimonial.recommended}
                        </p>
                      )}
                      {testimonial.ratings && (
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Ratings:</span> {testimonial.ratings}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/30" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Share Your <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We'd love to hear about your visit! Your feedback helps us continue to serve you better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://g.page/r/CdZGTgCLxlTXEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all cursor-pointer"
                  >
                    Leave a Review
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/gallery"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-card border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
                  >
                    View Gallery
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

