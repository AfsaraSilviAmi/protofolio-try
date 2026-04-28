"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const stats = [
  { icon: "code", value: "5+", label: "Projects" },
  { icon: "school", value: "Learning", label: "Daily" },
  { icon: "bolt", value: "Fast", label: "Learner" },
  { icon: "emoji_objects", value: "Creative", label: "Mind" }
];

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text entry
      gsap.from(".char", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
        delay: 0.5
      });

      // Paragraph and buttons fade up
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = "Hi, I'm Afsara Silvi Ami an aspiring Web Developer";
  
  return (
    <section ref={containerRef} className="relative min-h-[921px] flex items-center px-8 md:px-20 hero-gradient overflow-hidden" id="about">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center w-full">
        <div className="space-y-8 hero-content">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-label-caps"
          >
           Aspiring Web Developer
          </motion.div>
          <h1 ref={titleRef} className="text-h1 text-on-background">
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3">
                {word.split("").map((char, j) => (
                  <span 
                    key={j} 
                    className={`inline-block char 
  ${word === "Afsara" || word === "Silvi" || word === "Ami" ? "text-primary-container animate-shimmer" : ""} 
  ${word === "Web" || word === "Developer" ? "text-primary-container animate-shimmer" : ""}
`}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-300 max-w-xl">
           I'm an aspiring web developer passionate about building real-world applications. I enjoy working with modern technologies like React and Next.js, and I'm constantly learning to improve my skills through hands-on projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-white px-10 py-5 rounded-2xl text-label-caps font-bold shadow-xl shadow-violet-200 dark:shadow-violet-900/20 flex items-center justify-center gap-2"
            >
              View My Work
            </motion.a>
            <motion.a 
              href="/afsara-silvi-cv.pdf"
              download
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--card-bg)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400 px-10 py-5 rounded-2xl text-label-caps font-bold flex items-center justify-center gap-3 transition-colors"
            >
              <span className="material-symbols-outlined">download</span>
              Download Resume
            </motion.a>
          </div>

          <div className="flex gap-10 pt-4">
            {[
              { icon: "terminal", name: "GitHub", href: "https://github.com/AfsaraSilviAmi" },
              { icon: "language", name: "LinkedIn", href: "www.linkedin.com/in/afsara-silvi-ami" },
              
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                whileHover={{ y: -5, color: "#7c3aed" }}
                className="flex items-center gap-2 text-slate-400 dark:text-slate-500 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">{social.icon}</span>
                <span className="text-label-caps text-[15px] font-bold hidden sm:block">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="w-[260px] h-[260px] md:w-[380px] md:h-[380px] 
rounded-full overflow-hidden 
shadow-2xl shadow-violet-100 dark:shadow-violet-950/40 
border-4 border-white dark:border-slate-800 
relative z-10 mx-auto"
          >
            <Image 
              src="/MyProfilePic-removebg-preview.png" 
              alt="Portrait" 
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-110"
  sizes="(max-width: 768px) 260px, 300px"
              priority
            />
          </motion.div>
          {/* Floating Stat */}
         {stats.map((stat, i) => {
  const positions = [
    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",   // top
    "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",    // right
    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",  // bottom
    "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"     // left
  ];

  return (
    <motion.div
      key={i}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${positions[i]} 
      glass-card p-4 rounded-2xl shadow-xl 
      border border-violet-100 dark:border-violet-900/30 
      flex items-center gap-3 z-20`}
    >
      <div className="bg-tertiary-fixed text-on-tertiary-fixed p-2 rounded-lg">
        <span className="material-symbols-outlined">{stat.icon}</span>
      </div>
      <div>
        <div className="text-sm font-bold text-on-background">{stat.value}</div>
        <div className="text-[10px] uppercase text-slate-500 dark:text-slate-400">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
})}
        </div>
      </div>
    </section>
  );
}
