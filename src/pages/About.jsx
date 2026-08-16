// src/pages/About.jsx

import { motion } from "motion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
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
            About
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Motion, design
            <br />
            and visual stories.
          </h1>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm leading-7 text-neutral-600">
                I'm a multidisciplinary designer focused on motion graphics,
                visual design and digital experiences.
              </p>
            </div>

            <div>
              <p className="text-sm leading-7 text-neutral-600">
                I enjoy combining movement, typography, photography and
                experimental visuals to create memorable digital experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
