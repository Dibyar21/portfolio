import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import projectsData from "../../constants/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

      {/* ================= Grid Pattern ================= */}

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
          <p className="uppercase tracking-[7px] text-cyan-400 font-semibold">
            SELECTED PROJECTS
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            A showcase of projects spanning Artificial Intelligence, Machine Learning, Web Development, and 
            Desktop Applications, demonstrating my passion for building practical and impactful software.
          </p>
        </motion.div>

        {/* ================= Projects ================= */}

        <div className="mt-20 space-y-28">

          {projectsData.map((project, index) => {

            const reverse = index % 2 !== 0;

            return (

            <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                }}
                className={`
                  grid
                  lg:grid-cols-2
                  gap-12
                  items-center
                  ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >

                {/* ================= IMAGE ================= */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale:1.02,
                    rotate:0.5,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="group relative"
                >

                {/* Glow */}

                <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500" />

                {/* Card */}

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-500/10">

                  {/* Browser Header */}

                    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800 px-5 py-3">
                        <span className="h-3 w-3 rounded-full bg-red-400"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="h-3 w-3 rounded-full bg-green-400"></span>
                    </div>
                    
                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            h-[380px] 
                            lg:h-[420px]
                            w-full
                            object-cover
                            object-top
                            transition-all
                            duration-700
                            group-hover:scale-110
                            "
                    />

                </div>

                </motion.div>

                {/* ================= CONTENT ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .8,
                  }}
                >

                {/* Top Row */}

                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1 text-sm font-semibold text-cyan-300">
                      {project.category}
                    </span>

                    <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm text-slate-300">
                      {project.year}
                    </span>

                    {project.featured && (
                      <span className="rounded-full bg-yellow-500/10 border border-yellow-400/20 px-4 py-1 text-sm font-semibold text-yellow-300">
                        ⭐ Featured
                      </span>
                    )}

                    <span
                      className={`
                        rounded-full
                        px-4
                        py-1
                        text-sm
                        font-semibold

                        ${
                          project.statusColor === "green"
                            ? "bg-green-500/10 text-green-400 border border-green-400/20"
                            : "bg-yellow-500/10 text-yellow-300 border border-yellow-300/20"
                        }
                      `}
                    >
                      {project.status}
                    </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                    <h3 className="text-3xl lg:text-4xl font-black text-white">
                        {project.title}
                    </h3>

                    <span className="text-4xl font-black text-cyan-500/20">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <p className="mt-6 text-base lg:text-lg leading-8 text-slate-400">
                    {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: techIndex * 0.06,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                        }}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-slate-800/60
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-slate-300
                          transition-all
                          duration-300
                          hover:bg-cyan-500/10
                          hover:border-cyan-400
                          hover:text-cyan-300
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}

                </div>
                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-4">

                    <ProjectButton
                      href={project.github}
                      icon={<FaGithub />}
                      text="GitHub"
                    />

                    <ProjectButton
                      href={project.live}
                      icon={<FaExternalLinkAlt />}
                      text="Live Demo"
                    />

                </div>
                </motion.div>
            </motion.div>

            );

          })}

        </div>

      </div>

      {/* Bottom Divider */}

      <div className="mt-24 border-b border-slate-800"></div>

    </section>
  );
}

/* =======================================================
   Reusable Button Component
======================================================= */

function ProjectButton({ href, icon, text }) {

const disabled = !href;

if (disabled) {

    return (

      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-700
          bg-slate-800/40
          px-6
          py-3
          cursor-not-allowed
          text-slate-500
          font-medium
          select-none
        "
      >

        {icon}

        <div className="flex flex-col leading-none">
            <span className="text-slate-300">{text}</span>
            <span className="text-xs text-slate-500">Coming Soon</span>
        </div>

      </div>

    );

  }

  return (

    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: .96,
      }}
      className="
        flex
        items-center
        gap-3
        rounded-full
        bg-cyan-500
        px-6
        py-3
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

      {icon}

      <span>{text}</span>

    </motion.a>

  );

}

export default Projects;