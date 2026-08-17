// src/components/ProjectSection.jsx

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

import { projectContainer } from "../animations/projectAnimations";

const categories = ["All", "Motion", "Design", "Branding", "2D"];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => {
      if (activeCategory === "Design") {
        return (
          project.category === "Design" || project.category === "2D Design"
        );
      }

      if (activeCategory === "2D") {
        return project.category === "2D Design";
      }

      return project.category === activeCategory;
    });
  }, [activeCategory]);

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
        className="mb-12 max-w-5xl">
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

      {/* CATEGORY NAVIGATION */}

      <motion.nav
        initial={{
          opacity: 0,
          y: 20,
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
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-16
          flex
          flex-wrap
          items-center
          gap-x-7
          gap-y-3
          border-y
          border-[#deded9]
          py-4
        ">
        {categories.map((category, index) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="
                group
                relative
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                transition-colors
                duration-300
              ">
              <span
                className={
                  active
                    ? "text-[#242424]"
                    : "text-[#9aa0a5] group-hover:text-[#242424]"
                }>
                {category}
              </span>

              {/* ACTIVE LINE */}

              <span
                className={`
                  absolute
                  -bottom-[6px]
                  left-0
                  h-px
                  bg-[#242424]
                  transition-all
                  duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </button>
          );
        })}

        {/* PROJECT COUNT */}

        <span className="ml-auto hidden font-mono text-[9px] tracking-[0.15em] text-[#9aa0a5] sm:block">
          {String(filteredProjects.length).padStart(2, "0")} PROJECTS
        </span>
      </motion.nav>

      {/* PROJECT GRID */}

      <motion.div
        key={activeCategory}
        variants={projectContainer}
        initial="hidden"
        animate="visible"
        className="
          grid
          grid-cols-1
          gap-x-5
          gap-y-8
          md:grid-cols-2
          lg:grid-cols-3
        ">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="h-[10vh]" />
    </section>
  );
}
