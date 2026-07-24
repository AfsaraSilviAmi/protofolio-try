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
    I am a passionate MERN Stack Developer who enjoys building modern,
    responsive, and scalable web applications. I love turning ideas into
    real-world solutions by creating clean user interfaces, developing robust
    backend systems, and designing efficient databases. Every project I build
    helps me grow as a developer while strengthening my problem-solving skills.
  </p>

  <p>
    I have built several full-stack applications, including <strong>AlignTask</strong>,
    a freelance marketplace with role-based dashboards and secure authentication;
    <strong> AimArena</strong>, a sports venue booking platform; and
    <strong> PlantPal AI</strong>, an AI-powered plant care assistant. Through
    these projects, I have gained hands-on experience with React, Next.js,
    Node.js, Express.js, MongoDB, authentication, REST APIs, and modern UI
    development while following best practices for writing clean and
    maintainable code.
  </p>

  <div className="pt-6 border-t border-violet-100 dark:border-violet-900/30">
    <h4 className="text-h3 mb-4 text-primary-container">
      Beyond the Code
    </h4>

    <p>
      Beyond programming, I enjoy exploring new technologies, learning about
      AI-powered applications, and continuously improving my development
      skills. In my free time, I watch anime—especially sports and
      story-driven series—and practice Japanese listening and speaking. I also
      enjoy brainstorming new project ideas and challenging myself by building
      applications that solve real-world problems.
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
