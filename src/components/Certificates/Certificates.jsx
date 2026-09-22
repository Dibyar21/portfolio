import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import certificatesData from "../../constants/certificatesData";

function Certificates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 420;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />

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

      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <p className="uppercase tracking-[7px] text-cyan-400 font-semibold">
            CONTINUOUS LEARNING
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-white">
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            Certifications and internships that demonstrate my commitment
            to continuous learning and professional development.
          </p>
        </motion.div>

        {/* ================= Navigation Buttons ================= */}

        <div className="mt-16 flex justify-end gap-4 px-6">

          <button
            onClick={() => scroll("left")}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500
            "
          >
            <FaChevronRight />
          </button>

        </div>

        {/* ================= Horizontal Scroll ================= */}

        <div
          ref={scrollRef}
          className="
            mt-10
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            px-6
            pb-6
            scrollbar-hide
          "
        >
        
        {certificatesData.map((certificate) => (

      <motion.div
        key={certificate.id}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="
          min-w-[390px]
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          overflow-hidden
          snap-center
          "
      >
      
      <a
        href={certificate.file || certificate.image}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </a>
      

      <div className="p-6">

        <span className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1 text-sm text-cyan-300">
          {certificate.type}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-white">
          {certificate.title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {certificate.issuer}
        </p>

        <p className="mt-1 text-slate-400">
          {certificate.year}
        </p>

        <p className="mt-5 text-slate-400 leading-7">
          {certificate.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {certificate.skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </motion.div>

  ))}
</div>

      </div>

      {/* ================= Bottom Divider ================= */}

      <div className="mt-24 border-b border-slate-800"></div>

    </section>
  );
}

export default Certificates;