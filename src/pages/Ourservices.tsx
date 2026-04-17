import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { FaUtensils } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

import cateringImg from "@/assets/Wedding-Catering.jpg";
import eventImg from "@/assets/66a3c772f376f0a78d0d54c6_wa-frost-sophies-room-1200-11c.jpg";

function Ourservices() {
    return (
        <div>
            <Helmet>
                <title>Our Services – Best South Indian Restaurant in Ottawa, Canada</title>
                <meta
                    name="description"
                    content="Explore catering and private event services offered by Dosa King Palace. Experience authentic South Indian hospitality in Ottawa."
                />
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
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
                            Our Services
                        </span>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                            Explore Our <span className="text-gradient">Services</span>
                        </h1>

                        <p className="text-xl text-muted-foreground">
                            Discover a range of high-quality services designed to meet your needs and exceed your expectations
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES CARDS */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="rounded-3xl overflow-hidden shadow-xl bg-white/80 backdrop-blur"
                        >
                            <div className="relative">
                                <img src="/public/Wedding-Catering.jpg" />

                                {/* <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-xl">
                                    🍽️
                                </div> */}
                                <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-xl text-[#0f2218] text-lg">
                                    <FaUtensils />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-[#2b1b17] text-2xl font-bold mb-3">Catering</h3>

                                <p className="text-[#2b1b17] text-muted-foreground mb-4">
                                    Make your events memorable with our authentic South Indian catering,
                                    from small gatherings to large celebrations.
                                </p>

                                <ul className="text-[#2b1b17] space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        Customizable Menus
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        On-site Dosa Station
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        Professional Service
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="rounded-3xl overflow-hidden shadow-xl bg-white/80 backdrop-blur"
                        >
                            <div className="relative">
                                <img src="/public/66a3c772f376f0a78d0d54c6_wa-frost-sophies-room-1200-11c.jpg" />

                                {/* <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-xl">
                                    🎉
                                </div> */}
                                <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-xl text-[#0f2218] text-lg">
                                    <MdCelebration />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-[#2b1b17] text-2xl font-bold mb-3">Private Events</h3>

                                <p className="text-[#2b1b17] text-muted-foreground mb-4">
                                    Host your private parties, birthdays, or corporate events with a vibrant atmosphere.
                                </p>

                                <ul className="text-[#2b1b17] space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        Up to 50 Guests
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        Personalized Decor
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        Audio/Visual Support
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>

                    {/* CTA */}
                    {/* CTA */}
                    <div className="mt-16">
                        <div className="bg-gradient-to-r from-[#b8892b] via-[#d4a94d] to-[#e6c06a] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden">

                            {/* glow */}
                            <div className="absolute right-0 top-0 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                            <div>
                                <h2 className="text-[#0f2218] text-2xl md:text-3xl font-bold">
                                    Interested in our services?
                                </h2>
                                <p className="text-[#0f2218]/80 mt-2">
                                    Our events team is ready to curate the perfect experience for your guests.
                                </p>
                            </div>

                            <a
                                href="tel:+16137908316"
                                className="inline-block bg-[#2b1b17] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                            >
                                Call Us Now
                            </a>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Ourservices;