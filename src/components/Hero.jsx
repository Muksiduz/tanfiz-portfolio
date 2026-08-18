// src/components/Hero.jsx

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import heroVideo from "../assets/heroVideo.mp4";

// ============================================================
// INTERACTIVE LETTER
// ============================================================

function InteractiveLetter({
  children,
  className = "",
  delay = 0,
  direction = "left",
}) {
  const ref = useRef(null);

  // ----------------------------------------------------------
  // ENTRANCE DIRECTION
  // ----------------------------------------------------------

  const initialX = direction === "left" ? -100 : 100;

  // ----------------------------------------------------------
  // INTERACTIVE SCALE
  // ----------------------------------------------------------

  const scaleX = useSpring(1, {
    stiffness: 500,
    damping: 30,
    mass: 0.4,
  });

  const scaleY = useSpring(1, {
    stiffness: 500,
    damping: 30,
    mass: 0.4,
  });

  // ----------------------------------------------------------
  // MOUSE INTERACTION
  // ----------------------------------------------------------

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 220;

      if (distance < radius) {
        const strength = 1 - distance / radius;

        const directionX = dx / Math.max(distance, 1);
        const directionY = dy / Math.max(distance, 1);

        const horizontalSquish = 1 - Math.abs(directionX) * strength * 0.35;

        const verticalSquish = 1 - Math.abs(directionY) * strength * 0.25;

        scaleX.set(horizontalSquish);
        scaleY.set(verticalSquish);
      } else {
        scaleX.set(1);
        scaleY.set(1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scaleX, scaleY]);

  // ----------------------------------------------------------
  // LETTER
  // ----------------------------------------------------------

  return (
    <motion.span
      ref={ref}
      initial={{
        opacity: 0,
        x: initialX,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        scaleX,
        scaleY,
        transformOrigin: "center",
      }}
      className={`inline-block ${className}`}>
      {children}
    </motion.span>
  );
}

// ============================================================
// HERO
// ============================================================

export default function Hero() {
  // ==========================================================
  // HERO REF
  // ==========================================================

  const heroRef = useRef(null);

  // ==========================================================
  // SCROLL PROGRESS
  // ==========================================================

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // ==========================================================
  // VIDEO SIZE
  // ==========================================================

  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["25vw", "100vw"],
  );

  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["28vw", "100vh"],
  );

  // ==========================================================
  // VIDEO ROTATION / RADIUS
  // ==========================================================

  const videoRotate = useTransform(scrollYProgress, [0, 0.35], [-3, 0]);

  const videoRadius = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  // ==========================================================
  // LEFT TYPOGRAPHY
  // ==========================================================

  const motionX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vw", "-8vw", "-18vw"],
  );

  const motionY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vh", "-15vh", "-35vh"],
  );

  const motionScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.15]);

  // ==========================================================
  // RIGHT TYPOGRAPHY
  // ==========================================================

  const movieX = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    ["0vw", "4vw", "15vw", "35vw"],
  );

  const movieY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    ["0vh", "10vh", "-5vh", "-30vh"],
  );

  // ==========================================================
  // VIDEO ENTRANCE ANIMATION
  // ==========================================================

  const videoEntrance = {
    hidden: {
      opacity: 0,
      scale: 0.94,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 1,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      ref={heroRef}
      data-no-draw
      className="
        relative
        z-0
        h-[240vh]
        bg-[#f8f7f2]
      ">
      {/* ====================================================
          STICKY VIEWPORT
      ==================================================== */}

      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[700px]
          w-full
          overflow-hidden
        ">
        {/* ==================================================
            HUGE TYPOGRAPHY
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            overflow-hidden
            select-none
          ">
          {/* ==================================================
              SAYED — LEFT
          ================================================== */}

          <motion.div
            style={{
              x: motionX,
              y: motionY,
              scale: motionScale,
            }}
            className="
              absolute
              left-[-2vw]
              top-[10vh]
              whitespace-nowrap
              font-sans
              text-[24vw]
              font-black
              italic
              uppercase
              leading-[0.72]
              tracking-[-70px]
              text-[#08c6ed]
            ">
            <InteractiveLetter direction="left" delay={0.05}>
              S
            </InteractiveLetter>

            <InteractiveLetter direction="left" delay={0.1}>
              Y
            </InteractiveLetter>

            <InteractiveLetter direction="left" delay={0.15}>
              E
            </InteractiveLetter>

            <InteractiveLetter direction="left" delay={0.2}>
              D
            </InteractiveLetter>
          </motion.div>

          {/* ==================================================
              TANFIZ — RIGHT
          ================================================== */}

          <motion.div
            style={{
              x: movieX,
              y: movieY,
            }}
            className="
              absolute
              bottom-[1vh]
              right-[-1vw]
              whitespace-nowrap
              font-sans
              text-[23vw]
              font-black
              italic
              uppercase
              leading-[0.7]
              tracking-[-0.12em]
              text-[#08c6ed]
            ">
            <InteractiveLetter direction="right" delay={0.25}>
              T
            </InteractiveLetter>

            <InteractiveLetter direction="right" delay={0.3}>
              A
            </InteractiveLetter>

            <InteractiveLetter direction="right" delay={0.35}>
              N
            </InteractiveLetter>

            <InteractiveLetter direction="right" delay={0.4}>
              F
            </InteractiveLetter>

            <InteractiveLetter direction="right" delay={0.45}>
              I
            </InteractiveLetter>

            <InteractiveLetter direction="right" delay={0.5}>
              Z
            </InteractiveLetter>
          </motion.div>
        </div>

        {/* ==================================================
            VIDEO
        ================================================== */}

        <motion.div
          variants={videoEntrance}
          initial="hidden"
          animate="visible"
          style={{
            width: videoWidth,
            height: videoHeight,
            rotate: videoRotate,
            borderRadius: videoRadius,
          }}
          className="
            absolute
            left-1/2
            top-[54%]
            z-20
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            border
            border-black
            bg-black
          ">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
