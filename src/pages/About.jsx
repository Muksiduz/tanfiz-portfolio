// src/pages/About.jsx

import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import profileImage from "../assets/tanfiz.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      <main className="px-[6vw] pb-32 pt-[130px] md:px-[8vw] lg:px-[10vw]">
        {/* =====================================
            INTRO
        ====================================== */}

        <section className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* LEFT CONTENT */}

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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pt-2">
            {/* TITLE */}

            <h1
              className="
                max-w-3xl
                text-[clamp(2.5rem,4.5vw,5rem)]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#0798d2]
              ">
              Hi, I'am Sayed Tanfiz.
            </h1>

            {/* INTRO */}

            <div
              className="
                mt-8
                max-w-2xl
                space-y-5
                text-[14px]
                leading-[1.65]
                text-[#8b9298]
                md:text-[15px]
              ">
              <p>
                I am creative studio focused on motion design, visual
                storytelling, digital experiences and experimental design.
              </p>

              <p>
                We work across different styles and mediums, combining
                animation, typography, photography, graphic design and
                technology to create visual identities and experiences that feel
                distinctive.
              </p>

              <p>
                From small visual experiments to complete digital experiences,
                our approach is always built around strong ideas, thoughtful
                design and meaningful movement.
              </p>
            </div>

            {/* SMALL ACCENT */}

            <div
              className="
                my-7
                h-[4px]
                w-3
                bg-[#0798d2]
              "
            />

            {/* SECOND PARAGRAPH */}

            <p
              className="
                max-w-2xl
                text-[14px]
                leading-[1.65]
                text-[#8b9298]
                md:text-[15px]
              ">
              We believe good design doesn't need to shout. It should
              communicate clearly, create emotion and leave something memorable
              behind.
            </p>

            {/* EMAIL */}

            <a
              href="mailto:hello@yourstudio.com"
              className="
                mt-8
                inline-block
                text-[22px]
                font-semibold
                tracking-[-0.02em]
                text-[#0798d2]
                transition-opacity
                duration-300
                hover:opacity-50
                md:text-[26px]
              ">
              hello@yourstudio.com
            </a>
          </motion.div>

          {/* RIGHT PROFILE IMAGE */}

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
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-[130px]">
            <div className="aspect-square w-full overflow-hidden bg-neutral-200">
              <img
                src={profileImage}
                alt="Creative director portrait"
                className="
                  h-full
                  w-full
                  object-cover
                  
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
                loading="eager"
              />
            </div>

            {/* IMAGE CAPTION */}

            <div className="mt-4 flex items-center justify-between">
              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#8b9298]
                ">
                LM Studio
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.2em]
                  text-[#8b9298]
                ">
                2026
              </span>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
