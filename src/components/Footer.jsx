// src/components/Footer.jsx

import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-[#fafaf8]
        px-[5vw]
        pb-10
        pt-20
        md:px-[12vw]
        lg:px-[18.5vw]
      ">
      <motion.div
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          flex
          flex-col
          items-center
        ">
        {/* Socials */}

        <div className="flex items-center gap-5">
          {/* Behance */}
          <a
            href="#"
            aria-label="Behance"
            className="
              text-neutral-400
              transition-colors
              duration-300
              hover:text-neutral-800
            ">
            <FaBehance size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              text-neutral-400
              transition-colors
              duration-300
              hover:text-neutral-800
            ">
            <FaLinkedinIn size={18} />
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              text-neutral-400
              transition-colors
              duration-300
              hover:text-neutral-800
            ">
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Copyright */}

        <p
          className="
            mt-8
            font-mono
            text-[12px]
            uppercase
            tracking-[0.1em]
            text-neutral-300
          ">
          Copyright © 2026 — All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
