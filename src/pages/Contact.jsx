// src/pages/Contact.jsx

import { motion } from "motion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      <main className="px-[5vw] pb-32 pt-[150px] md:px-[12vw] lg:px-[18.5vw]">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Let's make
            <br />
            something interesting.
          </h1>

          <a
            href="mailto:hello@example.com"
            className="
              mt-16
              inline-block
              border-b
              border-neutral-800
              pb-2
              text-sm
              text-neutral-800
              transition-opacity
              duration-300
              hover:opacity-40
            ">
            hello@example.com
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
