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
      degree: "BSc Honors in Computer Science and Engineering",
      school: "Mohammadpur Central University (under National University)",
      period: "2020-2026",
      gpa: "3.83 / 4.00",
      isCGPA: true,
      details: "Focused on core computer science subjects including programming, data structures, databases, and software engineering. Gained hands-on experience through academic projects and web development practice.",
      active: true
    },
    {
      degree: "HSC in Science",
      school: "Mohammadpur Preparatory School & College (Dhaka Board)",
      period: "2017-2019",
      gpa: "4.58 / 5.00",
      details: "Completed Higher Secondary Education in Science group with focus on Mathematics, Physics, and ICT. Built a strong foundation in analytical thinking and problem-solving.",
      active: false
    },
    {
      degree: "SSC in Science",
      school: "Mohammadpur Preparatory School & College (Dhaka Board)",
      period: "2016-2017",
      gpa: "5.00 / 5.00",
      details: "Completed Secondary School Certificate (SSC) in Science group with focus on Mathematics, Physics, and General Science. Built foundational academic knowledge and problem-solving skills.",
      active: false
    }
  ];

  return (
    <section ref={containerRef} className="py-20 px-8 md:px-20 bg-surface-container" id="education">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 text-on-background">Educational Qualification</h2>
            <p className="text-slate-500 text-body-md mt-4">A journey through my academic studies and learning in computer science.</p>
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
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="text-primary-container font-bold">{edu.school}</span>
                        {edu.gpa && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                            {edu.isCGPA ? "CGPA" : "GPA"}: {edu.gpa}
                          </span>
                        )}
                      </div>
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
