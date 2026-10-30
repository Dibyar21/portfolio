import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import certificatesData from "../../constants/certificatesData";

function Certificates() {
  const scrollRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector("[data-certificate-card]");

    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : container.clientWidth * 0.85;

    const gap = 16;

    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="certificates"
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

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto max-w-3xl px-4 text-center sm:px-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
            Continuous Learning
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Certifications and internships that demonstrate my commitment
            to continuous learning and professional development.
          </p>
        </motion.div>

        {/* Navigation controls */}
        <div className="mt-8 flex justify-end gap-3 px-4 sm:mt-12 sm:gap-4 sm:px-6">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll to previous certificates"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:h-12 sm:w-12"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll to next certificates"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:h-12 sm:w-12"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        {/* Horizontal certificate carousel */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Certificates carousel"
          tabIndex={0}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 sm:mt-8 sm:gap-6 sm:px-6"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#155e75 transparent",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {certificatesData.map((certificate) => (
            <motion.article
              key={certificate.id}
              data-certificate-card
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
              whileHover={
                reduceMotion ? undefined : { y: -5 }
              }
              className="group w-[85vw] max-w-[390px] min-w-0 shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 sm:w-[340px] sm:rounded-3xl lg:w-[360px]"
            >
              {/* Certificate preview */}
              <a
                href={certificate.file || certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open certificate: ${certificate.title} (opens in a new tab)`}
                className="block overflow-hidden bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
              >
                <div className="h-44 overflow-hidden sm:h-52 lg:h-56">
                  <img
                    src={certificate.image}
                    alt={`Preview of ${certificate.title}`}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover object-top ${
                      reduceMotion
                        ? ""
                        : "transition-transform duration-500 sm:group-hover:scale-105"
                    }`}
                  />
                </div>
              </a>

              {/* Certificate details */}
              <div className="p-4 sm:p-5 lg:p-6">
                <span className="inline-block max-w-full break-words rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 sm:text-sm">
                  {certificate.type}
                </span>

                <h3 className="mt-4 break-words text-lg font-bold leading-snug text-white sm:text-xl">
                  {certificate.title}
                </h3>

                <p className="mt-2 break-words text-sm font-medium text-cyan-400 sm:text-base">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {certificate.year}
                </p>

                <p className="mt-4 break-words text-sm leading-6 text-slate-400 sm:mt-5 sm:leading-7">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="max-w-full break-words rounded-full border border-white/5 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Explicit certificate link */}
                <a
                  href={certificate.file || certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  View Certificate
                  <FaChevronRight
                    aria-hidden="true"
                    className="text-xs"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-12 border-b border-slate-800 sm:mt-20 lg:mt-24" />
    </section>
  );
}

export default Certificates;