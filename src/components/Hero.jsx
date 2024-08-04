import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="mb-4 text-6xl font-extrabold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mb-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Im a front end web developer using React
        </motion.p>
        <Link to="projects" smooth={true} duration={500}>
          <motion.button
            className="transform rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.button>
        </Link>
      </div>
      <motion.div
        className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </section>
  );
};

export default Hero;
