// src/components/Header.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

import { fadeIn } from "../animations/pageAnimation";
import { navigation } from "../data/navigation";
import { socialLinks } from "../data/socialLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

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
          px-[5vw]
          backdrop-blur-sm

          md:h-[98px]
          md:px-[3vw]
        ">
        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            text-neutral-800
            transition-opacity
            duration-300
            hover:opacity-50

            md:hidden
          ">
          {menuOpen ? (
            <X size={21} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="
  text-[15px]
  font-medium
  uppercase
  tracking-[0.02em]
  text-neutral-900
  transition-all
  duration-300
  hover:text-neutral-500
">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          onClick={closeMenu}
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
              h-[42px]
              w-[56px]
              rotate-[-7deg]
              items-center
              justify-center
              border-[3px]
              border-neutral-800
              bg-white

              md:h-[48px]
              md:w-[64px]
              md:border-[4px]
            ">
            <span
              className="
                text-[20px]
                font-black
                tracking-[-0.15em]
                text-neutral-800

                md:text-[24px]
              ">
              ST
            </span>
          </div>
        </Link>

        {/* =================================================
            DESKTOP SOCIAL LINKS
        ================================================= */}

        <div className="hidden items-center gap-5 sm:flex">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
              className="
        flex
        items-center
        justify-center
        text-neutral-800
        transition-opacity
        duration-300
        hover:opacity-40
      ">
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-x-0
              top-[78px]
              z-40
              border-t
              border-neutral-200
              bg-[#fafaf8]
              md:hidden
            ">
            <nav className="px-[5vw] py-8">
              {/* =================================================
                  MAIN NAVIGATION
              ================================================= */}

              <div className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-neutral-200
                        py-5
                        text-2xl
                        font-light
                        tracking-tight
                        text-neutral-900
                        transition-opacity
                        duration-300
                        hover:opacity-40
                      ">
                      <span>{item.label}</span>

                      <span className="font-mono text-[9px] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div className="mt-10">
                <p className="mb-5 font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                  Connect
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <SocialLink
                      key={social.name}
                      social={social}
                      onClick={closeMenu}
                    />
                  ))}
                </div>
              </div>

              {/* =================================================
                  SMALL FOOTER TEXT
              ================================================= */}

              <div className="mt-12 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                  Selected Works
                </span>

                <span className="font-mono text-[8px] tracking-[0.2em] text-neutral-400">
                  2026
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({ social, onClick }) {
  const icon = getSocialIcon(social.name);

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      aria-label={social.name}
      className="
        inline-flex
        items-center
        gap-2
        border
        border-neutral-200
        bg-white
        px-4
        py-3
        font-mono
        text-[9px]
        uppercase
        tracking-[0.15em]
        text-neutral-700
        transition-all
        duration-300
        hover:border-neutral-800
        hover:text-black
      ">
      {icon}

      <span>{social.name}</span>
    </a>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */

function getSocialIcon(name) {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("instagram")) {
    return <FaInstagram size={18} />;
  }

  if (normalizedName.includes("youtube")) {
    return <FaYoutube size={18} />;
  }

  if (normalizedName.includes("linkedin")) {
    return <FaLinkedinIn size={18} />;
  }

  if (normalizedName.includes("vimeo")) {
    return <FaVimeoV size={18} />;
  }

  return <Globe size={18} strokeWidth={1.5} />;
}
