import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    guests: "1 Person",
    date: "",
    time: "",
    venue: "",
    budget: "",
    eventType: "",
    specialRequests: "",
};

const getHoursForDate = (dateStr: string) => {
    if (!dateStr) {
        return { startHour: 11, startMin: 0, endHour: 23, endMin: 0 };
    }
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 0) {
        // Sunday: 10 AM - 10 PM
        return { startHour: 10, startMin: 0, endHour: 22, endMin: 0 };
    } else if (dayOfWeek === 6) {
        // Saturday: 10 AM - 11 PM
        return { startHour: 10, startMin: 0, endHour: 23, endMin: 0 };
    } else {
        // Weekdays (Monday-Friday): 11 AM - 11 PM
        return { startHour: 11, startMin: 0, endHour: 23, endMin: 0 };
    }
};

const generateTimeSlots = (dateStr: string, type: "appointment" | "reservation") => {
    const { startHour, startMin, endHour, endMin } = getHoursForDate(dateStr);

    let currentHour = startHour;
    let currentMin = startMin;

    if (type === "reservation") {
        // 30 minutes after schedule start
        currentMin += 30;
        if (currentMin >= 60) {
            currentHour += 1;
            currentMin -= 60;
        }
    } else {
        // appointment: half hour before schedule start
        currentMin -= 30;
        if (currentMin < 0) {
            currentHour -= 1;
            currentMin += 60;
        }
    }

    const slots = [];
    const endMinutesTotal = endHour * 60 + endMin;

    while (currentHour * 60 + currentMin < endMinutesTotal) {
        let hour12 = currentHour % 12;
        if (hour12 === 0) hour12 = 12;
        const ampm = currentHour >= 12 ? "PM" : "AM";
        const minutesStr = currentMin === 0 ? "00" : currentMin.toString();
        slots.push(`${hour12}:${minutesStr} ${ampm}`);

        currentMin += 30;
        if (currentMin >= 60) {
            currentHour += 1;
            currentMin -= 60;
        }
    }

    return slots;
};

