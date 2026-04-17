import React from "react";
import { motion } from "framer-motion";

import food1 from "@/assets/IMG_20250302_130512-scaled.jpg";
import food2 from "@/assets/egg-kothu-parotta.jpg";
import food3 from "@/assets/mutton-biryani-50-people-wide.jpg";
import food4 from "@/assets/TheWell_one-pot-chana-palak-masala_AS_391359553.jpg";
import food5 from "@/assets/734S2NWZK72HPTEZXKGO2P54.webp";
import food6 from "@/assets/paper-butter-masala-dosa-500x500.webp";

const foods = [
  { img: food1, name: "CHICKEN MANCHURIAN" },
  { img: food2, name: "EGG KOTHU POROTTA" },
  { img: food3, name: "MUTTON BIRIYANI COMBO" },
  { img: food4, name: "CHANNA PALAK" },
  { img: food5, name: "CONE DOSA" },
  { img: food6, name: "BUTTER PAPER\nMASALA DOSA" },
];

function OurFood() {
  return (
    <div className="bg-background py-16">
      
      <div className="container mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Food</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A delicious collection of our signature dishes made fresh with authentic South Indian flavors.
          </p>
        </div>

        {/* Grid Layout (Equal Size Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md group relative"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-lg font-semibold text-center px-3 whitespace-pre-line">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurFood;