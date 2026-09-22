import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

import experienceData from "../../constants/experienceData";

function Experience() {
  return (
    <section
      id="experience"
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
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-white">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            Practical industry experience gained through internships,
            real-world software development, and AI/ML projects.
          </p>
        </motion.div>

        {/* ================= Timeline ================= */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-5 md:left-1/2 top-0 h-full w-[4px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full" />

          {experienceData.map((item, index) => {

            const Icon = item.icon;

            const left = index % 2 === 0;

            return (

              <motion.div
                key={item.id}
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
                  relative
                  mb-16
                  flex
                  w-full
                  ${
                    left
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                  justify-end
                `}
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-5
                    md:left-1/2
                    top-14
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-slate-900
                    bg-cyan-400
                    shadow-lg
                    shadow-cyan-500/70
                    animate-pulse
                    z-20
                  "
                />

                {/* Experience Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale:1.015,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="
                    group
                    relative
                    ml-16
                    md:ml-0
                    w-full
                    md:w-[46%]
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    min-h-[700px]
                    p-8 
                    lg:p-10
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400
                    hover:shadow-2xl
                    hover:shadow-cyan-500/20
                "
                >

                  {/* Top Row */}

                  <div className="flex items-center justify-between flex-wrap gap-4">

                    <div className="flex items-center gap-4">

                      <div
                        className={`
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-slate-800
                          text-3xl
                          ${item.color}
                        `}
                      >
                        <Icon />
                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white">
                          {item.role}
                        </h3>

                        <p className="mt-2 text-cyan-400 font-semibold text-xl font-bold tracking-wide">
                          {item.company}
                        </p>

                      </div>

                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300">
                      {item.type}
                    </span>

                  </div>

                  {/* Location + Duration */}

                  <div className="mt-6 flex flex-wrap gap-6 text-slate-400">

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span>{item.location}</span>
                    </div>

                  </div>

                  {/* Description */}

                  <p className="mt-6 max-w-[95%] leading-9 text-lg text-slate-400">
                    {item.description}
                  </p>

                  {/* ================= Achievements ================= */}

                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-semibold text-white">
                      Achievements
                    </h4>

                    <ul className="space-y-4">

                      {item.achievements.map((achievement, i) => (

                        <li
                          key={i}
                          className="flex items-start gap-4 text-slate-300 leading-7"
                        >

                          <FaCheckCircle className="mt-1 text-cyan-400 shrink-0" />

                          <span>{achievement}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* ================= Technologies ================= */}

                  <div className="mt-8">

                    <h4 className="mb-4 text-lg font-semibold text-white">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {item.tech.map((tech) => (

                        <motion.span
                          key={tech}
                          whileHover={{
                            y: -3,
                            scale: 1.05,
                          }}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-slate-800/70
                            px-5
                            py-2.5
                            text-sm
                            font-medium
                            text-slate-300
                            transition-all
                            duration-300
                            hover:border-cyan-400
                            hover:text-cyan-300
                          "
                        >
                          {tech}
                        </motion.span>

                      ))}

                    </div>

                  </div>

                  {/* Bottom Accent */}

                  <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

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

export default Experience;