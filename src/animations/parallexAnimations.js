// src/animations/parallaxAnimations.js

import { useScroll, useSpring, useTransform } from "motion/react";

export function useProjectParallax(ref, intensity = 50) {
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  const y = useSpring(rawY, {
    stiffness: 70,
    damping: 20,
    mass: 0.5,
  });

  return y;
}
