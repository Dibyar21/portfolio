
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowDownTray } from "react-icons/hi2";

import heroData from "../../constants/heroData";
import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-slate-950 px-0 pb-20 pt-24 sm:pb-24"
    >
      {/* Background glows */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-32 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[170px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[120px]"
      />

      {/* Main container */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pt-6">
        {/* Left content */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="mb-4 text-lg text-cyan-400 sm:text-xl">
            👋 Hello, I'm
          </p>

          <h1 className="break-words text-[clamp(2.6rem,9vw,5.5rem)] font-black leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-white bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>

          {/* Typing animation */}

          <div className="mt-5 min-h-[3rem] break-words text-2xl font-semibold leading-tight text-white sm:mt-6 sm:min-h-[3.5rem] sm:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                ...heroData.titles.flatMap((title) => [title, 1800]),
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
            {heroData.description}
          </p>

          {/* Action buttons */}

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5 lg:mt-10 lg:justify-start">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold tracking-wide text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-400/50 active:scale-95 sm:px-8 sm:py-4"
            >
              <HiOutlineMail className="shrink-0 text-xl" />
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-400 px-5 py-3 font-bold tracking-wide text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/30 active:scale-95 sm:px-7 sm:py-4"
            >
              <HiArrowDownTray className="shrink-0 text-xl" />
              Download Resume
            </a>
          </div>

          {/* Social links */}

          <div className="mt-8 flex justify-center gap-5 text-2xl sm:mt-10 sm:gap-8 sm:text-3xl lg:mt-12 lg:justify-start">
            <a
              href={heroData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-cyan-500/20 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${heroData.email}`}
              aria-label="Email"
              className="rounded-full p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right profile image */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex min-w-0 justify-center px-2 pt-2 sm:px-4 lg:px-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-cyan-500 opacity-20 blur-[60px] sm:rounded-[3rem] sm:blur-[100px]"
            />

            {/* Rotating gradient ring */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70 blur-sm animate-spin-slow sm:-inset-3 sm:rounded-[3rem]"
            />

            {/* Glass card */}

            <motion.div
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.01,
              }}
              className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl transition-all duration-500 sm:rounded-[3rem] sm:p-3"
            >
              <img
                src={profile}
                alt="Portrait of Dibyaranjan Jena"
                loading="eager"
                fetchPriority="high"
                draggable="false"
                className="w-[min(76vw,320px)] max-w-full rounded-[1.5rem] object-cover pt-3 select-none sm:w-[360px] sm:rounded-[2.5rem] sm:pt-6 lg:w-[420px]"
              />
            </motion.div>

            {/* Availability badge */}

            <div className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/30 bg-slate-900/95 px-3 py-2 text-xs font-medium text-cyan-300 shadow-lg shadow-cyan-500/20 sm:-bottom-5 sm:px-4 sm:text-sm">
              🟢 Available for Internship
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-cyan-400 sm:bottom-6 sm:text-sm"
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}

export default Hero;
