
import { motion, useReducedMotion } from "framer-motion";
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

const technologies = [
  { Icon: FaReact, color: "text-cyan-400", label: "React" },
  { Icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
  { Icon: SiMongodb, color: "text-green-400", label: "MongoDB" },
  { Icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
  { Icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind CSS" },
  { Icon: FaPython, color: "text-blue-400", label: "Python" },
  { Icon: FaGitAlt, color: "text-orange-500", label: "Git" },
  { Icon: FaRocket, color: "text-pink-400", label: "Innovation" },
];

function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (direction = 0) => ({
    initial: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          x: direction,
          y: direction === 0 ? 20 : 0,
        },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.65 },
  });

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-14 sm:py-20 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]"
      />

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          {...reveal()}
          className="mx-auto w-full max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 min-[380px]:tracking-[0.25em] sm:text-sm sm:tracking-[0.35em]">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-[clamp(1.9rem,8vw,3rem)] font-black leading-tight tracking-tight text-white lg:text-6xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 w-full max-w-2xl px-1 text-sm leading-6 text-slate-400 sm:mt-5 sm:px-2 sm:text-lg sm:leading-8">
            Passionate about creating scalable web applications,
            AI-powered solutions and beautiful user experiences.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-9 sm:mt-10 sm:gap-12 lg:mt-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Technology card */}
          <motion.div
            {...reveal(-40)}
            className="flex min-w-0 justify-center"
          >
            <div className="relative w-full max-w-sm lg:min-h-[620px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-[32px] bg-cyan-500/20 blur-3xl"
              />

              <div className="relative flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:rounded-[32px] sm:p-7 md:p-9 lg:min-h-[620px]">
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center py-1 sm:py-3"
                >
                  <FaLaptopCode
                    aria-hidden="true"
                    className="text-6xl text-cyan-400 sm:text-8xl"
                  />
                </motion.div>

                <div className="mt-7 grid grid-cols-4 gap-x-3 gap-y-5 sm:mt-10 sm:gap-x-5 sm:gap-y-6">
                  {technologies.map(({ Icon, color, label }) => (
                    <div
                      key={label}
                      title={label}
                      className="flex min-w-0 justify-center"
                    >
                      <Icon
                        aria-label={label}
                        role="img"
                        className={`text-3xl transition-transform duration-300 hover:-translate-y-1 hover:scale-110 sm:text-4xl ${color}`}
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-center text-sm leading-6 text-slate-400 sm:mt-10 sm:text-base sm:leading-7">
                  Always exploring modern technologies and building
                  impactful software with clean architecture,
                  intuitive UI, and meaningful user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* About details */}
          <motion.div
            {...reveal(40)}
            className="min-w-0"
          >
            <h3 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Who <span className="text-cyan-400">I Am</span>
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-9">
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

            <p className="mt-4 text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-9">
              I enjoy building scalable web applications, solving
              real-world problems, learning emerging technologies,
              and designing products that deliver exceptional user
              experiences.
            </p>

            {/* Info cards */}
            <div className="mt-7 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-10 sm:gap-5">
              <InfoCard
                icon={<FaGraduationCap />}
                title="Education"
                text="B.Tech CSE (2023–2027)"
                reduceMotion={reduceMotion}
              />

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                text="Bhubaneswar, Odisha"
                reduceMotion={reduceMotion}
              />

              <InfoCard
                icon={<FaLaptopCode />}
                title="Experience"
                text="OCAC • CTTC Bhubaneswar"
                reduceMotion={reduceMotion}
              />

              <InfoCard
                icon={<FaRocket />}
                title="Focus"
                text="MERN • AI/ML • UI/UX"
                reduceMotion={reduceMotion}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text, reduceMotion }) {
  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25 }}
      className="group h-full min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-cyan-500/10 sm:p-4"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
        <span className="text-2xl">{icon}</span>
      </div>

      <h4 className="break-words text-base font-semibold text-white">
        {title}
      </h4>

      <p className="mt-1.5 break-words text-sm leading-5 text-slate-400">
        {text}
      </p>
    </motion.div>
  );
}

export default About;
