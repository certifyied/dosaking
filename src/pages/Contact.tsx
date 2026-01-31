import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";

interface ContactInfo {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  title: string;
  details: string[];
  isAddress?: boolean;
  isPhone?: boolean;
  isEmail?: boolean;
  phone?: string;
  email?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["93 Holland Avenue", "Ottawa, Ontario K1Y 0X1", "Canada"],
    isAddress: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(613) 790-8316"],
    phone: "+16137908316",
    isPhone: true,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Thu: 11:00 AM - 10:00 PM", "Fri - Sat: 11:00 AM - 11:00 PM" , "Sun: 11:00 AM - 10:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dosaking.com"],
    email: "info@dosaking.com",
    isEmail: true,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us – Best South Indian Restaurant in Ottawa, Canada</title>
        <meta 
          name="description" 
          content="Contact the best South Indian restaurant in Ottawa, Canada. Get in touch with Dosa King Palace for reservations, catering services, location details, and inquiries." 
        />
      </Helmet>
      <StructuredData type="restaurant" />
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
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or want to place an order? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-6 text-center hover:shadow-card transition-all duration-500 border border-border"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.isAddress ? (
                    <address className="not-italic text-muted-foreground text-sm space-y-1">
                      {info.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </address>
                  ) : info.isPhone && info.phone ? (
                    <a 
                      href={`tel:${info.phone}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                      aria-label={`Call Dosa King Palace at ${info.details[0]}`}
                    >
                      {info.details[0]}
                    </a>
                  ) : info.isEmail && info.email ? (
                    <a 
                      href={`mailto:${info.email}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                      aria-label={`Email Dosa King Palace at ${info.email}`}
                    >
                      {info.details[0]}
                    </a>
                  ) : (
                    info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="w-full max-w-6xl mx-auto">
              <div className="bg-card rounded-2xl p-4 md:p-6 shadow-soft border border-border overflow-hidden">
                <div className="w-full h-[500px] md:h-[600px] lg:h-[70vh] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890123!2d-73.98765432109876!3d40.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05d246e76ddd%3A0xd754c68b004e46d6!2sDosa+King+%7C+Indian+Restaurant+%7C+Bar!5e0!3m2!1sen!2sus!4v1735632000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dosa King Location"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Taste the <span className="text-gradient">Legend</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Visit us today and experience the authentic taste of South India. 
              We're waiting to serve you our legendary dosas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="tel:+16137908316"
                  aria-label="Call Dosa King Restaurant"
                  className="cursor-pointer"
                >
                  Call Now
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=93+Holland+Ave,+Ottawa,+ON+K1Y+0X1,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Dosa King Restaurant"
                  className="cursor-pointer"
                >
                  Get Directions
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

export default Contact;
