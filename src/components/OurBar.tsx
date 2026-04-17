import React from "react";
import { motion } from "framer-motion";

// 👉 Replace these with real images from your assets
import bar1 from "@/assets/refreshing-cocktail-drinks-in-a-beach-bar-fresh-cocktails-photo.jpg";
import bar2 from "@/assets/360_F_121063269_dMVGSZvQKIWjKjocaE8j4mVORjetlqvE.jpg";
import bar3 from "@/assets/premium_photo-1670984940156-c7f833fe8397.avif";
import bar4 from "@/assets/merlin_217021416_a5974a6f-2a70-4d75-894f-5c04b3ccfa5e-superJumbo.jpg";
import bar5 from "@/assets/photo-1572116469696-31de0f17cc34.avif";
import bar6 from "@/assets/Bar-Counter.jpg";

const bars = [
  { img: bar1, name: "Classic Cocktails" },
  { img: bar2, name: "Refreshing Drinks" },
  { img: bar3, name: "Bar Interior" },
  { img: bar4, name: "Premium Wines" },
  { img: bar5, name: "Night Vibes" },
  { img: bar6, name: "Bar Counter" },
];

function OurBar() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Bar</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Enjoy a relaxing atmosphere with refreshing beverages, crafted drinks, and a vibrant dining experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md group relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-lg font-semibold text-center px-3">
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

export default OurBar;