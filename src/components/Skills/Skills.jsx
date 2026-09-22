import { motion } from "framer-motion";
import skillsData from "../../constants/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Grid Pattern */}

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

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            TECHNOLOGIES I USE
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-white">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-base leading-7 text-slate-400">
            A collection of technologies, frameworks, and tools I use to build scalable web applications,
            AI-powered solutions, and intuitive digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">

          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/20"            >

              {/* Category Title */}

              <h3 className="mb-8 text-3xl font-extrabold tracking-wide text-white">
                {category.title}
              </h3>

              {/* Skills */}

              <div className="flex-1 flex flex-col gap-3">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-4 rounded-xl border border-white/5 bg-slate-800/60 px-4 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800"
                    >
                      <motion.div
                        whileHover={{
                            rotate:8,
                            scale:1.1,
                        }}
                        transition={{duration:.25}}
                      >
                        <Icon className={`text-2xl ${skill.color}`} />
                      </motion.div>

                      <span className="text-base font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}

              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                    {category.footer}
                </p>
              </div>

              {/* Bottom Accent Line */}

              <div
                className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
              />

            </motion.div>
          ))}

        </div>

      </div>
      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}

export default Skills;