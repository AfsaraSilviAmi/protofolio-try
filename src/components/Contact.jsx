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
        className="
        max-w-screen-xl mx-auto rounded-[3rem] p-12 md:p-20
        bg-gradient-to-br from-violet-600 to-purple-700
        dark:from-violet-900 dark:to-purple-950
        text-white flex flex-col md:flex-row items-center gap-16
        overflow-hidden relative shadow-2xl"
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>

        {/* LEFT */}
        <div className="flex-1 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Connect & Build Something Cool 🚀
          </h2>

          <p className="text-white/90 text-lg mb-8">
            I’m currently learning and building projects. Feel free to reach out for collaboration or feedback.
          </p>

          <div className="space-y-4 text-white/90">
            {[
              { icon: "mail", text: "afsarasilvi@gmail.com" },
              { icon: "call", text: "01905643618" },
              { icon: "chat", text: "WhatsApp: 01905643618" },
              { icon: "location_on", text: "Bangladesh / Remote" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                {/* FIXED ICON VISIBILITY */}
                <span className="material-symbols-outlined text-white text-xl drop-shadow-md">
                  {item.icon}
                </span>
                <span className="text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 relative z-10 w-full">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="
                w-full p-4 rounded-xl
                bg-white/95 text-gray-900
                placeholder-gray-500
                focus:outline-none
                shadow-sm"
                placeholder="Your Name"
              />

              <input
                className="
                w-full p-4 rounded-xl
                bg-white/95 text-gray-900
                placeholder-gray-500
                focus:outline-none
                shadow-sm"
                placeholder="Your Email"
              />
            </div>

            <textarea
              className="
              w-full p-4 rounded-xl
              bg-white/95 text-gray-900
              placeholder-gray-500
              focus:outline-none
              shadow-sm"
              placeholder="Write your message..."
              rows="4"
            />

            {/* FIXED BUTTON (ICON VISIBLE + DARK MODE GOOD) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
              w-full flex items-center justify-center gap-3
              bg-white text-violet-700
              font-bold py-4 rounded-xl
              shadow-lg hover:shadow-2xl
              transition-all"
            >
              <span className="material-symbols-outlined text-violet-700 text-xl">
                mail
              </span>
              Send Message
            </motion.button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}