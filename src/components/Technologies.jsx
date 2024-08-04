import React from "react";
import { motion } from "framer-motion";
import technologies from "./technologiesData";

const Technologies = () => {
  return (
    <section id="technologies" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-8 text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies I Use
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex items-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="mr-4 h-12 w-12"
                />
                <h3 className="text-2xl font-bold">{tech.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold uppercase text-blue-600">
                      {tech.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                  <div
                    style={{ width: `${tech.proficiency}%` }}
                    className="flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
