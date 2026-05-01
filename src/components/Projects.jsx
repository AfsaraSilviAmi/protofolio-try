"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-20 px-8 md:px-20 bg-background overflow-hidden" id="projects">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-h2 text-on-background mb-4 text-center">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 text-body-lg max-w-2xl text-center mx-auto">These are some of the projects I’ve built as part of my learning journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group border border-violet-100 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-700/50 transition-colors shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
               <Image 
  src={project.image} 
  alt={project.title}
  fill
  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-h3 mb-4 text-on-background group-hover:text-primary-container transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-body-md mb-8 flex-1 line-clamp-3">{project.description}</p>
                
                <Link 
                  href={`/projects/${project.id}`}
                  className="w-full bg-primary-container text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-violet-200 dark:shadow-none hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
