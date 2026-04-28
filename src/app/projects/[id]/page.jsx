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

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* NavBar removed per user request to avoid broken anchor links on sub-pages */}
      
      <div className="pt-20 pb-24 px-8 md:px-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              href="/#projects" 
              className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold text-label-caps hover:gap-4 transition-all"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-video relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-violet-50 dark:border-slate-800"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-h1 mb-6 text-on-background leading-tight">{project.title}</h1>
              <div className="flex gap-2 flex-wrap mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <p className="text-body-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href={project.live} 
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 bg-primary-container text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-violet-200 dark:shadow-violet-900/20"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Live Project
                </motion.a>
                <motion.a 
                  href={project.github} 
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border-2 border-violet-100 dark:border-violet-900/30 text-violet-700 dark:text-violet-400 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-violet-50 dark:hover:bg-slate-700 transition-all"
                >
                  <span className="material-symbols-outlined text-2xl">code</span>
                  GitHub Repo
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[3rem]"
            >
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-3xl">architecture</span>
              </div>
              <h3 className="text-h3 mb-6">Deep Context</h3>
              <p className="text-slate-600 dark:text-slate-400 text-body-md leading-relaxed">{project.details}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-12 rounded-[3rem]"
            >
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-3xl">warning</span>
              </div>
              <h3 className="text-h3 mb-6">Challenges Faced</h3>
              <p className="text-slate-600 dark:text-slate-400 text-body-md leading-relaxed">{project.challenges}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 glass-card p-12 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-3xl">trending_up</span>
                </div>
                <h3 className="text-h3 mb-6">Improvements & Future Plans</h3>
                <p className="text-slate-600 dark:text-slate-400 text-body-md leading-relaxed">{project.improvements}</p>
              </div>
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl w-full">
                <h4 className="text-label-caps font-bold text-slate-500 dark:text-slate-400 mb-6">Technology Stack</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
