// src/pages/ProjectDetail.jsx

import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((project) => String(project.id) === String(id));

  const detail = projectDetails[id];

  if (!project || !detail) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fafaf8]">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            Project not found
          </p>

          <Link to="/" className="mt-6 inline-block text-sm underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#fafaf8] text-[#242424]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-[5vw] pb-20 pt-6 md:px-[10vw] md:pt-40">
        <Link
          to="/"
          className="
            mb-20
            inline-flex
            items-center
            gap-2
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-neutral-500
            transition-colors
            hover:text-black
          ">
          <ArrowLeft size={13} strokeWidth={1.5} />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl">
          {/* CATEGORY */}

          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-400">
            {detail.category}
          </p>

          {/* TITLE */}

          <h1
            className="
              mt-5
              text-[clamp(3.5rem,9vw,8rem)]
              font-light
              leading-[0.9]
              tracking-[-0.06em]
            ">
            {detail.title}
          </h1>

          {/* PROJECT INFO */}

          <div
            className="
              mt-12
              grid
              gap-8
              border-t
              border-neutral-200
              pt-8
              md:grid-cols-3
            ">
            {/* ABOUT */}

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                About
              </p>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                {detail.description}
              </p>
            </div>

            {/* CLIENT */}

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                Client
              </p>

              <p className="mt-3 text-sm">{detail.client}</p>
            </div>

            {/* ROLE */}

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                Role
              </p>

              <p className="mt-3 text-sm">{detail.role}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          VIDEO
      ===================================================== */}

      {detail.video && (
        <section className="px-[5vw] md:px-[10vw]">
          <div className="mx-auto max-w-6xl">
            <div className="relative aspect-video overflow-hidden bg-black">
              <iframe
                src={detail.video.url}
                title={`${detail.title} video`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      {/* {detail.heroImage && (
        <section className="px-[5vw] py-20 md:px-[10vw] md:py-32">
          <div className="mx-auto max-w-6xl">
            <motion.img
              src={detail.heroImage}
              alt={`${detail.title} hero`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      )} */}

      {/* =====================================================
          MOODBOARD / REFERENCES
      ===================================================== */}

      {detail.moodboard?.length > 0 && (
        <section className="px-[5vw] py-20 md:px-[10vw] md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle number="01" title="References" />

            <ImageGrid
              images={detail.moodboard}
              title={detail.title}
              type="reference"
            />
          </div>
        </section>
      )}

      {/* =====================================================
          DESIGN EXPLORATION
      ===================================================== */}

      {detail.exploration?.length > 0 && (
        <section className="px-[5vw] py-20 md:px-[10vw] md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle number="02" title="Design Exploration" />

            <ImageGrid
              images={detail.exploration}
              title={detail.title}
              type="exploration"
            />
          </div>
        </section>
      )}

      {/* =====================================================
          GALLERY
      ===================================================== */}

      {detail.gallery?.length > 0 && (
        <section className="px-[5vw] py-20 md:px-[10vw] md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle number="03" title="Final Work" />

            <ImageGrid
              images={detail.gallery}
              title={detail.title}
              type="project"
            />
          </div>
        </section>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <section className="px-[5vw] pb-32 pt-20 md:px-[10vw]">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            justify-between
            border-t
            border-neutral-200
            pt-8
          ">
          <Link
            to="/"
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-neutral-500
              transition-colors
              hover:text-black
            ">
            ← All projects
          </Link>

          <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-400">
            {detail.year}
          </span>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   IMAGE GRID
========================================================= */

function ImageGrid({ images, title, type }) {
  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        lg:grid-cols-3
      ">
      {images.map((image, index) => (
        <motion.div
          key={`${image}-${index}`}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            bg-neutral-200
          ">
          <img
            src={image}
            alt={`${title} ${type} ${index + 1}`}
            className="
              aspect-square
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
            loading="lazy"
          />

          {/* IMAGE NUMBER */}

          <span
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              font-mono
              text-[8px]
              tracking-[0.15em]
              text-white/70
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            ">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-5 border-y border-neutral-200 py-4">
      <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-400">
        {number}
      </span>

      <h2 className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500">
        {title}
      </h2>
    </div>
  );
}
