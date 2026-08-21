// src/components/Hero.jsx

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import heroVideo from "../assets/heroVideo.mp4";
import heroVideoMobile from "../assets/heroVideo.mp4";

import heroBackground from "../assets/projects/back.jpeg";

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
  // RESPONSIVE BREAKPOINT
  // ==========================================================

  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenType("mobile");
      } else if (width < 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

    updateScreenType();

    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  const isMobile = screenType === "mobile";
  const isTablet = screenType === "tablet";

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

  const initialVideoWidth = isMobile ? "78vw" : isTablet ? "52vw" : "25vw";

  const initialVideoHeight = isMobile ? "30vw" : isTablet ? "29.25vw" : "28vw";

  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.45],
    [initialVideoWidth, "100vw"],
  );

  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.45],
    [initialVideoHeight, "100vh"],
  );

  // ==========================================================
  // VIDEO ROTATION
  // ==========================================================

  const videoRotate = useTransform(scrollYProgress, [0, 0.35], [-3, 0]);

  // ==========================================================
  // VIDEO RADIUS
  // ==========================================================

  const videoRadius = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  // ==========================================================
  // LEFT TYPOGRAPHY
  // ==========================================================

  const motionX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile
      ? ["0vw", "-4vw", "-9vw"]
      : isTablet
        ? ["0vw", "-5vw", "-11vw"]
        : ["0vw", "-8vw", "-18vw"],
  );

  const motionY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile
      ? ["0vh", "-6vh", "-14vh"]
      : isTablet
        ? ["0vh", "-9vh", "-20vh"]
        : ["0vh", "-15vh", "-35vh"],
  );

  const motionScale = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, isMobile ? 1.08 : isTablet ? 1.1 : 1.15],
  );

  // ==========================================================
  // RIGHT TYPOGRAPHY
  // ==========================================================

  const movieX = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    isMobile
      ? ["0vw", "2vw", "7vw", "15vw"]
      : isTablet
        ? ["0vw", "3vw", "9vw", "20vw"]
        : ["0vw", "4vw", "15vw", "35vw"],
  );

  const movieY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    isMobile
      ? ["0vh", "5vh", "-2vh", "-12vh"]
      : isTablet
        ? ["0vh", "7vh", "-3vh", "-18vh"]
        : ["0vh", "10vh", "-5vh", "-30vh"],
  );

  // ==========================================================
  // VIDEO ENTRANCE
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
  // HERO HEIGHT
  // ==========================================================

  const heroHeight = isMobile
    ? "h-[200vh]"
    : isTablet
      ? "h-[220vh]"
      : "h-[240vh]";

  // ==========================================================
  // SELECT VIDEO
  // ==========================================================

  const currentVideo = isMobile ? heroVideoMobile : heroVideo;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      ref={heroRef}
      data-no-draw
      className={`
    relative
    z-0
    ${heroHeight}
    bg-cover
    bg-[position:left_-20px]
    bg-no-repeat
    bg-fixed
  `}
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}>
      {/* ====================================================
          STICKY VIEWPORT
      ==================================================== */}

      <div
        className="
          sticky
          top-0
          h-[100vh]
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
            className={`
              absolute
              whitespace-nowrap
               font-custom
              font-black
              
              uppercase
              text-[#de2832]

              ${
                isMobile
                  ? `
                    left-[-2vw]
                    top-[14vh]
                    text-[38vw]
                    leading-[0.68]
                    tracking-[-0.065em]
                  `
                  : isTablet
                    ? `
                      left-[-2vw]
                      top-[11vh]
                      text-[20vw]
                      leading-[0.72]
                      tracking-[-0.07em]
                    `
                    : `
                      left-[2vw]
                      top-[10vh]
                      text-[24vw]
                      leading-[0.99]
                      tracking-[0.009em]
                    `
              }
            `}>
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
            className={`
              absolute
              whitespace-nowrap
              font-custom
              font-black
             
              uppercase
              text-[#de2832]

              ${
                isMobile
                  ? `
                    bottom-[20vh]
                    right-[6vw]
                    text-[28vw]
                    leading-[0.68]
                    tracking-[-0.065em]
                  `
                  : isTablet
                    ? `
                      bottom-[2vh]
                      right-[-2vw]
                      text-[19vw]
                      leading-[0.7]
                      tracking-[-0.07em]
                    `
                    : `
                      bottom-[1vh]
                      right-[-1vw]
                      text-[24vw]
                      leading-[0.6]
                       tracking-[0.009em]
                    `
              }
            `}>
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
          className={`
            absolute
            left-1/2
            z-20
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            border
            border-black
            bg-black

            ${isMobile ? "top-[48%]" : isTablet ? "top-[55%]" : "top-[54%]"}
          `}>
          <video
            key={currentVideo}
            src={currentVideo}
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
        {/* ==================================================
    ROLE / INTRO TEXT
================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
    absolute
    z-30
    left-[4vw]
    bottom-[7vh]
    select-none
    ${isMobile ? "scale-[0.85] origin-left" : ""}
  `}>
          <div className="flex items-start gap-2">
            {/* SMALL STAR / SYMBOL */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-[1px] shrink-0"
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, 180, 360],
                scale: [1, 1.35, 1],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
                rotate: {
                  duration: 3,
                  delay: 1.6,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 1.8,
                  delay: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}>
              <path
                d="M6 0.8L7.05 4.95L11.2 6L7.05 7.05L6 11.2L4.95 7.05L0.8 6L4.95 4.95L6 0.8Z"
                fill="currentColor"
              />
            </motion.svg>

            <div>
              {/* TEXT */}
              <div
                className="
          font-mono
          text-[18px]
          font-medium
          uppercase
          leading-[1.35]
          tracking-[0.08em]
          text-[#9aa0a5]
        ">
                <div>MOTION DESIGNER</div>
                <div>BRANDING ENTHUSIAST</div>
                <div>VISUAL STORYTELLER</div>
              </div>

              {/* ANIMATED UNDERLINE */}
              <svg
                width="100"
                height="8"
                viewBox="0 0 100 8"
                fill="none"
                className="mt-1">
                <motion.path
                  d="M1 4.5C24 3.2 51 5.8 99 3.5"
                  stroke="#9aa0a5"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.15,
                    ease: "easeOut",
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
