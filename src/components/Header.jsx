// src/components/Header.jsx

import { motion } from "motion/react";

import { Link } from "react-router-dom";

import { fadeIn } from "../animations/pageAnimation";
import { navigation } from "../data/navigation";
import { socialLinks } from "../data/socialLinks";

export default function Header() {
  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        h-[78px]
        w-full
        items-center
        justify-between
        bg-white/95
        px-[3vw]
        backdrop-blur-sm
      ">
      {/* Navigation */}

      <nav className="flex items-center gap-6">
        {navigation.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="
              text-[12px]
              text-neutral-800
              transition-opacity
              duration-300
              hover:opacity-40
            ">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Logo */}

      <Link
        to="/"
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        ">
        <div
          className="
            flex
            h-[48px]
            w-[64px]
            rotate-[-7deg]
            items-center
            justify-center
            border-[4px]
            border-neutral-800
            bg-white
          ">
          <span
            className="
              text-[24px]
              font-black
              tracking-[-0.15em]
              text-neutral-800
            ">
            LM
          </span>
        </div>
      </Link>

      {/* Social links */}

      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="
              text-[12px]
              font-semibold
              text-neutral-800
              transition-opacity
              duration-300
              hover:opacity-40
            ">
            {social.shortName}
          </a>
        ))}
      </div>
    </motion.header>
  );
}
