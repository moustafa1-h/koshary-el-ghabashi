import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Star,
  ChefHat,
  Clock,
  Siren as Fire,
} from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const floatingAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FF9800] overflow-hidden px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full mb-6 text-white text-sm sm:text-base"
              variants={floatingAnimation}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <ChefHat className="w-5 h-5" />
              Authentic Egyptian Cuisine
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              variants={floatingAnimation}
            >
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Taste of
              </motion.span>
              <span className="block text-[#4A148C]">
                Modern <span className="text-white">Egypt</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0"
              variants={floatingAnimation}
            >
              Experience the perfect blend of traditional Egyptian flavors and
              contemporary culinary artistry. Every dish tells a story of
              heritage reimagined.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              variants={floatingAnimation}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#4A148C] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:bg-[#6A1B9A] transition-all relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Order Now</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#4A148C] text-[#4A148C] px-6 py-3 rounded-full font-semibold hover:bg-[#4A148C] hover:text-white transition-all"
              >
                Explore Menu
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 justify-center lg:justify-start"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Reviews */}
              <motion.div className="text-center" variants={floatingAnimation}>
                <div className="text-3xl font-bold text-[#4A148C]">4.9</div>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#4A148C] text-[#4A148C]" />
                  ))}
                </div>
                <p className="text-sm text-white/80">2000+ Reviews</p>
              </motion.div>

              {/* Delivery */}
              <motion.div className="text-center" variants={floatingAnimation}>
                <div className="text-3xl font-bold text-[#4A148C]">30<span className="text-base">min</span></div>
                <Clock className="w-5 h-5 text-[#4A148C] mx-auto mb-1" />
                <p className="text-sm text-white/80">Fast Delivery</p>
              </motion.div>

              {/* Dishes */}
              <motion.div className="text-center" variants={floatingAnimation}>
                <div className="text-3xl font-bold text-[#4A148C]">15+</div>
                <Fire className="w-5 h-5 text-[#4A148C] mx-auto mb-1" />
                <p className="text-sm text-white/80">Signature Dishes</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dish Image */}
          <motion.div
            className="w-full lg:w-1/2"
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src="/src/assets/b.jpg"
                alt="Koshary Dish"
                className="rounded-[2rem] w-full max-w-md mx-auto shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-[2rem] blur-3xl -z-10"
              animate={{ rotate: [0, 180], scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
