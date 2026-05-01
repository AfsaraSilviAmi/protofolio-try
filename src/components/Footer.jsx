"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/afsara-silvi-ami" },
    { name: "GitHub", href: "https://github.com/AfsaraSilviAmi" },
    
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full mt-10 py-12 px-10 flex flex-col md:flex-row justify-between items-center gap-8 bg-background border-t border-violet-100 dark:border-violet-900/30 font-display text-sm tracking-wide uppercase transition-colors duration-500"
    >
      <div className="relative w-32 h-16">
        <Image 
          src="/logo2.png" 
          alt="ASA Logo" 
          fill 
          className={`object-contain transition-all duration-500 ${
            theme === 'dark' 
              ? 'invert hue-rotate-180 mix-blend-screen opacity-80 hover:opacity-100' 
              : 'mix-blend-multiply contrast-[1.2] brightness-[1.05]'
          }`}
        />
      </div>
      <div className="text-slate-500 dark:text-slate-400 font-medium text-center">© {new Date().getFullYear()} PORTFOLIO of Afsara Silvi Ami. ALL RIGHTS RESERVED.</div>
      <div className="flex items-center gap-6">
        {socials.map((social) => (
          <motion.a 
            key={social.name}
            whileHover={{ scale: 1.1, rotate: 5, color: "#7c3aed" }}
            className="text-slate-500 dark:text-slate-400 transition-colors font-bold" 
            href={social.href}
          >
            {social.name}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}
