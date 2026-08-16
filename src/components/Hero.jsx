// src/components/Hero.jsx

import { motion } from "motion/react";

import {
  heroContainer,
  heroText,
  heroLogo,
  heroSocials,
  heroScrollIndicator,
  floatingHero,
} from "../animations/heroAnimations";

export default function Hero() {
  return (
    <section
      className="
        sticky
        top-0
        z-0
        flex
        h-screen
        min-h-[700px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#f1f1ef]
      ">
      {/* Grain */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          opacity-[0.12]
          mix-blend-multiply
        "
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E")
          `,
        }}
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative h-full w-full">
        {/* LEFT TEXT */}

        <motion.div
          variants={heroText}
          className="
            absolute
            left-[8%]
            top-1/2
            -translate-y-1/2
            font-mono
            text-[clamp(12px,1.2vw,20px)]
            tracking-[0.35em]
            text-[#506170]
            md:left-[14%]
            lg:left-[19%]
          ">
          motion
        </motion.div>

        {/* RIGHT TEXT */}

        <motion.div
          variants={heroText}
          className="
            absolute
            right-[8%]
            top-1/2
            -translate-y-1/2
            font-mono
            text-[clamp(12px,1.2vw,20px)]
            tracking-[0.35em]
            text-[#506170]
            md:right-[14%]
            lg:right-[19%]
          ">
          design
        </motion.div>

        {/* CENTRAL ART */}

        <motion.div
          variants={heroLogo}
          initial="hidden"
          animate="visible"
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            h-[210px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            sm:h-[240px]
            sm:w-[360px]
            md:h-[260px]
            md:w-[400px]
          ">
          <motion.div
            variants={floatingHero}
            animate="animate"
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
            ">
            {/* Frame */}

            <div
              className="
                absolute
                h-[165px]
                w-[260px]
                rotate-[-8deg]
                border-[6px]
                border-neutral-700
                sm:h-[190px]
                sm:w-[300px]
                sm:border-[7px]
                md:h-[210px]
                md:w-[330px]
                md:border-[8px]
              "
            />

            {/* Logo */}

            <div
              className="
                relative
                z-10
                rotate-[-7deg]
                text-[76px]
                font-black
                tracking-[-0.12em]
                text-neutral-700
                sm:text-[92px]
                md:text-[110px]
              ">
              LM
            </div>

            {/* Leaves */}

            <div
              className="
                absolute
                -left-1
                bottom-3
                h-14
                w-7
                rotate-[-30deg]
                rounded-full
                bg-[#899272]/60
                blur-[1px]
                sm:h-16
                sm:w-8
                md:-left-3
                md:bottom-4
                md:h-20
                md:w-10
              "
            />

            <div
              className="
                absolute
                -right-1
                top-3
                h-16
                w-7
                rotate-[30deg]
                rounded-full
                bg-[#899272]/60
                blur-[1px]
                sm:h-20
                sm:w-8
                md:top-5
                md:h-24
                md:w-10
              "
            />

            {/* Blue accent */}

            <div
              className="
                absolute
                right-8
                bottom-8
                h-7
                w-7
                rotate-[10deg]
                bg-sky-200/70
                sm:right-10
                sm:bottom-10
                sm:h-8
                sm:w-8
                md:right-12
                md:bottom-12
                md:h-10
                md:w-10
              "
            />

            {/* Butterfly */}

            <div
              className="
                absolute
                bottom-[-3px]
                left-[32%]
                text-[34px]
                opacity-70
                sm:text-[40px]
                md:bottom-[-5px]
                md:text-[48px]
              ">
              🦋
            </div>

            {/* Flower */}

            <div
              className="
                absolute
                right-[13%]
                top-[-5px]
                text-[36px]
                opacity-70
                sm:text-[42px]
                md:top-[-8px]
                md:text-[50px]
              ">
              ✿
            </div>
          </motion.div>
        </motion.div>

        {/* SOCIAL BUTTONS */}

        <motion.div
          variants={heroSocials}
          className="
            absolute
            left-1/2
            top-[calc(50%+105px)]
            z-30
            flex
            -translate-x-1/2
            -translate-y-1/2
            gap-2
            sm:top-[calc(50%+120px)]
            md:top-[calc(50%+140px)]
          ">
          <a
            href="#"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/60
              text-[10px]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            ">
            Bé
          </a>

          <a
            href="#"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/60
              text-[10px]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            ">
            in
          </a>

          <a
            href="#"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/60
              text-[10px]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
            ">
            ◎
          </a>
        </motion.div>

        {/* SCROLL INDICATOR */}

        <motion.div
          variants={heroScrollIndicator}
          initial="hidden"
          animate="visible"
          className="
            absolute
            bottom-8
            left-1/2
            z-30
            -translate-x-1/2
          ">
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-4
              w-4
              rotate-45
              border-b
              border-r
              border-neutral-500
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
