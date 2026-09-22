import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
            I'm always open to discussing internships, full-time opportunities,
            collaborations, or exciting AI/ML and software development projects.
          </p>
        </motion.div>

        {/* ================= Main Layout ================= */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* ================= Left Card ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 min-h-[600px]"
          >

            <h3 className="text-3xl font-black text-white">
              Let's Talk 👋
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Whether you have an internship opportunity, a project idea,
              or just want to connect, I'd be happy to hear from you.
              Feel free to reach out anytime.
            </p>

            {/* ================= Contact Info ================= */}

            <div className="mt-10 space-y-6">

              <InfoCard
                icon={<FaEnvelope />}
                title="Email"
                value="dibyaranjan5890@gmail.com"
              />

              <InfoCard
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 81448 61069"
              />

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Bhubaneswar, Odisha, India"
              />

            </div>

            {/* ================= Social Links ================= */}

            <div className="mt-12">

              <h4 className="text-xl font-semibold text-white">
                Connect with me
              </h4>

              <div className="mt-5 flex gap-4">

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
                  href="https://wa.me/918144861069?text=Hi%20Dibyaranjan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20projects.%20I'd%20like%20to%20discuss%20an%20opportunity%20with%20you."
                  icon={<FaWhatsapp />}
                  color="green"
                />

              </div>

            </div>

            {/* ================= Resume ================= */}

            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="/resume.pdf"
              download
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-500
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/30
              "
            >
              <FaDownload />
              Download Resume
            </motion.a>

          </motion.div>

          {/* ================= Right Card ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 min-h-[600px]"
          >

            <h3 className="text-3xl font-black text-white">
              Send Me a Message
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Have a project, internship opportunity, or collaboration in mind?
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            {/* ================= Contact Form ================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/60
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-500
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/60
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-500
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Subject */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Internship Opportunity"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/60
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-500
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/60
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-500
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* ================= Status Messages ================= */}

              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-center text-green-400"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {formStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-red-400"
                >
                  ✕ Something went wrong. Please try again.
                </motion.p>
              )}

              {/* ================= Send Button ================= */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                disabled={formStatus === "sending"}
                className="
                  w-full
                  rounded-xl
                  bg-cyan-500
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:shadow-xl
                  hover:shadow-cyan-500/30
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : "🚀 Send Message"}
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

      {/* ================= Bottom Divider ================= */}

      <div className="mt-24 border-b border-slate-800"></div>

    </section>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({ icon, title, value }) {
  return (
    <div
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-white/10
        bg-slate-800/40
        p-4
        transition-all
        duration-300
        hover:border-cyan-400/50
      "
    >

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-cyan-500/10
          text-xl
          text-cyan-400
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-medium text-white">
          {value}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

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
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-xl
        text-white
        transition-all
        duration-300
        ${
          color === "green"
            ? "hover:bg-green-500 hover:border-green-400"
            : "hover:bg-cyan-500 hover:border-cyan-400"
        }
      `}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;