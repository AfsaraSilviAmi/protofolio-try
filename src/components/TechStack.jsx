"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    { name: "Typescript", icon: "data_object" },
    { name: "React", icon: "rebase_edit" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Docker", icon: "cloud" },
    { name: "Next.js", icon: "token" },
    { name: "GoLang", icon: "code" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <section className="py-xl px-8 md:px-20 bg-background overflow-hidden" id="tech">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 text-on-background">Technology Stack</h2>
            <p className="text-slate-500 dark:text-slate-400 text-body-md mt-2">The tools I use to bring visions to life.</p>
          </motion.div>
          <div className="flex gap-2">
            <span className="p-2 border border-violet-100 dark:border-violet-500/20 rounded-lg material-symbols-outlined cursor-pointer hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors">arrow_back</span>
            <span className="p-2 border border-violet-100 dark:border-violet-500/20 rounded-lg material-symbols-outlined cursor-pointer hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors">arrow_forward</span>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)"
              }}
              className="border border-violet-100 dark:border-violet-500/20 p-6 rounded-2xl text-center transition-all group cursor-default shadow-sm dark:bg-violet-950 dark:bg-gradient-to-br dark:from-violet-900/20 dark:to-purple-950/40 hover:bg-violet-50 dark:hover:from-violet-800/30 dark:hover:to-purple-900/30"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                className="w-12 h-12 bg-violet-50 dark:bg-violet-900/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors"
              >
                <span className="material-symbols-outlined text-primary-container dark:text-primary group-hover:text-white transition-colors">{tech.icon}</span>
              </motion.div>
              <div className="text-label-caps text-on-background font-bold tracking-wider">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
