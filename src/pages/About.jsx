// src/pages/About.jsx

import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      <main className="px-[6vw] pb-32 pt-[130px] md:px-[8vw] lg:px-[10vw]">
        {/* =====================================
            INTRO
        ====================================== */}

        <section className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT IMAGE */}

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
            className="lg:sticky lg:top-[120px] lg:h-fit">
            <div className="aspect-square w-full overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
                alt="Creative director portrait"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                "
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

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
              Hi, we're LM.
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
                We're a creative studio focused on motion design, visual
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
        </section>

        {/* =====================================
            CLIENTS + AWARDS
        ====================================== */}

        <section className="mt-32 grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =================================
              CLIENTS
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}>
            <h2
              className="
                text-center
                text-xl
                font-semibold
                tracking-tight
                text-[#d4d4d2]
                lg:text-2xl
              ">
              Clients
            </h2>

            <div
              className="
                mt-10
                grid
                grid-cols-3
                items-center
                gap-x-8
                gap-y-10
                text-center
              ">
              <span className="text-2xl font-serif text-[#d3d3d1]">Vox</span>

              <span className="text-xl font-bold text-[#d3d3d1]">
                BBC
                <br />
                SPORT
              </span>

              <span className="text-2xl font-serif italic text-[#d3d3d1]">
                Sports
              </span>

              <span className="text-lg font-serif text-[#d3d3d1]">
                The
                <br />
                New York
                <br />
                Times
              </span>

              <span className="text-2xl font-medium text-[#d3d3d1]">
                Google
              </span>

              <span className="text-xl font-black text-[#d3d3d1]">
                FORTNITE
              </span>
            </div>

            {/* STUDIOS */}

            <h2
              className="
                mt-20
                text-center
                text-xl
                font-semibold
                tracking-tight
                text-[#d4d4d2]
                lg:text-2xl
              ">
              Studios
            </h2>

            <div className="mt-10 text-center">
              <span
                className="
                  text-2xl
                  font-black
                  tracking-[-0.05em]
                  text-[#d3d3d1]
                ">
                GOLDEN
                <br />
                WOLF
              </span>
            </div>
          </motion.div>

          {/* =================================
              AWARDS
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}>
            <h2
              className="
                text-[clamp(2.2rem,4vw,3.5rem)]
                font-semibold
                leading-none
                tracking-[-0.04em]
                text-[#0798d2]
              ">
              Honors & Awards
            </h2>

            <div className="mt-10 space-y-9">
              {/* AWARD 1 */}

              <Award
                title="CREATIVE EXCELLENCE AWARD — WINNER (2025)"
                description="Outstanding Motion Design — Creative visual storytelling project."
              />

              {/* AWARD 2 */}

              <Award
                title="MOTION DESIGN AWARDS — WINNER (2025)"
                description="Best Animation / Motion Design — Experimental visual identity."
              />

              {/* AWARD 3 */}

              <Award
                title="DIGITAL DESIGN AWARDS — WINNER (2024)"
                description="Outstanding Digital Experience — Interactive creative experience."
              />

              {/* AWARD 4 */}

              <Award
                title="THE MOTION AWARDS — WINNER (2024)"
                description="Best Explanatory / Educational Motion Project."
              />

              {/* AWARD 5 */}

              <Award
                title="THE MOTION AWARDS — NOMINEE (2025)"
                description="Best Experimental Motion Design."
              />

              {/* AWARD 6 */}

              <Award
                title="AWWWARDS — HONORABLE MENTION (2025)"
                description="Recognition for creative direction and digital experience."
              />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

/* ==========================================
   AWARD COMPONENT
========================================== */

function Award({ title, description }) {
  return (
    <div>
      <h3
        className="
          text-[13px]
          font-bold
          uppercase
          tracking-[0.01em]
          text-[#8b9298]
          underline
          decoration-[#8b9298]
          underline-offset-2
          md:text-[14px]
        ">
        {title}
      </h3>

      <p
        className="
          mt-0.5
          text-[12px]
          leading-[1.45]
          text-[#969da2]
          md:text-[13px]
        ">
        {description}
      </p>
    </div>
  );
}
