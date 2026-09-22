import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaRocket,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
    >
      {/* ================= Background ================= */}

      <div className="absolute -left-44 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-5xl lg:text-6xl font-black text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-8">
            Passionate about creating scalable web applications,
            AI-powered solutions and beautiful user experiences.
          </p>
        </motion.div>

        {/* ================= Main Grid ================= */}

        <div className="mt-20 lg:mt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative w-full max-w-sm">

              <div className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 shadow-2xl shadow-cyan-500/20">

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center"
                >
                  <FaLaptopCode
                    size={110}
                    className="text-cyan-400"
                  />
                </motion.div>

                <div className="grid grid-cols-4 gap-6 mt-12 text-[42px]">

                  <FaReact
                    className="text-cyan-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <FaNodeJs
                    className="text-green-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <SiMongodb
                    className="text-green-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <SiJavascript
                    className="text-yellow-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <SiTailwindcss
                    className="text-sky-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <FaPython
                    className="text-blue-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <FaGitAlt
                    className="text-orange-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                  <FaRocket
                    className="text-pink-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  />

                </div>

                <p className="mt-10 text-center text-slate-400 leading-7">
                  Always exploring modern technologies and building
                  impactful software with clean architecture,
                  intuitive UI, and meaningful user experiences.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-4xl lg:text-5xl font-black text-white">
              Who <span className="text-cyan-400">I Am</span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              I'm{" "}
              <span className="font-semibold text-cyan-400">
                Dibyaranjan Jena
              </span>
              , a passionate{" "}
              <span className="font-semibold text-white">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">
                AI/ML Enthusiast
              </span>{" "}
              pursuing my Bachelor's in Computer Science.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400">
              I enjoy building scalable web applications,
              solving real-world problems, learning emerging
              technologies, and designing products that deliver
              exceptional user experiences.
            </p>

            <div className="w-20 h-1 rounded-full bg-cyan-400 mt-10 mb-10"></div>

            <div className="grid sm:grid-cols-2 gap-6">

              <InfoCard
                icon={<FaGraduationCap />}
                title="Education"
                text="B.Tech CSE (2023–2027)"
              />

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                text="Bhubaneswar, Odisha"
              />

              <InfoCard
                icon={<FaLaptopCode />}
                title="Experience"
                text="OCAC • CTTC Bhubaneswar"
              />

              <InfoCard
                icon={<FaRocket />}
                title="Focus"
                text="MERN • AI/ML • UI/UX"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ================= Info Card ================= */

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        h-full
        rounded-2xl
        p-6
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        hover:border-cyan-400
        hover:bg-white/[0.08]
        hover:shadow-xl
        hover:shadow-cyan-500/20
        transition-all
        duration-300
      "
    >
      {/* Icon */}

      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
        <div className="text-2xl">{icon}</div>
      </div>

      {/* Title */}

      <h4 className="text-lg font-semibold text-white">
        {title}
      </h4>

      {/* Description */}

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>
    </motion.div>
  );
}

export default About;