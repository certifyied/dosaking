import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

// Import blog images sequentially (blog1 → first blog, blog2 → second blog, etc.)
import blog1 from "@/assets/blog_images/front-view-pakistan-food-arrangement.jpg";
import blog2 from "@/assets/blog_images/high-angle-pakistan-food-with-rice.jpg";
import blog3 from "@/assets/blog_images/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus.jpg";
import blog4 from "@/assets/blog_images/side-view-casserole-with-sauces.jpg";
import blog5 from "@/assets/blog_images/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table.jpg";
import blog6 from "@/assets/blog_images/top-view-assortment-with-delicious-pakistan-meal.jpg";
import blog7 from "@/assets/blog_images/saag-paneer-FT-RECIPE0520-9d049e7557564c818ddd0d6391069d2a.jpg";
import blog8 from "@/assets/blog_images/intro-1733153567.jpg";
import blog9 from "@/assets/blog_images/indian-lentil-and-egg-curry-148613-1.jpg";
import blog10 from "@/assets/blog_images/Indian-Breakfast-1024x682.jpg";
import blog11 from "@/assets/blog_images/image2-3.jpg";
import blog12 from "@/assets/blog_images/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg";
import blog13 from "@/assets/blog_images/chicken-saagwala-with-spinach-1957402-hero-01-19aac800e82e48e0978b12b2667390f6.jpg";
import blog14 from "@/assets/blog_images/chicken-chickpea-curry-163942-1.jpg";
import blog15 from "@/assets/blog_images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__04__20160418-Aloo-GobiHelen-Rushbrook-dfa81f9ba7f249879a91c127dc6ff385.jpg";
import blog16 from "@/assets/delicious-indian-veg-food.jpg";
import blog17 from "@/assets/Dosa.jpg";
import blog18 from "@/assets/Blog-2.jpg";
import blog19 from "@/assets/indian-food-dosa-X2.jpg";
import blog20 from "@/assets/egyptian-traditional-food-1200x720.jpg";
import blog21 from "@/assets/India-for-Beginners-custom-tours-8.jpg";
import blog22 from "@/assets/how-to-make-dosa-1957716-hero-01-e0f8464649aa4be4b0be56f08698f4a4.jpg";
import blog23 from "@/assets/jiWvUC7AWg5unUmlo4NBrF3nybnE0cJewsVfkQiy.jpg";
import blog24 from "@/assets/Plain-Dosa.webp";
import blog25 from "@/assets/82571270.avif";
import blog26 from "@/assets/2017a19b5445848da28207517f466e1d.jpg";
import blog27 from "@/assets/delicious-indian-veg-food.jpg";
import blog28 from "@/assets/photo-1615366105533-5b8f3255ea5d.avif";
import blog29 from "@/assets/61879742.avif";
import blog30 from "@/assets/ai-generated-a-dosa-also-called-dosai-dosey-or-dosha-is-a-thin-paratha-in-south-indian-cuisine-photo.jpg";

