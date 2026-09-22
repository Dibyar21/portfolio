import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  HiOutlineMail,
} from "react-icons/hi";

import {
  HiArrowDownTray,
} from "react-icons/hi2";

import heroData from "../../constants/heroData";
import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-slate-950 flex items-center relative overflow-hidden"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute w-[600px] h-[600px] bg-cyan-500/15 blur-[160px] rounded-full -top-32 -left-32"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-600/15 blur-[170px] rounded-full bottom-0 right-0"></div>

      <div className="absolute w-[350px] h-[350px] bg-sky-400/10 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>
      
      {/* ================= Container ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center lg:pt-6">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95]">
            
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-white bg-clip-text text-transparent">
              {heroData.name}
            </span>

          </h1>

          {/* ================= Typing ================= */}

          <div className="mt-6 text-3xl font-semibold text-white h-12 cursor={true}">

            <TypeAnimation
              sequence={[
                ...heroData.titles.flatMap((title) => [title, 1800]),
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* ================= Description ================= */}

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            {heroData.description}
          </p>

          {/* ================= Buttons ================= */}

          <div className="flex flex-wrap gap-6 mt-10">

            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide"
            >
              <HiOutlineMail className="text-xl" />
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105 active:scale-95 transition-all duration-300 font-bold tracking-wide"
            >
              <HiArrowDownTray className="text-xl" />
              Download Resume
            </a>

          </div>

          {/* ================= Social Icons ================= */}

          <div className="flex gap-8 mt-12 text-3xl">

            <a
              href={heroData.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300 hover:bg-cyan-500/20 p-3 rounded-full hover:rotate-6"
            >
              <FaGithub />
            </a>

            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300 hover:bg-cyan-500/20 p-3 rounded-full"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${heroData.email}`}
              className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300 hover:bg-cyan-500/20 p-3 rounded-full"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative"
          >

            {/* Glow Behind */}

            <div className="absolute inset-0 rounded-[3rem] bg-cyan-500 blur-[100px] opacity-20"></div>

            {/* Rotating Gradient Ring */}

            <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70 blur-sm animate-spin-slow"></div>

            {/* Glass Card */}

            <motion.div
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
              }}
              className="relative rounded-[3rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500"
            >

              <img
                src={profile}
                alt="Profile"
                className="w-[320px] sm:w-[360px] lg:w-[420px] rounded-[2.5rem] object-cover pt-6 hover:scale-[1.02] transition-all duration-500 select-none"
              />

            </motion.div>

            {/* Availability Badge */}

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 text-sm text-cyan-300 shadow-lg shadow-cyan-500/20 whitespace-nowrap font-medium">
              🟢 Available for Internship
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= Scroll Indicator ================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-sm"
      >
        ↓ Scroll Down
      </motion.div>

    </section>
  );
}

export default Hero;