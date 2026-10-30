
import { motion, useReducedMotion } from "framer-motion";
import skillsData from "../../constants/skillsData";

function Skills() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.6 },
  };

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-14 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:-left-40 sm:-top-32 sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[130px]"
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          {...reveal}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 min-[380px]:tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
            Technologies I Use
          </p>

          <h2 className="mt-3 text-[clamp(1.9rem,7vw,3rem)] font-black leading-tight tracking-tight text-white lg:text-5xl">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl px-1 text-sm leading-6 text-slate-400 sm:mt-6 sm:px-2 sm:text-base sm:leading-8 lg:text-lg">
            A collection of technologies, frameworks, and tools I use
            to build scalable web applications, AI-powered solutions,
            and intuitive digital experiences.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="mt-9 grid min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10 sm:rounded-3xl sm:p-5 lg:p-6"
            >
              {/* Category title */}
              <h3 className="mb-5 break-words text-xl font-extrabold tracking-wide text-white sm:mb-6 sm:text-2xl lg:mb-8 lg:text-3xl">
                {category.title}
              </h3>

              {/* Individual skills */}
              <div className="flex flex-1 flex-col gap-2.5 sm:gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { x: 4 }
                      }
                      transition={{ duration: 0.2 }}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-slate-800/60 px-3 py-3 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-slate-800 sm:gap-4 sm:px-4"
                    >
                      <span className="flex shrink-0 items-center justify-center">
                        <Icon
                          aria-hidden="true"
                          className={`text-xl sm:text-2xl ${skill.color}`}
                        />
                      </span>

                      <span className="min-w-0 break-words text-sm font-medium leading-6 text-slate-200 sm:text-base">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Category footer */}
              {category.footer && (
                <div className="mt-5 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                  <p className="break-words text-xs leading-6 text-slate-500 sm:text-sm">
                    {category.footer}
                  </p>
                </div>
              )}

              {/* Bottom accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-5 right-5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:right-6"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div
        aria-hidden="true"
        className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent sm:mt-20"
      />
    </section>
  );
}

export default Skills;