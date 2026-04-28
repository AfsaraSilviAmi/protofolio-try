"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-xl px-8 md:px-20 bg-background" id="about-me">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 text-on-background dark:text-white mb-8">About Me</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-body-md">
              <p>
  I am an aspiring web developer who is passionate about building modern, responsive, and user-friendly web applications. My journey started with curiosity about how websites work behind the scenes, and over time it has grown into a strong passion for full-stack development.
</p>
              <p>
  I enjoy learning by building real projects and solving real-world problems. Some of my work includes a News Website, a Payoo payment system, and DigiTech. These projects helped me improve my skills in frontend design, backend logic, APIs, and database management.
</p>
              <div className="pt-6 border-t border-violet-100 dark:border-violet-900/30">
                <h4 className="text-h3 mb-4 text-primary-container">Beyond the Code</h4>
              <p>
  Outside of programming, I enjoy exploring new technologies, improving my skills, and watching anime—especially sports and story-driven genres that keep me motivated. I also like learning Japanese listening and speaking, and spending time thinking about new project ideas.
</p>
              </div>
            </div>
            
           
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] bg-violet-50 dark:bg-slate-900 overflow-hidden relative border-8 border-white dark:border-slate-800 shadow-2xl">
              <div className="relative inset-0 bg-gradient-to-br from-violet-200/50 to-transparent dark:from-violet-500/10"></div>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative border-8 border-white dark:border-slate-800 shadow-2xl">
  <Image
    src="/about-me-pic.jpg"
    alt="About me image"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
</div>
              <div className="flex items-center justify-center h-full">
                <span className="material-symbols-outlined text-violet-200 dark:text-violet-900/50 text-9xl">palette</span>
              </div>
            </div>
            {/* Decorative Badge */}
           <motion.div
    animate={{ rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute -bottom-8 -right-8 bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-3xl shadow-xl z-10"
  >
    <div className="text-label-caps font-bold">Currently</div>
    <div className="text-h3">Building the Future</div>
  </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
