import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950">

      {/* ================= Background Glow ================= */}

      <div className="absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px]" />

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================= Main Footer ================= */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">

          {/* ================= Branding ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl font-black text-white">
              DJ<span className="text-cyan-400">.dev</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              AI/ML enthusiast and software developer passionate about
              building intelligent solutions, practical applications,
              and meaningful digital experiences.
            </p>

            <p className="mt-5 text-sm font-medium text-cyan-400">
              AI/ML • Software Development • Computer Science
            </p>

          </motion.div>

          {/* ================= Quick Links ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">

              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Experience", "experience"],
                ["Certificates", "certificates"],
                ["Contact", "contact"],
              ].map(([label, id]) => (

                <a
                  key={id}
                  href={`#${id}`}
                  className="
                    w-fit
                    text-slate-400
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-cyan-400
                  "
                >
                  {label}
                </a>

              ))}

            </div>

          </motion.div>

          {/* ================= Connect ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <h3 className="text-xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Interested in working together or discussing an
              opportunity? Feel free to reach out.
            </p>

            {/* Social Buttons */}

            <div className="mt-6 flex gap-4">

              {/* GitHub */}

              <SocialButton
                href="https://github.com/Dibyar21"
                icon={<FaGithub />}
              />

              {/* LinkedIn */}

              <SocialButton
                href="https://www.linkedin.com/in/dibyaranjan-jena-1761a2294/"
                icon={<FaLinkedin />}
              />

              {/* WhatsApp */}

              <SocialButton
                href="https://wa.me/918144861069?text=Hi%20Dibyaranjan,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                icon={<FaWhatsapp />}
                color="green"
              />

              {/* Email */}

              <SocialButton
                href="mailto:dibyaranjan5890@gmail.com"
                icon={<FaEnvelope />}
              />

            </div>

          </motion.div>

        </div>

        {/* ================= Divider ================= */}

        <div className="border-t border-white/10" />

        {/* ================= Bottom Bar ================= */}

        <div className="flex flex-col items-center justify-between gap-5 py-7 md:flex-row">

          <p className="text-center text-sm text-slate-500 md:text-left">
            © {currentYear}{" "}
            <span className="font-medium text-slate-300">
              Dibyaranjan Jena
            </span>
            . All rights reserved.
          </p>

          <p className="text-center text-sm text-slate-500">
            Built with{" "}
            <span className="text-cyan-400">
              React
            </span>
            {" • "}
            <span className="text-cyan-400">
              Tailwind CSS
            </span>
            {" • "}
            <span className="text-cyan-400">
              Framer Motion
            </span>
          </p>

          {/* Back To Top */}

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-cyan-400
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500
              hover:text-white
              hover:shadow-lg
              hover:shadow-cyan-500/20
            "
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}

/* ================= Social Button ================= */

function SocialButton({
  href,
  icon,
  color = "cyan",
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-lg
        text-white
        transition-all
        duration-300
        ${
          color === "green"
            ? "hover:border-green-400 hover:bg-green-500"
            : "hover:border-cyan-400 hover:bg-cyan-500"
        }
      `}
    >
      {icon}
    </motion.a>
  );
}

export default Footer;