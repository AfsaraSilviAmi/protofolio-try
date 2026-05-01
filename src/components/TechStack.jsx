"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    { name: "HTML", icon: "code" },
    { name: "CSS", icon: "palette" },
    { name: "JavaScript", icon: "bolt" },
    { name: "React", icon: "rebase_edit" },
    { name: "Next.js", icon: "token" },
    { name: "Tailwind CSS", icon: "style" },
    { name: "PHP", icon: "dns" },
    { name: "MySQL", icon: "database" },
    { name: "MongoDB", icon: "storage" },
    { name: "Git", icon: "merge" },
    { name: "GitHub", icon: "code" },
    { name: "BetterAuth", icon: "lock" }
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -6, scale: 1.05 }}
              className="
                border border-gray-200 dark:border-gray-700
                p-5 rounded-xl text-center
                shadow-sm hover:shadow-md
                transition-all
                
                dark:bg-gray-900  /* ✅ FIXED */
              "
            >
              {/* Icon */}
              <div className="
                w-10 h-10
                bg-gray-200 dark:bg-gray-800  /* ✅ FIXED */
                rounded-lg flex items-center justify-center
                mx-auto mb-3
              ">
                <span className="
                  material-symbols-outlined
                  text-gray-700 dark:text-gray-300  /* ✅ FIXED */
                ">
                  {tech.icon}
                </span>
              </div>

              {/* Text */}
              <div className="
                text-sm font-semibold
                 dark:text-gray-100  /* ✅ FIXED */
              ">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}