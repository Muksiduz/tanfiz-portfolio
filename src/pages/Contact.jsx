// src/pages/Contact.jsx

import { motion } from "motion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      <main className="px-[6vw] pb-24 pt-[145px] md:px-[8vw] lg:px-[12vw]">
        {/* =====================================
            CONTACT HERO
        ====================================== */}

        <section>
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <h1
              className="
                text-[clamp(3rem,5vw,5rem)]
                font-bold
                leading-none
                tracking-[-0.05em]
                text-[#0798d2]
              ">
              Let's chat!?
            </h1>

            <p
              className="
                mt-2
                font-serif
                text-[18px]
                italic
                leading-relaxed
                text-[#858585]
                md:text-[20px]
              ">
              Shoot me a message if you feel like it. Cheers!
            </p>
          </motion.div>

          {/* =================================
              FORM + IMAGE
          ================================== */}

          <div
            className="
              mt-10
              grid
              items-start
              gap-14
              lg:grid-cols-[1fr_1fr]
              lg:gap-20
            ">
            {/* FORM */}

            <motion.form
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onSubmit={(e) => e.preventDefault()}
              className="max-w-[500px]">
              {/* NAME */}

              <div className="mb-7">
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-semibold
                    text-[#0798d2]
                  ">
                  Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name..."
                  required
                  className="
                    h-[42px]
                    w-full
                    border
                    border-[#d8d8d8]
                    bg-transparent
                    px-3
                    text-[15px]
                    text-neutral-700
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#b5b5b5]
                    focus:border-[#0798d2]
                  "
                />
              </div>

              {/* EMAIL */}

              <div className="mb-7">
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-semibold
                    text-[#0798d2]
                  ">
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address..."
                  required
                  className="
                    h-[42px]
                    w-full
                    border
                    border-[#d8d8d8]
                    bg-transparent
                    px-3
                    text-[15px]
                    text-neutral-700
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#b5b5b5]
                    focus:border-[#0798d2]
                  "
                />
              </div>

              {/* MESSAGE */}

              <div className="mb-7">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-semibold
                    text-[#0798d2]
                  ">
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message..."
                  required
                  className="
                    w-full
                    resize-none
                    border
                    border-[#d8d8d8]
                    bg-transparent
                    px-3
                    py-3
                    text-[15px]
                    text-neutral-700
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#b5b5b5]
                    focus:border-[#0798d2]
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  h-10
                  min-w-[116px]
                  border
                  border-neutral-500
                  bg-transparent
                  px-7
                  text-[13px]
                  font-semibold
                  text-neutral-800
                  transition-all
                  duration-300
                  hover:border-[#0798d2]
                  hover:bg-[#0798d2]
                  hover:text-white
                ">
                Submit
              </button>
            </motion.form>

            {/* =================================
                RIGHT IMAGE
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                min-h-[380px]
                items-center
                justify-center
                lg:min-h-[470px]
              ">
              {/* Replace this image with your own creative artwork */}

              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85"
                alt="Creative artwork"
                className="
                  max-h-[450px]
                  w-full
                  max-w-[560px]
                  object-cover
                  grayscale-[20%]
                  mix-blend-multiply
                  opacity-90
                "
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
