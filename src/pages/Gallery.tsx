import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

// Import all gallery images
import biriyaniRice from "@/assets/gallery/Biriyani_Rice.jpeg";
import butterChickenCurry from "@/assets/gallery/Butter Chicken Curry.jpeg";
import channaMasala from "@/assets/gallery/Channa_Masala.jpeg";
import channaPalak from "@/assets/gallery/Channa_Palak.jpeg";
import chapathi from "@/assets/gallery/Chapathi.jpeg";
import chickenSaag from "@/assets/gallery/Chicken Saag.jpeg";
import chicken65Biriyani from "@/assets/gallery/Chicken_65_Biriyani.jpeg";
import chicken65 from "@/assets/gallery/Chicken_65.jpeg";
import chickenBiriyaniBoneIn from "@/assets/gallery/Chicken_Biriyani_(Bone-in).jpeg";
import chickenBiriyaniCombo from "@/assets/gallery/Chicken_Biriyani_Combo.jpeg";
import chickenFriedRice from "@/assets/gallery/Chicken_Fried_Rice.jpeg";
import chickenKothuPorotta from "@/assets/gallery/Chicken_Kothu_Porotta.jpeg";
import chickenKurma from "@/assets/gallery/Chicken_Kurma.jpeg";
import chickenManchurian from "@/assets/gallery/Chicken_Manchurian.jpeg";
import curdVada from "@/assets/gallery/Curd_Vada.jpeg";
import dhalThadka from "@/assets/gallery/Dhal_Thadka.jpeg";
import dragonChicken from "@/assets/gallery/Dragon_Chicken.jpeg";
import eggKothuPorotta from "@/assets/gallery/Egg KothuPorotta.jpeg";
import eggFriedNoodles from "@/assets/gallery/Egg_Fried_Noodles.jpeg";
import gheePodiIdly from "@/assets/gallery/Ghee_Podi_Idly.jpeg";
import gobiManchurian from "@/assets/gallery/Gobi_Manchurian.jpeg";
import idlyPlate from "@/assets/gallery/Idly_Plate.jpeg";
import idlyVadaCombo from "@/assets/gallery/Idly_Vada_Combo.jpeg";
import japanChicken from "@/assets/gallery/Japan_Chicken_(Erode Special).jpeg";
import kadaiChicken from "@/assets/gallery/Kadai Chicken.jpeg";
import karuvepilaChicken from "@/assets/gallery/Karuvepila_Chicken.jpeg";
import keralaNadanChickenCurry from "@/assets/gallery/Kerala_Nadan_Chicken_Curry.jpeg";
import lambCurry from "@/assets/gallery/Lamb Curry.jpeg";
import lambKurma from "@/assets/gallery/Lamb Kurma.jpeg";
import lambSaag from "@/assets/gallery/Lamb Saag.jpeg";
import lambKothuPorotta from "@/assets/gallery/Lamb_Kothu_Porotta.jpeg";
import lentilSoup from "@/assets/gallery/lentil_soup.jpeg";
import meduVada from "@/assets/gallery/Medu_Vada.jpeg";
import muttonBiriyaniCombo from "@/assets/gallery/Mutton_Biriyani_Combo.jpeg";
import muttonBiriyani from "@/assets/gallery/Mutton_Biriyani.jpeg";
import muttonChukka from "@/assets/gallery/Mutton_Chukka.jpeg";
import muttonGheeRoast from "@/assets/gallery/Mutton_Ghee_Roast.jpeg";
import navaratnaVegetableKurma from "@/assets/gallery/Navaratna_Vegetable_Kurma.jpeg";
import onionPakoras from "@/assets/gallery/onion_pakors.jpeg";
import palakPaneer from "@/assets/gallery/Palak_Paneer.jpeg";
import paneerButterMasala from "@/assets/gallery/Paneer_Butter_ Masala.jpeg";
import paneerManchurian from "@/assets/gallery/Paneer_Manchurian.jpeg";
import podiIdly from "@/assets/gallery/Podi_Idly.jpeg";
import porotta from "@/assets/gallery/Porotta.jpeg";
import sambarIdlys from "@/assets/gallery/Sambar_Idlys.jpeg";
import sambarVada from "@/assets/gallery/Sambar_Vada.jpeg";
import samosaChaat from "@/assets/gallery/samosa_chaat.jpeg";
import samosa from "@/assets/gallery/samosa.jpeg";
import schezwanVegFriedNoodles from "@/assets/gallery/Schezwan _Veg_Fried_Noodles.jpeg";
import schezwanChickenFriedRice from "@/assets/gallery/Schezwan_Chicken_Fried_Rice.jpeg";
import schezwanEggFriedRice from "@/assets/gallery/Schezwan_Egg_Fried_Rice.jpeg";
import vegFriedRiceNoodles from "@/assets/gallery/Veg_Fried_Rice_Noodles.jpeg";
import vegKothuPorotta from "@/assets/gallery/Veg_Kothu_Porotta.jpeg";

