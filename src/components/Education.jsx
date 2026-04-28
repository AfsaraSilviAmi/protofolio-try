"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { height: 0 },
        { 
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2013 — 2015",
      details: "Specialized in Distributed Systems and Artificial Intelligence. Graduated with Honors. Developed a thesis on low-latency consensus algorithms.",
      active: true
    },
    {
      degree: "Bachelor of Engineering in Software Engineering",
      school: "MIT",
      period: "2009 — 2013",
      details: "Dean's List for all 4 years. Focused on algorithmic complexity and system design. Lead developer for the university's open-source student portal.",
      active: false
    },
    {
      degree: "Advanced Higher Secondary Certificate",
      school: "Science Academy",
      period: "2007 — 2009",
      details: "Top 1% in Mathematics and Physics. Awarded the Presidential Scholarship for Academic Excellence.",
      active: false
    }
  ];

  return (
    <section ref={containerRef} className="py-xl px-8 md:px-20 bg-surface-container overflow-hidden" id="education">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 text-on-background sticky top-32">Educational Qualification</h2>
            <p className="text-slate-500 text-body-md mt-4 sticky top-48">A journey through rigorous academic training and specialized engineering research.</p>
          </motion.div>
          
          <div className="lg:col-span-2 space-y-12 relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-violet-100">
              <div ref={lineRef} className="absolute left-0 top-0 w-full bg-primary-container origin-top"></div>
            </div>

            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full ring-4 ring-violet-50 z-10 ${edu.active ? 'bg-primary-container shadow-[0_0_15px_rgba(124,58,237,0.5)]' : 'bg-violet-200'}`}></div>
                <motion.div 
                  whileHover={{ x: 10, scale: 1.01 }}
                  className="glass-card p-10 rounded-3xl cursor-default border-l-4 border-l-primary-container/20 hover:border-l-primary-container transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-h3 text-on-background">{edu.degree}</h4>
                      <div className="text-primary-container font-bold">{edu.school}</div>
                    </div>
                    <div className="text-label-caps text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">{edu.period}</div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-body-md leading-relaxed">{edu.details}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
