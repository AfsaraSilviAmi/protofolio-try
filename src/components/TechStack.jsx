"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import { RiShieldKeyholeFill } from "react-icons/ri";

export default function TechStack() {
  const techs = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  
  { name: "BetterAuth", icon: <RiShieldKeyholeFill /> },
];

  return (
    <section className="py-20 px-6 md:px-16 bg-background" id="tech">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold dark:text-white">
            Tech Stack
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Technologies I use while learning and building projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="
                group
                border border-gray-200 dark:border-gray-700
                rounded-xl
                p-5
                text-center
                shadow-sm
                hover:shadow-xl
                hover:border-primary-container
                transition-all duration-300
                dark:bg-gray-900
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  rounded-full
                  bg-purple-100 dark:bg-gray-800
                  flex items-center justify-center
                  mx-auto mb-4
                  text-3xl
                  text-primary-container
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {tech.icon}
              </div>

              {/* Tech Name */}
              <h3 className="text-sm font-semibold dark:text-gray-100">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}