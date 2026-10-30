import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import projectsData from "../../constants/projectsData";

function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]"
      />

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
            Selected Projects
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            A showcase of projects spanning Artificial Intelligence, Machine
            Learning, Web Development, and Desktop Applications, demonstrating
            my passion for building practical and impactful software.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20 lg:mt-20 lg:space-y-28">
          {projectsData.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: reduceMotion ? 0 : 0.6 }}
                className={`grid min-w-0 grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Project image */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.01,
                        }
                  }
                  transition={{ duration: 0.25 }}
                  className="group relative min-w-0"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 rounded-3xl bg-cyan-500/20 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  />

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-cyan-500/10 sm:rounded-3xl">
                    {/* Browser-style header */}
                    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800 px-4 py-3 sm:px-5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                      <span className="ml-2 truncate text-xs text-slate-400">
                        {project.title}
                      </span>
                    </div>

                    <div className="relative h-52 overflow-hidden sm:h-72 lg:h-[380px] xl:h-[420px]">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover object-top ${
                          reduceMotion
                            ? ""
                            : "transition-transform duration-700 group-hover:scale-105"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Project details */}
                <div className="min-w-0">
                  {/* Project badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="max-w-full break-words rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 sm:text-sm">
                      {project.category}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:text-sm">
                      {project.year}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300 sm:text-sm">
                        ⭐ Featured
                      </span>
                    )}

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold sm:text-sm ${
                        project.statusColor === "green"
                          ? "border-green-400/20 bg-green-500/10 text-green-400"
                          : "border-yellow-300/20 bg-yellow-500/10 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title and project number */}
                  <div className="mt-4 flex min-w-0 items-start justify-between gap-3 sm:mt-6 sm:gap-4">
                    <h3 className="min-w-0 break-words text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-1 text-2xl font-black text-cyan-500/25 sm:text-4xl"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 break-words text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                    {project.description}
                  </p>

                  {/* Technology stack */}
                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={
                          reduceMotion ? false : { opacity: 0, y: 8 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                          delay: reduceMotion ? 0 : techIndex * 0.04,
                        }}
                        className="max-w-full break-words rounded-full border border-white/10 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                    <ProjectButton
                      href={project.github}
                      icon={<FaGithub aria-hidden="true" />}
                      text="GitHub"
                      reduceMotion={reduceMotion}
                    />

                    <ProjectButton
                      href={project.live}
                      icon={<FaExternalLinkAlt aria-hidden="true" />}
                      text="Live Demo"
                      reduceMotion={reduceMotion}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-16 border-b border-slate-800 sm:mt-20 lg:mt-24" />
    </section>
  );
}

function ProjectButton({ href, icon, text, reduceMotion }) {
  const buttonClasses =
    "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-4 py-3 text-sm font-semibold transition-colors duration-300 sm:gap-3 sm:px-6 sm:text-base";

  if (!href) {
    return (
      <div
        aria-disabled="true"
        className={`${buttonClasses} cursor-not-allowed border border-slate-700 bg-slate-800/40 text-slate-400`}
      >
        {icon}

        <span className="flex min-w-0 flex-col items-start leading-tight">
          <span>{text}</span>
          <span className="mt-1 text-[10px] font-normal text-slate-500 sm:text-xs">
            Coming Soon
          </span>
        </span>
      </div>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} for this project (opens in a new tab)`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`${buttonClasses} bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-400/30`}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  );
}

export default Projects;