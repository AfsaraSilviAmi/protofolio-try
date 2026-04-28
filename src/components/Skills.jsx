"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-xl px-8 md:px-20 bg-surface-container overflow-hidden" id="skills">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-screen-xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-h2 text-on-background mb-4">Core Capabilities</h2>
          <div className="h-1 w-20 bg-primary-container mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Large Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
            className="md:col-span-2 glass-card p-10 rounded-3xl flex flex-col justify-between group transition-all cursor-default relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-violet-200/30 transition-colors"></div>
            <div>
              <motion.span 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="material-symbols-outlined text-primary-container text-4xl mb-6 inline-block"
              >
                architecture
              </motion.span>
              <h3 className="text-h3 mb-4">System Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 text-body-md max-w-md">Designing scalable microservices and cloud-native solutions that handle millions of requests with sub-millisecond latency.</p>
            </div>
            <div className="mt-8 flex gap-2 flex-wrap">
              {["AWS", "Kubernetes", "Terraform"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-semibold uppercase">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Small Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
            className="glass-card p-10 rounded-3xl group transition-all cursor-default"
          >
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="material-symbols-outlined text-primary-container text-4xl mb-6 inline-block"
            >
              auto_awesome
            </motion.span>
            <h3 className="text-h3 mb-4">AI Integration</h3>
            <p className="text-slate-600 dark:text-slate-400 text-body-md">Leveraging LLMs and machine learning models to build intelligent, predictive user interfaces.</p>
          </motion.div>

          {/* Small Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
            className="glass-card p-10 rounded-3xl group transition-all cursor-default"
          >
            <motion.span 
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              className="material-symbols-outlined text-primary-container text-4xl mb-6 inline-block"
            >
              security
            </motion.span>
            <h3 className="text-h3 mb-4">Cyber Security</h3>
            <p className="text-slate-600 dark:text-slate-400 text-body-md">Implementing Zero Trust architectures and advanced encryption standards across the stack.</p>
          </motion.div>

          {/* Large Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
            className="md:col-span-2 glass-card p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center group transition-all cursor-default"
          >
            <div className="flex-1">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 inline-block">devices</span>
              <h3 className="text-h3 mb-4">Full-Stack Mastery</h3>
              <p className="text-slate-600 dark:text-slate-400 text-body-md">From pixel-perfect React frontends to robust Go backends, I deliver end-to-end excellence.</p>
            </div>
            <div className="flex-1 w-full h-48 rounded-2xl overflow-hidden relative shadow-inner">
              <Image 
                src="/code-macro.png" 
                alt="Code representation" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Categorized Skills Section */}
        <motion.div variants={itemVariants} className="mt-24">
          <h3 className="text-h2 text-center mb-16">Technical Proficiency</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Frontend */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary-container">brush</span>
                <h4 className="text-h3">Frontend</h4>
              </div>
              {[
                { name: "React / Next.js", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Framer Motion", level: 80 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-label-caps">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-violet-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary-container"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Backend */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary-container">dns</span>
                <h4 className="text-h3">Backend</h4>
              </div>
              {[
                { name: "Node.js / Express", level: 90 },
                { name: "GoLang", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "GraphQL", level: 75 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-label-caps">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-violet-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary-container"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary-container">handyman</span>
                <h4 className="text-h3">Tools</h4>
              </div>
              {[
                { name: "Docker / Kubernetes", level: 85 },
                { name: "AWS / GCP", level: 80 },
                { name: "Terraform", level: 75 },
                { name: "Git / CI/CD", level: 95 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-label-caps">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-violet-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary-container"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
