import { motion, useReducedMotion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import experienceData from "../../constants/experienceData";

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]"
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
            Professional Journey
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Practical industry experience gained through internships,
            real-world software development, and AI/ML projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[11px] top-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 sm:left-[15px] lg:left-1/2 lg:w-1 lg:-translate-x-1/2"
          />

          {experienceData.map((item, index) => {
            const Icon = item.icon;
            const left = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: reduceMotion ? 0 : 0.55 }}
                className={`relative mb-10 flex w-full min-w-0 last:mb-0 sm:mb-14 lg:mb-16 ${left ? "lg:justify-start" : "lg:justify-end"
                  }`}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className={`absolute left-[11px] top-8 z-20 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-slate-900 bg-cyan-400 shadow-lg shadow-cyan-500/50 sm:left-[15px] lg:left-1/2 lg:top-10 ${reduceMotion ? "" : "animate-pulse"
                    }`}
                />

                {/* Experience card */}
                <motion.article
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5 }
                  }
                  transition={{ duration: 0.25 }}
                  className={`group relative ml-8 min-w-0 w-[calc(100%-2rem)] rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 sm:ml-10 sm:rounded-3xl sm:p-6 lg:ml-0 lg:w-[46%] lg:p-8 ${reduceMotion ? "" : "lg:hover:-translate-y-1"
                    }`}
                >
                  {/* Role, company and type */}
                  <div className="flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl ${item.color}`}
                      >
                        <Icon aria-hidden="true" />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <h3 className="break-words text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                          {item.role}
                        </h3>

                        <p className="mt-1.5 break-words text-base font-semibold leading-snug tracking-wide text-cyan-400 sm:text-lg">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <span className="max-w-full break-words rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 sm:shrink-0 sm:text-sm">
                      {item.type}
                    </span>
                  </div>

                  {/* Duration and location */}
                  <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
                    <div className="flex min-w-0 items-start gap-2">
                      <FaCalendarAlt className="mt-1 shrink-0 text-cyan-400" />
                      <span className="break-words">{item.duration}</span>
                    </div>

                    <div className="flex min-w-0 items-start gap-2">
                      <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />
                      <span className="break-words">{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 break-words text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-6 sm:mt-8">
                    <h4 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                      Achievements
                    </h4>

                    <ul className="space-y-3 sm:space-y-4">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={`${item.id}-achievement-${i}`}
                          className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-300 sm:gap-4 sm:text-base sm:leading-7"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                          <span className="min-w-0 break-words">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 sm:mt-8">
                    <h4 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {item.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : { y: -2 }
                          }
                          className="max-w-full break-words rounded-full border border-white/10 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-5 right-5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:right-6"
                  />
                </motion.article>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-16 border-b border-slate-800 sm:mt-20 lg:mt-24" />
    </section>
  );
}

export default Experience;