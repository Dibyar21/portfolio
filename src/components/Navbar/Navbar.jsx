import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import navLinks from "../../constants/navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-slate-800/80
        bg-slate-950/85
        backdrop-blur-xl
      "
    >

      {/* ================= NAVBAR CONTAINER ================= */}

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
          lg:px-10
        "
      >

        {/* ================= LOGO ================= */}

        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-3xl
              lg:text-4xl
              font-black
              tracking-tight
            "
          >
            <span className="text-cyan-400">
              DJ
            </span>

            <span className="text-white">
              .dev
            </span>
          </motion.div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <ul
          className="
            hidden
            items-center
            gap-9
            md:flex
          "
        >

          {navLinks.map((link) => (
            <li key={link.id}>

              <Link
                to={link.id}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="
                  relative
                  cursor-pointer
                  text-base
                  font-medium
                  tracking-wide
                  text-slate-300

                  transition-all
                  duration-300

                  hover:text-cyan-400

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:rounded-full
                  after:bg-cyan-400

                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.title}
              </Link>

            </li>
          ))}

        </ul>


        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            hidden
            items-center
            gap-6
            md:flex
          "
        >

          {/* GitHub */}

          <motion.a
            href="https://github.com/Dibyar21"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{
              y: -3,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              text-2xl
              text-slate-300
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            <FaGithub />
          </motion.a>


          {/* LinkedIn */}

          <motion.a
            href="https://www.linkedin.com/in/dibyaranjan-jena-1761a2294/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{
              y: -3,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              text-2xl
              text-slate-300
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            <FaLinkedin />
          </motion.a>


          {/* Resume Button */}

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              y: -2,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              rounded-full
              bg-cyan-500

              px-7
              py-3

              text-base
              font-semibold
              text-white

              shadow-lg
              shadow-cyan-500/20

              transition-all
              duration-300

              hover:bg-cyan-400
              hover:shadow-cyan-400/40
            "
          >
            Resume
          </motion.a>

        </div>


        {/* ================= MOBILE BUTTON ================= */}

        <motion.button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{
            scale: 0.9,
          }}
          className="
            text-2xl
            text-white
            transition-colors
            duration-300
            hover:text-cyan-400
            md:hidden
          "
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </motion.button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              overflow-hidden
              border-t
              border-slate-800
              bg-slate-950/95
              backdrop-blur-xl
              md:hidden
            "
          >

            <div className="px-6 py-7">

              {/* Mobile Links */}

              <ul
                className="
                  flex
                  flex-col
                  items-center
                  gap-7
                "
              >

                {navLinks.map((link) => (

                  <li key={link.id}>

                    <Link
                      to={link.id}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      spy={true}
                      activeClass="text-cyan-400"
                      onClick={closeMenu}
                      className="
                        cursor-pointer
                        text-lg
                        font-medium
                        tracking-wide
                        text-slate-300

                        transition-colors
                        duration-300

                        hover:text-cyan-400
                      "
                    >
                      {link.title}
                    </Link>

                  </li>

                ))}


                {/* Mobile Resume */}

                <li className="pt-2">

                  <a
                    href="/resume.pdf"
                    download
                    onClick={closeMenu}
                    className="
                      inline-flex

                      rounded-full
                      bg-cyan-500

                      px-8
                      py-3

                      text-base
                      font-semibold
                      text-white

                      shadow-lg
                      shadow-cyan-500/20

                      transition-all
                      duration-300

                      hover:bg-cyan-400
                    "
                  >
                    Download Resume
                  </a>

                </li>

              </ul>


              {/* Mobile Social Links */}

              <div
                className="
                  mt-8
                  flex
                  justify-center
                  gap-7
                  border-t
                  border-slate-800
                  pt-6
                "
              >

                <a
                  href="https://github.com/Dibyar21"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    text-xl
                    text-slate-400

                    transition-all
                    duration-300

                    hover:scale-110
                    hover:text-cyan-400
                  "
                >
                  <FaGithub />
                </a>


                <a
                  href="https://www.linkedin.com/in/dibyaranjan-jena-1761a2294/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    text-xl
                    text-slate-400

                    transition-all
                    duration-300

                    hover:scale-110
                    hover:text-cyan-400
                  "
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;