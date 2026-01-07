import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

// Sample testimonial data - can be moved to a separate file or API later
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Food Blogger",
    company: "Ottawa Foodie",
    message: "Dosa King has the most authentic South Indian food I've tasted outside of India. The dosas are perfectly crispy, and the sambar is absolutely divine. A must-visit for anyone craving authentic flavors!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Regular Customer",
    message: "I've been coming here for months, and the quality never disappoints. The staff is friendly, the food is consistently excellent, and the prices are very reasonable. My go-to place for weekend breakfast!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    designation: "Local Resident",
    message: "As someone from South India, I can vouch for the authenticity of the food here. The masala dosa reminds me of home. The restaurant has become a regular spot for our family gatherings.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Restaurant Critic",
    company: "Ottawa Dining Guide",
    message: "Dosa King stands out for its commitment to traditional cooking methods. The attention to detail in every dish is remarkable. The ghee roast dosa is particularly outstanding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    designation: "Food Enthusiast",
    message: "I tried South Indian food for the first time here, and I'm hooked! The variety of dosas is impressive, and each one is better than the last. The chutneys are a perfect complement to the dosas.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    designation: "Business Owner",
    message: "The consistency in quality and service is what keeps me coming back. Whether it's a quick breakfast or a family dinner, Dosa King always delivers. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
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

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Message */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow relative z-10">
                    "{testimonial.message}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.designation}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </p>
                    </div>
                  </div>

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
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all"
                  >
                    Leave a Review
                  </Link>
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

