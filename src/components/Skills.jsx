"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React / Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
  { name: "Node.js / Express", level: 80 },
  { name: "PHP", level: 30 },
  { name: "MySQL", level: 20 },
  { name: "MongoDB", level: 90 } 
],
    tools: [
  { name: "Git / GitHub", level: 75 },
  { name: "VS Code", level: 95 },
  { name: "Figma (Basic)", level: 60 },
  { name: "BetterAuth (Basic)", level: 60 } 
]
  };

  const renderSkills = (title, icon, items) => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary-container">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {items.map((skill) => (
        <div key={skill.name} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full bg-primary-container"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6 md:px-16 bg-surface-container" id="skills">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold mb-2">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Technologies I’ve been learning and working with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {renderSkills("Frontend", "brush", skills.frontend)}
          {renderSkills("Backend", "dns", skills.backend)}
          {renderSkills("Tools", "handyman", skills.tools)}
        </div>

      </div>
    </section>
  );
}