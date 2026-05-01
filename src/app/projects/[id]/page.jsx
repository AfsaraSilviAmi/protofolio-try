"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

export default function ProjectDetail({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const project = projects.find((p) => p.id === params.id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background">

      <div className="pt-20 pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
{/* Back Button */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="mb-6"
>
  <motion.div
    animate={{
      x: [0, -3, 0],
      opacity: [1, 0.85, 1],
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 font-semibold transition-all"
    >
      <motion.span
        animate={{ x: [0, -3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="material-symbols-outlined text-base"
      >
        arrow_back
      </motion.span>

      Back to Projects
    </Link>
  </motion.div>
</motion.div>
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            {project.title}
          </motion.h1>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-xl border hover:scale-[1.02] transition-transform duration-300"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8"
            >

              {/* Description */}
              <div>
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="font-semibold mb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full
                      bg-violet-100 dark:bg-violet-900/30
                      text-violet-700 dark:text-violet-300
                      border border-violet-200 dark:border-violet-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">

                {/* LIVE BUTTON (HEARTBEAT) */}
                <motion.a
                  href={project.live}
                  target="_blank"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-violet-600 text-white rounded-lg text-sm shadow-lg"
                >
                  Live Project
                </motion.a>

                {/* GITHUB BUTTON (GLOW PULSE) */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(139,92,246,0)",
                      "0 0 18px rgba(139,92,246,0.4)",
                      "0 0 0px rgba(139,92,246,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 border rounded-lg text-sm
                  border-violet-300 dark:border-violet-700
                  text-violet-700 dark:text-violet-300 hover:bg-purple-400"
                >
                  GitHub Repo
                </motion.a>

              </div>

              {/* Challenges */}
              <div>
                <h2 className="font-semibold mb-2">Challenges</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.challenges}
                </p>
              </div>

              {/* Improvements */}
              <div>
                <h2 className="font-semibold mb-2">Future Improvements</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.improvements}
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}