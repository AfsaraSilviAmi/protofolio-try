"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    
    if (!key || key === "YOUR_ACCESS_KEY_HERE" || key.trim() === "") {
      setStatus("error");
      setErrorMessage("Please configure your Web3Forms Access Key in your .env.local file to enable email delivery. (Get a free key instantly at web3forms.com!)");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: key,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from Portfolio Website (${formData.name})`
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please check your Access Key.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please check your network connection.");
    }
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                w-full p-4 rounded-xl
                bg-white/95 text-gray-900
                placeholder-gray-500
                focus:outline-none
                shadow-sm"
                placeholder="Your Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="
              w-full p-4 rounded-xl
              bg-white/95 text-gray-900
              placeholder-gray-500
              focus:outline-none
              shadow-sm"
              placeholder="Write your message..."
              rows="4"
            />

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-white/20 border border-white/40 text-white text-sm font-medium"
                >
                  🎉 Message sent successfully directly to Ami's inbox!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-100 text-sm font-medium"
                >
                  ⚠️ {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* FIXED BUTTON (ICON VISIBLE + DARK MODE GOOD) */}
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: status === "submitting" ? 1 : 1.03 }}
              whileTap={{ scale: status === "submitting" ? 1 : 0.97 }}
              className="
              w-full flex items-center justify-center gap-3
              bg-white text-violet-700 disabled:bg-white/70 disabled:cursor-not-allowed
              font-bold py-4 rounded-xl
              shadow-lg hover:shadow-2xl
              transition-all"
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-violet-700 border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-violet-700 text-xl">
                    mail
                  </span>
                  Send Message
                </>
              )}
            </motion.button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}