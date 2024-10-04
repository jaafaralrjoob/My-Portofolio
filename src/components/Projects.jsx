import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Wild Oasis Admin Dashboard",
    url: "https://the-wild-oasis-iota-bay.vercel.app/",
    description:
      "React | Styled Components | React Query | React Router | Recharts | React Icons | React Hook Form",
    imageUrl: "assets/projects/The-Wild-Oasis.png",
  },
  {
    title: "The Wild Oasis Client",
    url: "https://wild-oasis-client-five.vercel.app/",
    description:
      "Next | TailwindCSS | Server Actions | Supabase | SSG | Auth.js",
    imageUrl: "assets/projects/The-Wild-Oasis-Client.png",
  },
  {
    title: "Fast React Pizza",
    url: "https://fast-react-pizza-lime-seven.vercel.app/",
    description: "React | TailwindCSS | React Router 6.4 | Redux Toolkit",
    imageUrl: "assets/projects/Fast-React-Pizza.png",
  },
  {
    title: "Atomic Blog",
    url: "https://atomic-blog-five.vercel.app/",
    description: "React | State Managment | Memory Management",
    imageUrl: "assets/projects/The-Atomic-Blog.png",
  },
  {
    title: "React Quiz",
    url: "https://react-quiz-kappa-seven.vercel.app/",
    description: "React | ContextAPI",
    imageUrl: "assets/projects/The-React-Quiz.png",
  },
  {
    title: "Worldwise",
    url: "https://worldwise-ten-beta.vercel.app/",
    description:
      "React | ContextAPI | useReducer | CSS Modules | React Leaflet Map",
    imageUrl: "assets/projects/WorldWise-Keep-track-of-your-adventuries.png",
  },
  {
    title: "UsePopcorn",
    url: "https://usepopcorn-seven-sigma.vercel.app/",
    description: "React | Realtime API",
    imageUrl: "assets/projects/UsePopcorn.png",
  },

  {
    title: "Omnifood",
    url: "https://omnifood-jafar.netlify.app/",
    description: "HTML | CSS | JS",
    imageUrl: "assets/projects/Omnifood-—-Nver-cook-again.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <h2 className="mb-8 text-center text-4xl font-bold">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-grow flex-col p-4">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="flex-grow text-gray-600">{project.description}</p>
              <a href={project.url} className="mt-4">
                <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700">
                  View Project
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
