// src/components/ProjectSection.jsx

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["Motion", "Design", "Branding"];

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
        pt-[10vh]
        md:px-[6vw]
        lg:px-[5.5vw]
      ">
      {/* HEADER */}

      {/* CATEGORY NAVIGATION */}

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
        {categories.map((category) => {
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
                text-[18px]
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

        <span className="ml-auto hidden font-mono text-[18px] tracking-[0.15em] text-[#9aa0a5] sm:block">
          {String(filteredProjects.length).padStart(2, "0")} PROJECTS
        </span>
      </motion.nav>

      {/* COLLAGE */}

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
    columns-1
    gap-3
    sm:columns-2
    lg:columns-3
  ">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="h-[10vh]" />
    </section>
  );
}
