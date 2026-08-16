// src/components/ProjectSection.jsx

import { motion } from "motion/react";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

import { projectContainer } from "../animations/projectAnimations";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="
        relative
        z-10
        min-h-screen
        bg-[#fafaf8]
        px-[5vw]
        pb-40
        pt-[18vh]
        md:px-[8vw]
        lg:px-[10vw]
      ">
      {/* HEADER */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-20 max-w-5xl">
        <p
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-[#9aa0a5]
          ">
          Selected Projects
        </p>

        <h2
          className="
            mt-6
            text-[clamp(3rem,6vw,6rem)]
            font-light
            leading-[0.95]
            tracking-[-0.045em]
            text-[#242424]
          ">
          Motion & Design
        </h2>
      </motion.div>

      {/* PROJECT GRID */}

      <motion.div
        variants={projectContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
        }}
        className="
          grid
          grid-cols-1
          gap-x-5
          gap-y-8
          md:grid-cols-2
          lg:grid-cols-3
        ">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="h-[10vh]" />
    </section>
  );
}
