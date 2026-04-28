"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-xl px-8 md:px-20 bg-background" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl mx-auto moving-gradient rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-black/10 backdrop-blur-[2px]"></div>
        
        <div className="flex-1 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-h2 mb-6"
          >
            Ready to build the future together?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-body-lg text-white/90 mb-8"
          >
            Currently accepting select consulting engagements and senior leadership opportunities. Let&apos;s discuss your next breakthrough.
          </motion.p>
          <div className="space-y-4">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-white/80 group-hover:scale-110 transition-transform">mail</span>
              <span className="text-body-md">hello@technicalportfolio.com</span>
            </motion.div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-white/80 group-hover:scale-110 transition-transform">call</span>
              <span className="text-body-md">+1 (555) 123-4567</span>
            </motion.div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-white/80 group-hover:scale-110 transition-transform">chat</span>
              <span className="text-body-md">WhatsApp: +1 (555) 987-6543</span>
            </motion.div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="material-symbols-outlined text-white/80 group-hover:scale-110 transition-transform">location_on</span>
              <span className="text-body-md">San Francisco, CA / Remote</span>
            </motion.div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative z-10">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                className="bg-white/10 border-b border-white/30 border-t-0 border-x-0 focus:ring-0 focus:border-white text-white placeholder-white/60 p-4 rounded-lg transition-all outline-none backdrop-blur-sm" 
                placeholder="Name" 
                type="text"
              />
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                className="bg-white/10 border-b border-white/30 border-t-0 border-x-0 focus:ring-0 focus:border-white text-white placeholder-white/60 p-4 rounded-lg transition-all outline-none backdrop-blur-sm" 
                placeholder="Email" 
                type="email"
              />
            </div>
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              className="w-full bg-white/10 border-b border-white/30 border-t-0 border-x-0 focus:ring-0 focus:border-white text-white placeholder-white/60 p-4 rounded-lg transition-all outline-none backdrop-blur-sm" 
              placeholder="Message" 
              rows="4"
            ></motion.textarea>
            <motion.button 
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#ffffff",
                color: "#7c3aed",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/90 text-primary-container text-label-caps font-bold py-4 rounded-xl transition-all"
            >
              Send Connection Request
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
