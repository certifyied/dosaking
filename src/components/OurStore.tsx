import React from "react";
import { motion } from "framer-motion";

import store1 from "@/assets/MonLapin-Montreal-2025-Canadas100Best-feat-1440x900.jpg";
import store2 from "@/assets/34738585185_36a26560bc_k.jpg";
import store3 from "@/assets/00-cover-23-1920x960.jpg";
import store4 from "@/assets/Five-sails-Canada.jpg";
import store5 from "@/assets/GettyImages-1476284347.jpg";
import store6 from "@/assets/DSF0108.webp";

const images = [store1, store2, store3, store4, store5, store6];

function OurStore() {
  return (
    <div className="bg-background py-16">
      
      <div className="container mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Store</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Take a glimpse into our warm and welcoming space where every dosa is served with love.
          </p>
        </div>

        {/* Grid Layout (Same Size) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img}
                alt={`Dosa King Store ${index + 1}`}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurStore;