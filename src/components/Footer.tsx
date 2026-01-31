import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import dosakingLogo from "@/assets/dosaking_logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <motion.img
                src={dosakingLogo}
                alt="Dosa King"
                whileHover={{ scale: 1.05 }}
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Crafting the perfect dosa since 1995. Experience the authentic taste of South India.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/dosa_king_ottawa?igsh=YmkwOXFyYWtrZW9o"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Gallery", "Blog", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <div>93 Holland Avenue</div>
                  <div>Ottawa, Ontario K1Y 0X1</div>
                  <div>Canada</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a 
                  href="tel:+16137908316" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Call Dosa King Palace at (613) 790-8316"
                >
                  (613) 790-8316
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <div>Mon - Thu: 11:00 AM - 10:00 PM</div>
                  <div>Fri - Sat: 11:00 AM - 11:00 PM</div>
                  <div>Sun: 11:00 AM - 10:00 PM</div>
                </div>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Dosa King. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