function Reservation() {
    const [activeTab, setActiveTab] = useState("table");
    const [formData, setFormData] = useState(initialFormData);

    const resetForm = () => setFormData(initialFormData);

    const timeOptions = useMemo(() => {
        const type = activeTab === "table" ? "reservation" : "appointment";
        return generateTimeSlots(formData.date, type);
    }, [formData.date, activeTab]);

    useEffect(() => {
        if (timeOptions.length > 0) {
            if (!timeOptions.includes(formData.time)) {
                setFormData((prev) => ({ ...prev, time: timeOptions[0] }));
            }
        } else {
            setFormData((prev) => ({ ...prev, time: "" }));
        }
    }, [timeOptions, formData.time]);

    const handleInput = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const getMailToLink = () => {
        const subject = `Booking Request - ${activeTab === "table"
            ? "Table Reservation"
            : activeTab === "catering"
                ? "Catering Service"
                : "Private Event"
            }`;

        const bodyLines = [
            `Reservation Type: ${subject}`,
            `Full Name: ${formData.name}`,
            `Email Address: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Guests: ${formData.guests}`,
            `Date: ${formData.date}`,
            `Time: ${formData.time}`,
            activeTab !== "table" ? `Venue Address: ${formData.venue}` : null,
            activeTab !== "table" ? `Estimated Budget: ${formData.budget}` : null,
            activeTab !== "table" ? `Type of Event: ${formData.eventType}` : null,
            `Special Requests: ${formData.specialRequests}`,
        ]
            .filter(Boolean)
            .join("\n");

        return `mailto:Dosakingpalace@gmail.com&subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(bodyLines)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = getMailToLink();
        resetForm();
    };

    return (
        <div className="min-h-screen bg-background">
            {/* SEO */}
            <Helmet>
                <title>Reviews – Best South Indian Restaurant in Ottawa, Canada</title>
                <meta
                    name="description"
                    content="Read customer reviews of the best South Indian restaurant in Ottawa, Canada. Discover why guests love the authentic taste, service, and ambience at Dosa King Palace."
                />
            </Helmet>

            <Navbar />

            {/* 🔥 HERO SECTION (Same like your Reviews page) */}
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
                            Reservation
                        </span>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                            Book Your <span className="text-gradient">Table</span>
                        </h1>

                        <p className="text-xl text-muted-foreground">
                            Reserve your spot and enjoy authentic South Indian flavors
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 📌 MAIN CONTENT (Form + Map like your image) */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* 🟢 LEFT - BOOKING FORM */}
                        <div className="bg-[#f3f5f4] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-xl">
                            <form onSubmit={handleSubmit}>
                                {/* Tabs */}
                                <div className="flex gap-2 mb-6">
                                    <button
                                        onClick={() => setActiveTab("table")}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium ${activeTab === "table"
                                            ? "bg-yellow-500 text-white"
                                            : "bg-muted"
                                            }`}
                                    >
                                        Table Reservation
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("catering")}
                                        className={`px-4 py-2 rounded-xl text-sm ${activeTab === "catering"
                                            ? "bg-yellow-500 text-white"
                                            : "bg-muted"
                                            }`}
                                    >
                                        Catering Service
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("event")}
                                        className={`px-4 py-2 rounded-xl text-sm ${activeTab === "event"
                                            ? "bg-yellow-500 text-white"
                                            : "bg-muted"
                                            }`}
                                    >
                                        Private Event
                                    </button>
                                </div>

                                {/* Form */}
                                {activeTab === "table" && (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Full Name</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInput("name", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Email Address</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInput("email", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Phone</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInput("phone", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1 relative">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Guests</label>
                                                <select
                                                    className="input appearance-none pr-10 cursor-pointer"
                                                    value={formData.guests}
                                                    onChange={(e) => handleInput("guests", e.target.value)}
                                                    required
                                                >
                                                    <option>1 Person</option>
                                                    <option>2 People</option>
                                                    <option>3 People</option>
                                                    <option>4 People</option>
                                                    <option>5 People</option>
                                                    <option>6-10 People</option>
                                                    <option>11-15 People</option>
                                                    <option>16-25 People</option>
                                                </select>
                                                <span className="absolute right-3 top-[38px] text-gray-400 text-xs">▼</span>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Date</label>
                                                <input
                                                    type="date"
                                                    className="input [color-scheme:dark]"
                                                    value={formData.date}
                                                    onChange={(e) => handleInput("date", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1 relative">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Time</label>
                                                <select
                                                    className="input appearance-none pr-10 cursor-pointer"
                                                    value={formData.time}
                                                    onChange={(e) => handleInput("time", e.target.value)}
                                                    required
                                                >
                                                    {timeOptions.map((time) => (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                                <span className="absolute right-3 top-[38px] text-gray-400 text-xs">▼</span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === "catering" && (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Full Name</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInput("name", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Email Address</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInput("email", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Phone</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInput("phone", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Est. Guests</label>
                                                <input
                                                    className="input"
                                                    placeholder="e.g. 50"
                                                    value={formData.guests}
                                                    onChange={(e) => handleInput("guests", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Date</label>
                                                <input
                                                    type="date"
                                                    className="input [color-scheme:dark]"
                                                    value={formData.date}
                                                    onChange={(e) => handleInput("date", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1 relative">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Time</label>
                                                <select
                                                    className="input appearance-none pr-10 cursor-pointer"
                                                    value={formData.time}
                                                    onChange={(e) => handleInput("time", e.target.value)}
                                                    required
                                                >
                                                    {timeOptions.map((time) => (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                                <span className="absolute right-3 top-[38px] text-gray-400 text-xs">▼</span>
                                            </div>
                                        </div>

                                        <div className="mt-5 grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Venue Address</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter venue address"
                                                    value={formData.venue}
                                                    onChange={(e) => handleInput("venue", e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Estimated Budget</label>
                                                <input
                                                    className="input"
                                                    placeholder="e.g. $500 - $1000"
                                                    value={formData.budget}
                                                    onChange={(e) => handleInput("budget", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-1">
                                            <label className="text-[#1a120d] text-sm text-muted-foreground">Type of Event</label>
                                            <input
                                                className="input w-full"
                                                placeholder="Birthday, Wedding, Corporate..."
                                                value={formData.eventType}
                                                onChange={(e) => handleInput("eventType", e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === "event" && (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Full Name</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInput("name", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Email Address</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInput("email", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Phone</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInput("phone", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Est. Guests</label>
                                                <input
                                                    className="input"
                                                    placeholder="e.g. 50"
                                                    value={formData.guests}
                                                    onChange={(e) => handleInput("guests", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Event Date</label>
                                                <input
                                                    type="date"
                                                    className="input [color-scheme:dark]"
                                                    value={formData.date}
                                                    onChange={(e) => handleInput("date", e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1 relative">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Time</label>
                                                <select
                                                    className="input appearance-none pr-10 cursor-pointer"
                                                    value={formData.time}
                                                    onChange={(e) => handleInput("time", e.target.value)}
                                                    required
                                                >
                                                    {timeOptions.map((time) => (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                                <span className="absolute right-3 top-[38px] text-gray-400 text-xs">▼</span>
                                            </div>
                                        </div>

                                        <div className="mt-5 grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Venue Address</label>
                                                <input
                                                    className="input"
                                                    placeholder="Enter venue address"
                                                    value={formData.venue}
                                                    onChange={(e) => handleInput("venue", e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[#1a120d] text-sm text-muted-foreground">Estimated Budget</label>
                                                <input
                                                    className="input"
                                                    placeholder="e.g. $500 - $1000"
                                                    value={formData.budget}
                                                    onChange={(e) => handleInput("budget", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-1">
                                            <label className="text-[#1a120d] text-sm text-muted-foreground">Type of Event</label>
                                            <input
                                                className="input w-full"
                                                placeholder="Birthday, Wedding, Corporate..."
                                                value={formData.eventType}
                                                onChange={(e) => handleInput("eventType", e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="mt-5 space-y-1">
                                    <label className="text-[#1a120d] text-sm text-muted-foreground">Special Requests</label>
                                    <textarea
                                        className="input w-full h-32 resize-none"
                                        placeholder="Tell us about dietary requirements or any other details..."
                                        value={formData.specialRequests}
                                        onChange={(e) => handleInput("specialRequests", e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-6 block text-center bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                                >
                                    Send Booking Request
                                </button>
                            </form>
                        </div>

                        {/* 🟡 RIGHT - MAP + HOURS */}
                        <div className="space-y-6">
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890123!2d-73.98765432109876!3d40.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05d246e76ddd%3A0xd754c68b004e46d6!2sDosa+King+%7C+Indian+Restaurant+%7C+Bar!5e0!3m2!1sen!2sus!4v1735632000000!5m2!1sen!2sus"
                                    className="w-full h-[320px] border-0"
                                />
                            </div>

                            {/* Opening Hours */}
                            <div className="text-[#1a120d] bg-[#f3f5f4] dark:bg-[#1f1f1f] rounded-2xl p-6 shadow-xl">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    🕒 Opening Hours
                                </h3>

                                <div className="text-sm">
                                    <div className="bg-muted/50 p-4 rounded-xl space-y-2">
                                        <div className="flex justify-between border-b border-border/50 pb-1">
                                            <span>Mon - Fri</span>
                                            <span className="font-medium text-right">11:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between border-b border-border/50 pb-1">
                                            <span>Sat</span>
                                            <span className="font-medium text-right">10:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sun</span>
                                            <span className="font-medium text-right">10:00 AM - 10:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reservation;