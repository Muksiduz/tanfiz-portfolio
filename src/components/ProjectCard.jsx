import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projectReveal, projectImage } from "../animations/projectAnimations";

export default function ProjectCard({ project, index }) {
  const aspectClasses = {
    portrait: "aspect-[4/5]",
    portraitLong: "aspect-[1417/1772]",
    poster: "aspect-[1417/2004]",
    square: "aspect-square",

    smallPortrait: "aspect-[4/5]",
    smallPortraitLong: "aspect-[1417/1772]",
    smallPoster: "aspect-[1417/2004]",
    smallSquare: "aspect-square",
  };

  const handleProjectClick = () => {
    sessionStorage.setItem("projectsScrollPosition", String(window.scrollY));

    sessionStorage.setItem("projectsCategory", project.category);
  };

  return (
    <motion.article
      variants={projectReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        group
        mb-3
        break-inside-avoid
        overflow-hidden
        rounded-[16px]
        bg-neutral-200
      ">
      <Link
        to={`/project/${project.id}`}
        onClick={handleProjectClick}
        className="block"
        aria-label={`View ${project.title} project`}>
        <div
          className={`
            relative
            overflow-hidden
            ${aspectClasses[project.layout] || "aspect-square"}
          `}>
          {/* IMAGE */}
          <motion.img
            src={project.image}
            alt={project.title}
            variants={projectImage}
            initial="rest"
            whileHover="hover"
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* CONTENT */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              translate-y-3
              p-5
              text-white
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            ">
            <p
              className="
                mb-1.5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/70
              ">
              {project.category}
            </p>

            <h3
              className="
                text-lg
                font-medium
                tracking-[-0.02em]
              ">
              {project.title}
            </h3>
          </div>

          {/* NUMBER */}
          <span
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              font-mono
              text-[8px]
              tracking-[0.15em]
              text-white/80
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            ">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
