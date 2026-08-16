import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="
      text-sm
      font-medium
      tracking-[0.18em]
      text-foreground/60
      transition-colors
      hover:text-foreground
      whitespace-nowrap
    "
  >
    {children}
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreHref,
  readMoreLabel,
  imageSrc,
  imageAlt,
  overlayText,
  footerLeft,
  locationText,
  className,
}) => {
  return (
    <section
      id="home"
      className={cn(
        `
        relative
        h-[100svh]
        w-full
        overflow-hidden
        bg-background
        font-sans
        `,
        className
      )}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header
        className="
          absolute
          inset-x-0
          top-0
          z-[100]
          flex
          items-center
          justify-between
          px-8
          pt-7
          md:px-12
          md:pt-8
          lg:px-16
          lg:pt-8
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-xl
            font-black
            tracking-tight
            text-foreground
          "
        >
          {logoText}
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              onClick={link.onClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-4 bg-foreground" />
        </button>
      </header>


      {/* =====================================================
          MAIN HERO STAGE

          Everything below is positioned against the viewport,
          rather than using a grid that can collapse.
      ===================================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          top-[90px]
        "
      >

        {/* ===================================================
            CIRCLE

            Smaller than before so the complete circle fits
            inside the first viewport.
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-1/2
            z-10
            aspect-square
            w-[min(38vw,620px)]
            -translate-x-1/2
            rounded-full
            bg-burgundy
          "
        />


        {/* ===================================================
            PORTRAIT

            Larger portrait.
            Slightly LEFT of the circle center.
            Bottom touches the hero boundary.
        =================================================== */}
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-[calc(50%-45px)]
            z-20
            h-[78vh]
            max-h-[700px]
            w-auto
            max-w-none
            -translate-x-1/2
            object-contain
            object-bottom
          "
        />


        {/* ===================================================
            LEFT CONTENT

            Kept completely separate from the typography.
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="
            absolute
            left-8
            top-1/2
            z-40
            w-[300px]
            -translate-y-1/2
            md:left-12
            md:w-[330px]
            lg:left-16
            lg:w-[370px]
          "
        >
          {mainText}

          <a
            href={readMoreHref}
            onClick={(e) => {
              if (readMoreHref?.startsWith('#')) {
                e.preventDefault();

                const targetId = readMoreHref.replace('#', '');
                const element = document.getElementById(targetId);

                if (element) {
                  const offset = 80;

                  window.scrollTo({
                    top:
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset,
                    behavior: 'smooth',
                  });
                }
              }
            }}
            className="
              mt-8
              inline-block
              text-sm
              font-bold
              uppercase
              tracking-[0.15em]
              text-burgundy
              transition-colors
              hover:text-deep-burgundy
            "
          >
            {readMoreLabel}
          </a>
        </motion.div>


        {/* ===================================================
            RIGHT TYPOGRAPHY

            IMPORTANT:
            This is deliberately independent from the portrait.

            The words are right aligned but have enough space
            between them to remain readable.
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            absolute
            right-[2.5vw]
            top-1/2
            z-40
            w-[36vw]
            max-w-[590px]
            -translate-y-1/2
          "
        >
          <h1
            className="
              m-0
              flex
              flex-col
              items-end
              text-right
              font-black
              uppercase
              tracking-[-0.045em]
              text-foreground
              select-none
            "
          >

            {/* BUILD */}
            <span
              className="
                block
                text-[clamp(3.8rem,5.2vw,5.9rem)]
                leading-[0.9]
              "
            >
              {overlayText.part1}
            </span>

            {/* INTELLIGENT */}
            <span
              className="
                block
                text-[clamp(3.4rem,4.65vw,5.3rem)]
                leading-[0.92]
              "
            >
              {overlayText.part2}
            </span>

            {/* SOLUTIONS */}
            <span
              className="
                block
                text-[clamp(3.4rem,4.65vw,5.3rem)]
                leading-[0.92]
              "
            >
              {overlayText.part3}
            </span>

          </h1>
        </motion.div>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer
        className="
          absolute
          inset-x-0
          bottom-6
          z-[100]
          flex
          items-center
          justify-between
          px-8
          md:px-12
          lg:px-16
        "
      >
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
            delay: 1,
          }}
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-foreground/60
            font-code
          "
        >
          {footerLeft}
        </motion.div>

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
            delay: 1.1,
          }}
          className="
            text-xs
            font-semibold
            tracking-wide
            text-foreground
          "
        >
          {locationText}
        </motion.div>
      </footer>

    </section>
  );
};