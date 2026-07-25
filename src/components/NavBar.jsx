"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Intro", href: "#about" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 transition-all duration-300 ${
      scrolled 
        ? (theme === 'dark' ? "bg-slate-900/60" : "bg-white/60") + " backdrop-blur-2xl border-b border-violet-100/20 shadow-sm" 
        : "bg-transparent"
    } font-display tracking-tight`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <Link href="/" className="relative w-32 h-16 transition-transform duration-500 group-hover:scale-110">
          <Image 
            src="/logo2.png" 
            alt="ASA Logo" 
            fill 
            className={`object-contain transition-all duration-500 ${
              theme === 'dark' 
                ? 'invert hue-rotate-180 mix-blend-screen brightness-125' 
                : 'mix-blend-multiply contrast-[1.2] brightness-[1.05]'
            }`}
            priority
          />
        </Link>
      </motion.div>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            className={`relative text-body-md transition-colors py-1 px-2 group ${
              theme === 'dark' ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-violet-500"
            }`}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
            {hoveredLink === link.name && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            theme === 'dark' ? "bg-slate-800 text-amber-400" : "bg-violet-50 text-violet-600"
          }`}
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </motion.button>
       
        {/* Mobile Menu Button */}
<motion.button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  whileTap={{ scale: 0.9 }}
  className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center ${
    theme === "dark"
      ? "bg-slate-800 text-white"
      : "bg-violet-50 text-violet-700"
  }`}
>
  <span className="material-symbols-outlined">
    {mobileMenuOpen ? "close" : "menu"}
  </span>
</motion.button>
        
       
       <Link href="#contact" className="hidden md:block">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg text-label-caps hover:opacity-90 transition-all shadow-md"
  >
    Hire Me
  </motion.button>
</Link>
      </div>
      <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className={`absolute top-20 left-0 w-full md:hidden ${
        theme === "dark"
          ? "bg-slate-900/95"
          : "bg-white/95"
      } backdrop-blur-xl border-t border-white/10 shadow-xl`}
    >
      <div className="flex flex-col py-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`px-8 py-4 transition-colors ${
              theme === "dark"
                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                : "text-slate-700 hover:bg-violet-50 hover:text-violet-600"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <div className="px-8 pt-4">
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full bg-primary-container text-on-primary-container text-center py-3 rounded-lg font-semibold"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
