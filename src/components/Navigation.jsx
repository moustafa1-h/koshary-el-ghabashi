import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  MenuSquare,
  Info,
  Calendar,
  Phone,
  Image,
  ShoppingBag,
  ChevronDown,
  X
} from "lucide-react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "menu", label: "Menu", icon: MenuSquare },
    { id: "about", label: "About", icon: Info },
    { id: "reservation", label: "Book", icon: Calendar },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "order", label: "Order", icon: ShoppingBag },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            El-Ghabashi
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeSection === id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MenuSquare className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-yellow-400 text-[#003d2d] px-6 py-2 rounded-full font-medium shadow-lg hover:bg-yellow-300 transition-all"
          >
            Order Now
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 backdrop-blur-lg px-4 pt-4 pb-6 rounded-b-2xl shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
                    activeSection === id
                      ? "bg-yellow-100 text-yellow-600"
                      : "text-gray-800 hover:bg-yellow-50"
                  } transition-all`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