// Helper function to format title from filename
const formatTitle = (filename: string): string => {
  return filename
    .replace(/_/g, " ")
    .replace(/\.jpeg$/i, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const galleryImages = [
  { src: biriyaniRice, title: formatTitle("Biriyani_Rice"), category: "Biryani" },
  { src: butterChickenCurry, title: formatTitle("Butter Chicken Curry"), category: "Curries" },
  { src: channaMasala, title: formatTitle("Channa_Masala"), category: "Veg Curries" },
  { src: channaPalak, title: formatTitle("Channa_Palak"), category: "Veg Curries" },
  { src: chapathi, title: formatTitle("Chapathi"), category: "Breads" },
  { src: chickenSaag, title: formatTitle("Chicken Saag"), category: "Non-Veg Curries" },
  { src: chicken65Biriyani, title: formatTitle("Chicken_65_Biriyani"), category: "Biryani" },
  { src: chicken65, title: formatTitle("Chicken_65"), category: "Appetizers" },
  { src: chickenBiriyaniBoneIn, title: formatTitle("Chicken_Biriyani_(Bone-in)"), category: "Biryani" },
  { src: chickenBiriyaniCombo, title: formatTitle("Chicken_Biriyani_Combo"), category: "Biryani" },
  { src: chickenFriedRice, title: formatTitle("Chicken_Fried_Rice"), category: "Indo-Chinese" },
  { src: chickenKothuPorotta, title: formatTitle("Chicken_Kothu_Porotta"), category: "Kothu Porotta" },
  { src: chickenKurma, title: formatTitle("Chicken_Kurma"), category: "Non-Veg Curries" },
  { src: chickenManchurian, title: formatTitle("Chicken_Manchurian"), category: "Appetizers" },
  { src: curdVada, title: formatTitle("Curd_Vada"), category: "Idly & Vada" },
  { src: dhalThadka, title: formatTitle("Dhal_Thadka"), category: "Veg Curries" },
  { src: dragonChicken, title: formatTitle("Dragon_Chicken"), category: "Appetizers" },
  { src: eggKothuPorotta, title: formatTitle("Egg KothuPorotta"), category: "Kothu Porotta" },
  { src: eggFriedNoodles, title: formatTitle("Egg_Fried_Noodles"), category: "Indo-Chinese" },
  { src: gheePodiIdly, title: formatTitle("Ghee_Podi_Idly"), category: "Idly & Vada" },
  { src: gobiManchurian, title: formatTitle("Gobi_Manchurian"), category: "Appetizers" },
  { src: idlyPlate, title: formatTitle("Idly_Plate"), category: "Idly & Vada" },
  { src: idlyVadaCombo, title: formatTitle("Idly_Vada_Combo"), category: "Idly & Vada" },
  { src: japanChicken, title: formatTitle("Japan_Chicken_(Erode Special)"), category: "Appetizers" },
  { src: kadaiChicken, title: formatTitle("Kadai Chicken"), category: "Non-Veg Curries" },
  { src: karuvepilaChicken, title: formatTitle("Karuvepila_Chicken"), category: "Appetizers" },
  { src: keralaNadanChickenCurry, title: formatTitle("Kerala_Nadan_Chicken_Curry"), category: "Non-Veg Curries" },
  { src: lambCurry, title: formatTitle("Lamb Curry"), category: "Non-Veg Curries" },
  { src: lambKurma, title: formatTitle("Lamb Kurma"), category: "Non-Veg Curries" },
  { src: lambSaag, title: formatTitle("Lamb Saag"), category: "Non-Veg Curries" },
  { src: lambKothuPorotta, title: formatTitle("Lamb_Kothu_Porotta"), category: "Kothu Porotta" },
  { src: lentilSoup, title: formatTitle("lentil_soup"), category: "Soup" },
  { src: meduVada, title: formatTitle("Medu_Vada"), category: "Idly & Vada" },
  { src: muttonBiriyaniCombo, title: formatTitle("Mutton_Biriyani_Combo"), category: "Biryani" },
  { src: muttonBiriyani, title: formatTitle("Mutton_Biriyani"), category: "Biryani" },
  { src: muttonChukka, title: formatTitle("Mutton_Chukka"), category: "Appetizers" },
  { src: muttonGheeRoast, title: formatTitle("Mutton_Ghee_Roast"), category: "Appetizers" },
  { src: navaratnaVegetableKurma, title: formatTitle("Navaratna_Vegetable_Kurma"), category: "Veg Curries" },
  { src: onionPakoras, title: formatTitle("onion_pakors"), category: "Appetizers" },
  { src: palakPaneer, title: formatTitle("Palak_Paneer"), category: "Veg Curries" },
  { src: paneerButterMasala, title: formatTitle("Paneer_Butter_ Masala"), category: "Veg Curries" },
  { src: paneerManchurian, title: formatTitle("Paneer_Manchurian"), category: "Appetizers" },
  { src: podiIdly, title: formatTitle("Podi_Idly"), category: "Idly & Vada" },
  { src: porotta, title: formatTitle("Porotta"), category: "Breads" },
  { src: sambarIdlys, title: formatTitle("Sambar_Idlys"), category: "Idly & Vada" },
  { src: sambarVada, title: formatTitle("Sambar_Vada"), category: "Idly & Vada" },
  { src: samosaChaat, title: formatTitle("samosa_chaat"), category: "Appetizers" },
  { src: samosa, title: formatTitle("samosa"), category: "Appetizers" },
  { src: schezwanVegFriedNoodles, title: formatTitle("Schezwan _Veg_Fried_Noodles"), category: "Indo-Chinese" },
  { src: schezwanChickenFriedRice, title: formatTitle("Schezwan_Chicken_Fried_Rice"), category: "Indo-Chinese" },
  { src: schezwanEggFriedRice, title: formatTitle("Schezwan_Egg_Fried_Rice"), category: "Indo-Chinese" },
  { src: vegFriedRiceNoodles, title: formatTitle("Veg_Fried_Rice_Noodles"), category: "Indo-Chinese" },
  { src: vegKothuPorotta, title: formatTitle("Veg_Kothu_Porotta"), category: "Kothu Porotta" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
              Gallery
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              A Visual <span className="text-gradient">Feast</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience the beauty of our cuisine through these stunning captures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-primary text-sm font-medium">{image.category}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl shadow-card"
              />
              <div className="mt-6 text-center">
                <span className="text-primary text-sm font-medium">{selectedImage.category}</span>
                <h3 className="font-display text-2xl font-semibold text-foreground mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Follow Us on <span className="text-gradient">Instagram</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Tag us @dosaking for a chance to be featured
            </p>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              @dosaking
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
