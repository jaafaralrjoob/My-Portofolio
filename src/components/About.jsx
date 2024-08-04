import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white"
    >
      <motion.h2
        className="mb-6 text-center text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <motion.img
          src="assets/Profile.png"
          alt="About Me"
          className="h-64 w-64 rounded-lg object-cover shadow-lg transition-transform duration-200 hover:scale-110"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        <motion.p
          className="mt-6 max-w-md text-lg text-gray-200 md:ml-6 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          Im a passionate front-end web developer with a love for creating
          interactive and dynamic user experiences. I enjoy solving complex
          problems and building applications that make a difference.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
