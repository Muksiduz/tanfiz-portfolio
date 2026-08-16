// src/components/ProjectCard.jsx

import { motion } from "motion/react";

import {
  projectReveal,
  projectImage,
  projectOverlay,
  projectContent,
} from "../animations/projectAnimations";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
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
      {/* IMAGE CONTAINER */}

      <div
        className="
          relative
          h-[480px]
          overflow-hidden
        ">
        {/* IMAGE */}

        <motion.img
          src={project.image}
          alt={project.title}
          variants={projectImage}
          initial="rest"
          whileHover="hover"
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
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

          <h3
            className="
              text-xl
              font-light
              tracking-tight
            ">
            {project.title}
          </h3>

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

        {/* PROJECT NUMBER */}

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
