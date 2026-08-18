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
      LEFT SIDE — LOGO
  ================================================= */}

        <Link to="/" onClick={closeMenu} className="shrink-0">
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
      CENTER — DESKTOP NAVIGATION
  ================================================= */}

        <nav
          className="
      absolute
      left-1/2
      hidden
      -translate-x-1/2
      items-center
      gap-6
      md:flex
    ">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="
  inline-flex
  items-center
  px-3
  py-3
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
      RIGHT SIDE — SOCIAL LINKS
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
          px-3 py-3
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
      text-neutral-900
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
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-x-0
              top-[78px]
              z-40
              px-[4vw]
              pt-4
              md:hidden
            ">
            {/* =================================================
                FLOATING MENU PAPER
            ================================================= */}

            <div
              className="
                relative
                rounded-[2px]
                border
                border-neutral-200
                bg-[#fafaf8]
                px-[5vw]
                py-7
                shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              ">
              {/* Paper layer behind */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-2
                  left-2
                  right-2
                  -z-10
                  h-full
                  border
                  border-neutral-200
                  bg-[#f1f1ee]
                "
              />

              {/* =================================================
                  MAIN NAVIGATION
              ================================================= */}

              <nav>
                <div className="flex flex-col gap-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: -25,
                        rotate: index % 2 === 0 ? -1.2 : 1.2,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        rotate: index % 2 === 0 ? -1.2 : 1.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}>
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        className="
                          group
                          flex
                          min-h-[64px]
                          items-center
                          justify-between
                          border
                          border-neutral-200
                          bg-white
                          px-5
                          py-4
                          shadow-[0_6px_18px_rgba(0,0,0,0.04)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                        ">
                        <span
                          className="
                            text-[20px]
                            font-medium
                            uppercase
                            tracking-[-0.02em]
                            text-neutral-900
                            transition-colors
                            duration-300
                            group-hover:text-[#0798d2]
                          ">
                          {item.label}
                        </span>

                        <span
                          className="
                            font-mono
                            text-[9px]
                            tracking-[0.15em]
                            text-neutral-400
                          ">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: navigation.length * 0.07 + 0.15,
                }}
                className="mt-9">
                <p
                  className="
                    mb-4
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                  ">
                  Connect
                </p>

                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <SocialLink
                      key={social.name}
                      social={social}
                      onClick={closeMenu}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>

              {/* =================================================
                  SMALL FOOTER TEXT
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.45,
                }}
                className="
                  mt-9
                  flex
                  items-center
                  justify-between
                  border-t
                  border-neutral-200
                  pt-5
                ">
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  ">
                  Selected Works
                </span>

                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.2em]
                    text-neutral-400
                  ">
                  2026
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({ social, onClick, index }) {
  const icon = getSocialIcon(social.name);

  return (
    <motion.a
      initial={{
        opacity: 0,
        y: 10,
        rotate: index % 2 === 0 ? -1 : 1,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: index % 2 === 0 ? -1 : 1,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
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
        px-3
        py-2.5
        font-mono
        text-[8px]
        uppercase
        tracking-[0.12em]
        text-neutral-700
        shadow-[0_4px_12px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-neutral-800
        hover:text-black
        hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)]
      ">
      {icon}

      <span>{social.name}</span>
    </motion.a>
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
