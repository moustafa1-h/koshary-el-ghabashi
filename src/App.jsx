// Final responsive update with full Reservation and Footer sections
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";

const popularDishes = [
  {
    name: "Classic Koshary",
    description: "Our signature dish with lentils, rice, pasta",
    price: "30 EGP",
    image: "/src/assets/dish1.jpg"
  },
  {
    name: "Chicken Tagine",
    description: "Chicken Tagine is chicken slow-cooked with spices.",
    price: "45 EGP",
    image: "/src/assets/dish2.jpg"
  },
  {
    name: "Mix Koshary",
    description: "This is a Mix Koshary, featuring pasta,and fried onions",
    price: "55 EGP",
    image: "/src/assets/dish3.jpg"
  }
];

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "5k+", label: "Happy Customers" },
  { value: "4.9", label: "Customer Rating" },
  { value: "11", label: "Restaurant Locations" }
];

export default function KosharyElGhabashi() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    console.log("Reservation submitted!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      <HeroSection />

      {/* Menu Preview */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 text-gray-800">
              Popular Dishes
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
              Discover our most loved dishes, crafted with authentic recipes and premium ingredients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                      {dish.name}
                    </h3>
                    <span className="text-green-600 font-bold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {dish.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-red-600 text-white font-semibold flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-xl hover:bg-red-700 transition-all group"
                  >
                    <span>Order Now</span>
                    <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white text-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Koshary El-Ghabashi began as a humble family kitchen in the heart of Cairo. 
                Our passion for authentic Egyptian street food and commitment to quality has 
                made us a beloved destination for food enthusiasts seeking the true taste of Egypt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Open Daily 10AM - 12PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>11 Locations</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-64 md:h-full overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src="src/assets/c.jpg"
                alt="Our Kitchen"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Book a Table
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              Reserve your spot for an authentic Egyptian dining experience.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleReservation}
            className="max-w-md mx-auto space-y-4 px-4 md:px-0"
          >
            <input placeholder="Your Name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="email" placeholder="Email Address" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="date" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="time" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              max="10"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black hover:bg-yellow-600 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve Now
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Koshary El-Ghabashi</h3>
              <p className="text-gray-600">
                Authentic Egyptian cuisine served with modern flair.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#menu" className="hover:text-yellow-500 transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-yellow-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#reservation" className="hover:text-yellow-500 transition-colors">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2">
                <li>Mon - Fri: 10AM - 10PM</li>
                <li>Sat - Sun: 11AM - 11PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>© 2025 Koshary El-Ghabashi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top Button */}
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-all z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}