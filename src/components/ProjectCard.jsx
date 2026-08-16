// src/components/ProjectCard.jsx

import { motion } from "motion/react";
import { useRef } from "react";

import {
  projectReveal,
  projectImage,
  projectOverlay,
  projectContent,
} from "../animations/projectAnimations";

import { useProjectParallax } from "../animations/parallexAnimations";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  // Different movement for each column
  const speeds = [35, 55, 40];

  const intensity = speeds[index % 3];

  const y = useProjectParallax(ref, intensity);

  return (
    <motion.article
      ref={ref}
      variants={projectReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        group
        relative
        overflow-hidden
        bg-neutral-200
      ">
      <div
        className="
          relative
          h-[480px]
          overflow-hidden
        ">
        {/* PARALLAX IMAGE */}

        <motion.img
          src={project.image}
          alt={project.title}
          style={{ y }}
          variants={projectImage}
          initial="rest"
          whileHover="hover"
          className="
            absolute
            -left-[5%]
            -top-[10%]
            h-[120%]
            w-[110%]
            object-cover
            will-change-transform
          "
        />

        {/* OVERLAY */}

        <motion.div
          initial="rest"
          whileHover="hover"
          variants={projectOverlay}
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/10
            to-transparent
          "
        />

        {/* CONTENT */}

        <motion.div
          initial="rest"
          whileHover="hover"
          variants={projectContent}
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            text-white
          ">
          <p
            className="
              mb-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/70
            ">
            {project.category}
          </p>

          <h3 className="text-xl font-light">{project.title}</h3>

          {project.description && (
            <p
              className="
                mt-2
                max-w-xs
                text-xs
                leading-relaxed
                text-white/70
              ">
              {project.description}
            </p>
          )}
        </motion.div>

        {/* NUMBER */}

        <span
          className="
            absolute
            right-5
            top-5
            font-mono
            text-[9px]
            tracking-[0.15em]
            text-white/70
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          ">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}