// Sample blog data - can be moved to a separate file or API later
const blogPosts = [
  {
    id: 1,
    title: "Best South Indian Restaurant in Ottawa – Authentic Taste, Timeless Tradition",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog7,
    date: "2025-01-15",
    category: "Culture",
    content: `When searching for the Best South Indian Restaurant in Ottawa, food lovers are not just looking for a place to eat — they are looking for authenticity, consistency, and flavors that truly represent South India’s rich culinary heritage. At Dosa King, tradition meets taste in every dish served.
Located in the heart of Ottawa, Dosa King has built a reputation for delivering genuine South Indian cuisine prepared with time-honored techniques and high-quality ingredients.
`
  },
  {
    id: 2,
    title: "Signature Dosa – The Star of the Menu",
    excerpt: "The inspiring story of how Dosa King grew from a small family kitchen to becoming a beloved destination for authentic South Indian cuisine.",
    image: blog8,
    date: "2025-2-12",
    category: "Our Story",
    content: `A visit to the Best South Indian Restaurant in Ottawa would be incomplete without trying a perfectly prepared dosa.

Dosa is a thin, golden crepe made from fermented rice and lentil batter. At Dosa King, each dosa is freshly prepared on a hot griddle to achieve the ideal crisp texture while remaining soft inside.

Popular varieties include:

Masala Dosa – Filled with spiced mashed potatoes, offering the perfect balance of flavor and texture.

Plain Dosa – Simple, crispy, and classic, ideal for those who appreciate traditional taste.

Mysore Dosa – Layered with flavorful chutney, perfect for spice lovers.

Cheese Dosa – A modern twist loved by families and kids alike.

Each dosa is served with freshly prepared chutneys and aromatic sambar, completing the authentic South Indian experience.
Served with freshly prepared coconut chutney and warm sambar, dosa delivers a complete and satisfying experience.`
  },
  {
    id: 3,
    title: "Traditional South Indian Thali – A Balanced Feast",
    excerpt: "The inspiring story of how Dosa King grew from a small family kitchen to becoming a beloved destination for authentic South Indian cuisine.",
    image: blog9,
    date: "2025-01-22",
    category: "Our Story",
    content: `For guests who want to experience multiple flavors in one meal, the traditional South Indian thali is the perfect choice.
A typical thali includes:
●	Steamed rice

●	Sambar

●	Rasam

●	Vegetable curries

●	Yogurt

●	Pickles

●	Crispy papad

Each element complements the others, creating a harmonious balance of spicy, tangy, savory, and mild flavors. This balanced approach to cooking makes South Indian cuisine both nourishing and fulfilling.
`
  },
  {
    id: 4,
    title: "Vegetarian and Vegan-Friendly Dining",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog10,
    date: "2024-02-03",
    category: "Culture",
    content: `One of the defining features of South Indian cuisine is its natural emphasis on vegetarian dishes. Lentils provide protein, vegetables add freshness, and coconut brings richness without heaviness.
Dosa King offers a wide selection of vegetarian, vegan, and gluten-friendly options, making it an inclusive dining destination for diverse dietary needs.
From soft idlis and crispy medu vadas to lemon rice and tamarind rice, every dish is prepared with authenticity and care.`
  },
  {
    id: 5,
    title: "Fresh Ingredients and Consistent Quality",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog11,
    date: "2024-07-18",
    category: "Cooking Tips",
    content: `Consistency is what truly defines the Best South Indian Restaurant in Ottawa. Every dish at Dosa King is prepared using fresh vegetables, quality lentils, premium rice, and carefully sourced spices.Traditional tempering techniques — heating mustard seeds, curry leaves, and spices in oil — enhance aroma and flavor, giving each dish its distinctive character.Maintaining hygiene, quality, and authenticity ensures that every guest enjoys a reliable and satisfying experience.`
  },
  {
    id: 6,
    title: "A Warm and Welcoming Atmosphere",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog12,
    date: "2024-04-17",
    category: "Our Story",
    content: `Great food becomes even better when paired with warm hospitality. Dosa King offers a comfortable and inviting atmosphere where families, students, professionals, and visitors can gather and enjoy a memorable meal.
Whether dining in, ordering takeout, or planning a family dinner, guests appreciate the attentive service and welcoming environment.`
  },
  {
    id: 7,
    title: "A Warm and Welcoming Atmosphere",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog13,
    date: "2024-01-07",
    category: "Culture",
    content: `Great food becomes even better when paired with warm hospitality. Dosa King offers a comfortable and inviting atmosphere where families, students, professionals, and visitors can gather and enjoy a memorable meal.
Whether dining in, ordering takeout, or planning a family dinner, guests appreciate the attentive service and welcoming environment.`
  },
  {
    id: 8,
    title: "Experience Authentic South Indian Flavors Today",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog14,
    date: "2024-02-20",
    category: "Our Story",
    content: `If you are craving crispy dosa, comforting sambar, and balanced South Indian flavors, your search for the Best South Indian Restaurant in Ottawa ends here.
Every dish reflects tradition, quality, and passion for authentic cooking. Visit Dosa King and experience the true taste of South India in Ottawa.`
  },
  {
    id: 9,
    title: "A True Representation of South Indian Cuisine",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog15,
    date: "2024-09-20",
    category: "Culture",
    content: `South Indian cuisine is distinct, vibrant, and deeply rooted in tradition. Unlike heavier North Indian dishes that rely on cream-based gravies, South Indian food focuses on rice, lentils, coconut, tamarind, and aromatic tempering spices.
Fermentation is a key element in many dishes. The naturally fermented batter used for dosa and idli enhances flavor, improves digestibility, and creates that signature tangy taste. This traditional preparation method reflects centuries of culinary wisdom.
From the crackle of mustard seeds in hot oil to the fragrance of curry leaves and dried red chilies, every step of cooking adds depth and character.`
  },
  {
    // 1st
    id: 10,
    title: "Why Dosa King Palace is the Best South Indian Restaurant in Ottawa You Must Try",
    excerpt: "Discover why Dosa King Palace is the best South Indian restaurant in Ottawa, featuring authentic flavors, an extensive menu, quality ingredients, and a welcoming dining experience that keeps guests coming back.",
    image: blog1,
    date: "2023-01-15",
    category: "Cooking Tips",
    content: `If you're searching for the best South Indian restaurant in Ottawa, look no further than Dosa King Palace. With authentic flavors, welcoming ambience, and a menu that celebrates the diverse culinary traditions of South India, Dosa King Palace has become a go-to destination for food lovers across the city. Whether you're a longtime fan of South Indian cuisine or trying it for the first time, this restaurant delivers an unforgettable dining experience that keeps guests coming back again and again.

A Taste of Authentic South Indian Cuisine
One of the main reasons Dosa King Palace is considered the best South Indian restaurant in Ottawa is its commitment to authentic flavors. Every dish on the menu is crafted using traditional South Indian spices, techniques, and fresh ingredients imported where possible to preserve the true taste of the region. From crispy dosas and fluffy idlis to rich, aromatic curries and flavorful chutneys, the menu reflects the diversity of South Indian cooking.

An Extensive Menu for Every Palate
The menu caters to vegans, vegetarians, and meat lovers alike, offering dosas, idlis, uttapams, vadas, curries, biryanis, and desserts.

Quality Ingredients and Fresh Preparation
Each dish is prepared fresh to order using high-quality ingredients, ensuring consistent taste and flavor.

Welcoming and Comfortable Dining Experience
Warm ambience, cultural décor, and friendly staff create a relaxed dining environment.

Perfect for Every Occasion
Ideal for family meals, casual dining, and special occasions.

Rave Reviews from Customers
Positive reviews highlight authenticity, service, and consistency.

Conclusion
Dosa King Palace offers a complete South Indian dining experience and stands as a must-visit destination in Ottawa.`
  },
  {
    id: 11,
    title: "Top 5 Reasons You'll Love the Best Dosa in Ottawa at Dosa King Palace",
    excerpt: "Discover the top five reasons why Dosa King Palace serves the best dosa in Ottawa, from authentic South Indian taste to wide variety, perfect accompaniments, and consistent quality.",
    image: blog16,
    date: "2023-01-10",
    category: "Culture",
    content: `When it comes to authentic South Indian cuisine, Ottawa food lovers turn to Dosa King Palace for quality and consistency. Here are the top five reasons it is known for serving the best dosa in Ottawa.

1. Authentic South Indian Taste You Can Trust
Traditional fermentation, precise cooking, and authentic spices deliver perfect dosas every time.

2. Wide Variety of Dosas
From classic to specialty dosas, there's something for every taste preference.

3. Perfectly Balanced Chutneys and Sambar
Freshly prepared sides enhance every bite.

4. Ideal Choice for Families and Groups
Comfortable seating, friendly service, and a family-friendly menu make it a favorite.

5. Consistent Quality and Great Value
Fresh preparation, generous portions, and fair pricing ensure satisfaction.

Why Dosa King Palace Stands Out in Ottawa
Authentic recipes, fresh ingredients, and warm hospitality define the experience.

Final Thoughts
Dosa King Palace continues to earn its reputation as the best South Indian restaurant and best dosa destination in Ottawa.`
  },
  {
    id: 12,
    title: "Health Benefits of Fermented Foods",
    excerpt: "Learn about the incredible health benefits of fermented foods like dosa batter, including improved digestion, enhanced nutrient absorption, and gut health.",
    image: blog3,
    date: "2023-01-05",
    category: "Health",
    content: `Fermented foods have been a cornerstone of traditional diets for thousands of years, and modern science is now confirming what our ancestors knew: these foods are incredibly beneficial for our health.

Dosa batter, like many fermented foods, undergoes a natural fermentation process where beneficial bacteria and yeasts break down the food components. This process not only enhances flavor but also significantly improves nutritional value.

One of the primary benefits is improved digestion. The fermentation process pre-digests complex carbohydrates and proteins, making them easier for our bodies to break down. This is particularly beneficial for people with sensitive digestive systems. The beneficial bacteria (probiotics) in fermented foods help maintain a healthy gut microbiome, which is crucial for overall digestive health.

Fermentation also increases the bioavailability of nutrients. The process breaks down phytic acid, an anti-nutrient found in grains and legumes that can interfere with mineral absorption. This means your body can absorb more iron, zinc, and other essential minerals from fermented foods.

The probiotics in fermented dosa batter support immune function. A significant portion of our immune system resides in the gut, and maintaining a healthy balance of gut bacteria is essential for immune health. Regular consumption of fermented foods can help strengthen your immune response.

Fermented foods are also rich in B vitamins, which are produced during the fermentation process. These vitamins are essential for energy production, brain function, and maintaining healthy skin and hair.

For those managing blood sugar, fermented foods can be beneficial. The fermentation process can lower the glycemic index of foods, meaning they cause a slower, more gradual rise in blood sugar levels compared to their non-fermented counterparts.

At Dosa King, we take pride in using traditional fermentation methods that maximize these health benefits. Our dosa batter is naturally fermented, ensuring you get all the probiotic and nutritional benefits that make South Indian cuisine not just delicious, but also incredibly healthy.`
  },
  {
    id: 13,
    title: "Spice Blends: The Heart of South Indian Cuisine",
    excerpt: "Dive into the world of South Indian spice blends - from sambar powder to rasam powder, discover how these aromatic mixtures create authentic flavors.",
    image: blog4,
    date: "2023-12-28",
    category: "Culture",
    content: `Spice blends are the soul of South Indian cuisine. These carefully crafted mixtures of roasted and ground spices create the complex, layered flavors that define dishes like sambar, rasam, and various curries.

Sambar powder is perhaps the most essential spice blend in South Indian cooking. It typically includes coriander seeds, red chilies, fenugreek seeds, curry leaves, and asafoetida. Each ingredient is carefully roasted to bring out its unique flavor before being ground together. The result is a warm, aromatic powder that forms the base of sambar, a tangy lentil stew that's a staple in South Indian meals.

Rasam powder, used in the tangy, spicy soup called rasam, has a different profile. It emphasizes black pepper, cumin, and coriander, creating a lighter, more peppery flavor. Rasam is not just delicious - it's also considered a digestive aid and is often served at the end of a meal.

Curry powder, though often associated with British adaptations, has authentic South Indian versions. These blends vary by region and family, but typically include turmeric, coriander, cumin, fenugreek, and various chilies. At Dosa King, we use a house blend that's been refined over generations.

The secret to great spice blends lies in the roasting process. Each spice has an optimal roasting time and temperature. Over-roasting can make spices bitter, while under-roasting leaves them raw and harsh. The spices should be roasted separately, as they have different optimal temperatures, then combined and ground.

Storage is crucial. Spice blends should be stored in airtight containers away from light and heat. Whole spices stay fresh longer than ground ones, which is why many South Indian kitchens grind spices fresh for each meal.

At Dosa King, we prepare our spice blends in small batches to ensure maximum freshness and flavor. Our chefs roast and grind spices daily, following traditional methods that have been passed down through generations. This attention to detail is what makes our dishes taste authentically South Indian.`
  },
  {
    id: 14,
    title: "Our Journey: From Family Kitchen to Restaurant",
    excerpt: "The inspiring story of how Dosa King grew from a small family kitchen to becoming a beloved destination for authentic South Indian cuisine.",
    image: blog5,
    date: "2023-12-20",
    category: "Our Story",
    content: `The story of Dosa King is a tale of passion, tradition, and the power of authentic flavors. It began in a small family kitchen in Chennai, where our founder learned the art of South Indian cooking from her grandmother.

Those early mornings in the kitchen were magical. The aroma of freshly ground spices, the sizzle of dosas on the tawa, and the warmth of family coming together over breakfast - these memories became the foundation of what Dosa King is today.

When we moved to Ottawa, we brought these recipes and traditions with us. What started as cooking for friends and family soon became a dream: to share authentic South Indian cuisine with the Ottawa community. We wanted to create a place where people could experience the same warmth and flavors we grew up with.

Opening Dosa King was a labor of love. Every detail mattered - from sourcing authentic ingredients to training our team in traditional cooking methods. We insisted on using the same fermentation techniques, the same spice blends, and the same attention to detail that made our family recipes special.

The early days were challenging. We worked long hours, perfecting each recipe, ensuring consistency, and building relationships with our customers. But seeing the joy on people's faces when they tasted our dosas for the first time made it all worthwhile.

Word spread quickly. People came not just for the food, but for the experience - the authentic flavors, the warm service, and the sense of community we've created. We've been honored to serve thousands of customers, from those discovering South Indian cuisine for the first time to homesick South Indians finding a taste of home.

Today, Dosa King stands as a testament to the power of staying true to your roots while embracing new communities. We're proud to be Ottawa's destination for authentic South Indian cuisine, and we're grateful to every customer who has been part of our journey.

Our commitment remains the same: to serve food made with love, using traditional methods, and to create a space where everyone feels welcome. This is more than a restaurant to us - it's a bridge between cultures, a celebration of tradition, and a home away from home.`
  },
  {
    id: 15,
    title: "Pairing Chutneys with Dosas: A Complete Guide",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog6,
    date: "2023-12-15",
    category: "Cooking Tips",
    content: `The perfect dosa experience isn't complete without the right chutney. These flavorful condiments elevate the dosa from good to extraordinary, and understanding how to pair them is an art in itself.

Coconut chutney is the classic pairing for dosas. Made from fresh coconut, green chilies, ginger, and tempered with mustard seeds and curry leaves, it provides a cooling contrast to the crispy, slightly tangy dosa. The creamy texture and mild heat complement plain dosas beautifully, while also balancing the spiciness of masala dosas.

Tomato chutney offers a tangy, slightly sweet alternative. Made with ripe tomatoes, onions, and a blend of spices, it has a more robust flavor profile. This chutney pairs excellently with masala dosas, as its tanginess cuts through the richness of the potato filling. The vibrant red color also adds visual appeal to your plate.

Onion chutney, with its sharp, pungent flavor, is perfect for those who love bold tastes. Made from sautéed onions, red chilies, and tamarind, it adds a spicy kick that works well with plain dosas and ghee roast dosas. The caramelized onions provide a depth of flavor that enhances the dosa's natural taste.

Peanut chutney is a regional favorite, especially in Andhra Pradesh. Made from roasted peanuts, chilies, and tamarind, it has a nutty, earthy flavor with a hint of sourness. This chutney pairs wonderfully with crispy dosas, adding a rich, protein-packed element to the meal.

The key to perfect chutney pairing is balance. A mild, creamy chutney like coconut works with spicy dosas, while a bold, tangy chutney like tomato complements milder dosas. The texture also matters - smooth chutneys work well with crispy dosas, while chunkier chutneys add interesting texture contrasts.

At Dosa King, we serve a variety of chutneys with every dosa, allowing you to mix and match to find your perfect combination. Our chutneys are made fresh daily, using traditional recipes that have been refined over generations. We believe that the right chutney can transform a good dosa into an unforgettable experience.`
  },
  {
    id: 16,
    title: "The Unique Appeal of South Indian Cuisine",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog16,
    date: "2023-12-13",
    category: "Our Story",
    content: `South Indian cuisine is known for its balance of flavors, aromatic spices, and wholesome ingredients. Unlike some other cuisines that rely heavily on rich gravies or oils, South Indian dishes often focus on simplicity and nutrition. Many recipes are prepared using rice, lentils, fresh vegetables, and carefully selected spices that enhance both taste and health benefits.
Another defining feature of South Indian cooking is fermentation. Foods like dosa and idli are made from fermented rice and lentil batter, which not only creates a distinctive flavor but also improves digestibility. This traditional cooking method has been practiced for generations and remains an important part of South Indian culinary heritage.`
  },
  {
    id: 17,
    title: "Dosa – The Star of the Menu",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog17,
    date: "2023-12-13",
    category: "Culture",
    content: `One of the most famous dishes in South Indian cuisine is the dosa. This thin, crispy crepe is made from a fermented batter and cooked on a hot griddle until golden brown. At Dosa King, dosas are served fresh and perfectly crisp, making them a favorite among customers.
The restaurant offers several varieties of dosa, each with its own unique flavor. The classic plain dosa is simple yet satisfying, while the popular masala dosa is filled with a spiced potato mixture that adds warmth and depth to the dish. Served alongside coconut chutney and sambar, dosas provide a complete and delicious dining experience.`
  },
  {
    id: 18,
    title: "Traditional Dishes That Reflect Authentic Flavors",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog18,
    date: "2023-12-12",
    category: "Culture",
    content: `While dosas are the highlight for many visitors, South Indian cuisine offers much more. Soft and fluffy idlis, which are steamed rice cakes, are a popular breakfast dish that pairs perfectly with chutney and sambar. Crispy vadas, made from seasoned lentil batter and deep-fried until golden, add a crunchy texture to the meal.
They are simple, nourishing, and full of authentic flavor. At Dosa King, each dish is prepared with attention to detail, preserving the traditional recipes that have been passed down through generations.`
  },
  {
    id: 19,
    title: "A Dining Experience That Feels Welcoming",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog19,
    date: "2023-12-11",
    category: "Cooking Tips",
    content: `Great food is only part of what makes a restaurant memorable. The atmosphere and overall dining experience also play an important role. Many visitors appreciate the welcoming environment at Dosa King, where guests can relax and enjoy their meals in a comfortable setting.
Whether you are dining with family, meeting friends, or exploring new cuisines on your own, the restaurant provides a space where everyone can enjoy authentic South Indian flavors. The friendly atmosphere and dedication to quality food make it a popular choice for people looking to try something different in Ottawa.`
  },
  {
    id: 20,
    title: "Healthy and Flavorful Choices",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog20,
    date: "2023-12-10",
    category: "Our Story",
    content: `Another reason South Indian cuisine has gained popularity worldwide is its nutritional balance. Many dishes are naturally vegetarian and made with wholesome ingredients such as lentils, rice, and vegetables. These ingredients provide essential nutrients while still delivering rich and satisfying flavors.
Because of this balance between taste and health, South Indian food appeals to a wide range of diners. It offers a flavorful alternative for those looking for meals that are both delicious and nourishing.`
  },
  {
    id: 21,
    title: "Healthy and Flavorful Choices",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog21,
    date: "2023-12-09",
    category: "Culture",
    content: `Another reason South Indian cuisine has gained popularity worldwide is its nutritional balance. Many dishes are naturally vegetarian and made with wholesome ingredients such as lentils, rice, and vegetables. These ingredients provide essential nutrients while still delivering rich and satisfying flavors.
Because of this balance between taste and health, South Indian food appeals to a wide range of diners. It offers a flavorful alternative for those looking for meals that are both delicious and nourishing.`
  },
  {
    id: 22,
    title: "Exploring Ottawa’s Diverse Food Scene",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog22,
    date: "2023-12-08",
    category: "Culture",
    content: `Ottawa’s dining culture continues to grow as new restaurants and cuisines become part of the city’s culinary identity. Exploring different foods not only introduces new flavors but also offers insight into different cultures and traditions.
For anyone interested in experiencing authentic South Indian cuisine, visiting Dosa King can be a memorable part of that journey. The restaurant brings traditional recipes, fresh ingredients, and warm hospitality together to create an enjoyable dining experience.`
  },
  {
    id: 23,
    title: "Why Dosa King Stands Out",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog23,
    date: "2023-12-07",
    category: "Cooking Tips",
    content: `What makes Dosa King special is its dedication to authenticity and quality. Each dish reflects the rich culinary heritage of South India while adapting to the tastes of a diverse community. 
For residents and visitors exploring the food scene in Ottawa, discovering new cuisines can be an exciting adventure. If you are searching for the Best South Indian Restaurant in Ottawa, Dosa King offers an experience that combines authentic flavors, cultural tradition, and a welcoming atmosphere.
Whether you are a longtime fan of South Indian cuisine or trying it for the first time, a visit to Dosa King is sure to leave a lasting impression.`
  },
  {
    id: 24,
    title: "Best South Indian Restaurant in Ottawa: Discover Authentic Flavors at Dosa King",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog24,
    date: "2023-12-06",
    category: "Our Story",
    content: `Food is more than just nourishment—it is a way to explore culture, tradition, and history. In a multicultural city like Ottawa, residents and visitors enjoy a wide variety of international cuisines that reflect the city’s diversity. Among these culinary experiences, South Indian cuisine has gained significant attention for its vibrant flavors and wholesome ingredients. For many food lovers searching for the Best South Indian Restaurant in Ottawa, one name that often comes up is Dosa King Ottawa.`
  },
  {
    id: 25,
    title: "The Growing Popularity of South Indian Cuisine",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog25,
    date: "2023-12-05",
    category: "Cooking Tips",
    content: `South Indian food is known for its unique balance of flavors, spices, and textures. Unlike some cuisines that rely heavily on rich gravies, South Indian dishes often highlight natural ingredients such as rice, lentils, vegetables, and aromatic spices. These ingredients come together to create meals that are both satisfying and nutritious.
Another distinctive aspect of South Indian cooking is the use of fermentation. Many traditional dishes, including dosa and idli, are prepared using fermented rice and lentil batter. This process not only enhances flavor but also improves digestion and nutritional value. Because of this combination of taste and health benefits, South Indian cuisine continues to gain popularity worldwide.`
  },
  {
    id: 26,
    title: "Dosa – The Iconic South Indian Delight",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog26,
    date: "2023-12-04",
    category: "Culture",
    content: `One of the most famous dishes in South Indian cuisine is the dosa. This thin, crispy crepe is made from fermented batter and cooked on a hot griddle until it turns golden brown. At Dosa King, dosas are prepared fresh and served with traditional accompaniments that elevate the dining experience.
Dosas are typically served with coconut chutney and sambar. Coconut chutney offers a mild, creamy flavor, while sambar—a lentil-based vegetable stew—adds warmth and depth to the meal. The combination of these flavors creates a perfectly balanced dish that many people find irresistible.The restaurant also offers several varieties of dosa, including the popular masala dosa filled with spiced potato mixture. Each version showcases the versatility and richness of South Indian cooking.`
  },
  {
    id: 27,
    title: "A Menu That Celebrates Tradition",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog27,
    date: "2023-12-03",
    category: "Cooking Tips",
    content: `While dosas are a major highlight, South Indian cuisine includes many other beloved dishes. Soft, steamed idlis are a classic breakfast option that pairs beautifully with chutneys and sambar. Their light texture and mild flavor make them both comforting and satisfying.
Crispy vadas are another favorite. These savory lentil fritters are deep-fried to perfection, offering a crunchy exterior and a soft interior. Together with chutneys and sambar, they create a delicious combination that reflects the essence of traditional South Indian food.
At Dosa King, these dishes are prepared using authentic recipes that preserve the culinary heritage of South India. Every dish reflects the dedication to maintaining traditional flavors while providing a memorable dining experience.`
  },
  {
    id: 28,
    title: "A Warm and Welcoming Dining Atmosphere",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog28,
    date: "2022-12-02",
    category: "Culture",
    content: `Great food is only one part of a great restaurant experience. The environment and hospitality also play an important role in making a visit enjoyable. Many guests appreciate the welcoming and relaxed atmosphere at Dosa King.
Whether visiting with family, friends, or colleagues, diners can enjoy a comfortable setting while exploring authentic South Indian flavors. The restaurant offers a place where people can gather, share meals, and experience a cuisine that has been loved for generations.`
  },
  {
    id: 29,
    title: "Healthy and Flavorful Choices",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog29,
    date: "2022-12-01",
    category: "Cooking Tips",
    content: `One of the reasons South Indian cuisine continues to attract food lovers is its focus on balance and nutrition. Many dishes are naturally vegetarian and prepared using wholesome ingredients like lentils, rice, and fresh vegetables.
This emphasis on fresh ingredients and traditional cooking methods makes South Indian food both delicious and nourishing. For those looking for meals that combine flavor with health benefits, it is an excellent choice.`
  },
  {
    id: 30,
    title: "Experience the Best South Indian Restaurant in Ottawa",
    excerpt: "Master the art of pairing different chutneys with dosas. From coconut chutney to tomato chutney, learn which combinations work best for each dosa variety.",
    image: blog30,
    date: "2022-12-01",
    category: "Our Story",
    content: `Exploring new cuisines is one of the joys of living in a culturally rich city like Ottawa. South Indian cuisine offers a unique blend of tradition, taste, and nutrition that appeals to a wide range of diners.For anyone searching for the Best South Indian Restaurant in Ottawa, Dosa King offers an authentic and memorable dining experience. From crispy dosas to comforting idlis and flavorful chutneys, every dish reflects the vibrant culinary traditions of South India.
A visit to Dosa King is not just about enjoying a meal—it is about discovering a rich food culture and experiencing authentic flavors that make South Indian cuisine truly special.`
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPost) {
        setSelectedPost(null);
      }
    };

    if (selectedPost) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Blog
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Stories & <span className="text-gradient">Recipes</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Discover cooking tips, cultural insights, and stories from our kitchen
            </p>

            {/* New Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience Authentic Flavors at the Best South Indian Restaurant in Ottawa
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Food has always been a powerful way to explore culture. In a multicultural
              city like Ottawa, people have the opportunity to experience cuisines from
              every corner of the world. From street food to fine dining, the city’s
              culinary landscape is diverse and constantly evolving. Among the many
              international cuisines available, South Indian food has been gaining
              popularity for its rich flavors, healthy ingredients, and traditional
              cooking methods. For many locals and visitors searching for the Best
              South Indian Restaurant in Ottawa, one name that consistently stands out
              is Dosa King Ottawa.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-border"
                >
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      className="w-full group/btn justify-between p-0 h-auto font-medium text-primary hover:text-primary/80"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/30" />
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay Updated with Our <span className="text-gradient">Latest Posts</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Subscribe to our newsletter and never miss a new recipe or story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button variant="hero" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogPortal>
          <AnimatePresence>
            {selectedPost && (
              <>
                <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
                <DialogPrimitive.Content
                  className={cn(
                    "fixed left-[50%] top-[50%] z-50 w-[95vw] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] bg-card border border-primary/20 rounded-xl sm:rounded-2xl p-0 gap-0 shadow-card duration-300 mx-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
                  )}
                  onEscapeKeyDown={(e) => {
                    setSelectedPost(null);
                  }}
                  onPointerDownOutside={(e) => {
                    setSelectedPost(null);
                  }}
                >
                  <DialogHeader className="p-4 sm:p-6 pb-4 border-b border-border/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                            {selectedPost.category}
                          </span>
                          <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                            <Calendar size={14} className="sm:w-4 sm:h-4" />
                            <time dateTime={selectedPost.date}>{formatDate(selectedPost.date)}</time>
                          </div>
                        </div>
                        <DialogTitle className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-left pr-8 sm:pr-12">
                          {selectedPost.title}
                        </DialogTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-muted text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 transition-all hover:scale-110"
                        onClick={() => setSelectedPost(null)}
                        aria-label="Close"
                      >
                        <X size={18} className="sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </DialogHeader>

                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Featured Image */}
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-invert max-w-none">
                      <div className="text-foreground leading-relaxed space-y-4">
                        {selectedPost.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPrimitive.Content>
              </>
            )}
          </AnimatePresence>
        </DialogPortal>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;

