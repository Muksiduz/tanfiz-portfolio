// src/components/Hero.jsx

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import heroVideo from "../assets/heroVideo.mp4";

// ============================================================
// INTERACTIVE LETTER
// ============================================================

function InteractiveLetter({ children, className = "" }) {
  const ref = useRef(null);

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      // Distance at which the letter reacts
      const radius = 220;

      if (distance < radius) {
        const strength = 1 - distance / radius;

        // Direction from cursor to letter
        const directionX = dx / Math.max(distance, 1);
        const directionY = dy / Math.max(distance, 1);

        // Compress in the direction of the cursor
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

  return (
    <motion.span
      ref={ref}
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
  // SCROLL PROGRESS
  // ==========================================================

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // ==========================================================
  // VIDEO
  // ==========================================================

  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["42vw", "100vw"],
  );

  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["24vw", "100vh"],
  );

  const videoRotate = useTransform(scrollYProgress, [0, 0.35], [-3, 0]);

  const videoRadius = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  // ==========================================================
  // MAIN TYPOGRAPHY
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
          {/* SAYED — LEFT */}

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
              text-[27vw]
              font-black
              italic
              uppercase
              leading-[0.72]
              tracking-[-0.12em]
              text-[#08c6ed]
            ">
            <InteractiveLetter>S</InteractiveLetter>
            <InteractiveLetter>A</InteractiveLetter>
            <InteractiveLetter>Y</InteractiveLetter>
            <InteractiveLetter>E</InteractiveLetter>
            <InteractiveLetter>D</InteractiveLetter>
          </motion.div>

          {/* TANFIZ — RIGHT */}

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
              text-[25vw]
              font-black
              italic
              uppercase
              leading-[0.7]
              tracking-[-0.12em]
              text-[#08c6ed]
            ">
            <InteractiveLetter>T</InteractiveLetter>
            <InteractiveLetter>A</InteractiveLetter>
            <InteractiveLetter>N</InteractiveLetter>
            <InteractiveLetter>F</InteractiveLetter>
            <InteractiveLetter>I</InteractiveLetter>
            <InteractiveLetter>Z</InteractiveLetter>
          </motion.div>
        </div>

        {/* ==================================================
            VIDEO
        ================================================== */}

        <motion.div
          style={{
            width: videoWidth,
            height: videoHeight,
            rotate: videoRotate,
            borderRadius: videoRadius,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            border
            border-black
            bg-black
          ">
          {/* LOCAL */}

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
