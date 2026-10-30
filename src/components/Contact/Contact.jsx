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
  FaInstagram,
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
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[130px]"
      />

      {/* Grid Pattern */}
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            I'm always open to discussing internships, full-time opportunities,
            collaborations, or exciting AI/ML and software development projects.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-14 sm:gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-8"
          >
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Let's Talk 👋
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
              Whether you have an internship opportunity, a project idea,
              or just want to connect, I'd be happy to hear from you.
              Feel free to reach out anytime.
            </p>

            {/* Contact Info */}
            <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-6">
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

            {/* Social Links */}
            <div className="mt-9 sm:mt-12">
              <h4 className="text-lg font-semibold text-white sm:text-xl">
                Connect with me
              </h4>

              <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
                {/* GitHub */}
                <SocialButton
                  href="https://github.com/Dibyar21"
                  label="GitHub"
                  icon={<FaGithub />}
                />

                {/* LinkedIn */}
                <SocialButton
                  href="https://www.linkedin.com/in/dibyaranjan-jena-1761a2294/"
                  label="LinkedIn"
                  icon={<FaLinkedin />}
                />

                {/* Instagram */}
                <SocialButton
                  href="https://www.instagram.com/x_dibya.r.__05/"
                  label="Instagram"
                  icon={<FaInstagram />}
                  color="instagram"
                />

                {/* WhatsApp */}
                <SocialButton
                  href="https://wa.me/918144861069?text=Hi%20Dibyaranjan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20projects.%20I'd%20like%20to%20discuss%20an%20opportunity%20with%20you."
                  label="WhatsApp"
                  icon={<FaWhatsapp />}
                  color="green"
                />
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download
              className="mt-9 inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:mt-12 sm:px-7 sm:py-4 sm:text-base"
            >
              <FaDownload aria-hidden="true" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-8"
          >
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Send Me a Message
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Have a project, internship opportunity, or collaboration in mind?
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 sm:px-5 sm:py-4"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 sm:px-5 sm:py-4"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Internship Opportunity"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 sm:px-5 sm:py-4"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 sm:px-5 sm:py-4"
                />
              </div>

              {/* Status Messages */}
              {formStatus === "success" && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400 sm:text-base"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {formStatus === "error" && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400 sm:text-base"
                >
                  ✕ Something went wrong. Please try again.
                </motion.p>
              )}

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full rounded-xl bg-cyan-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : "🚀 Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-12 border-b border-slate-800 sm:mt-20 lg:mt-24" />
    </section>
  );
}

/* Info Card */
function InfoCard({ icon, title, value }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/40 p-3 transition-all duration-300 hover:border-cyan-400/50 sm:gap-5 sm:p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-lg text-cyan-400 sm:h-12 sm:w-12 sm:text-xl">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="break-words text-sm font-medium text-white sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );
}

/* Social Button */
function SocialButton({ href, icon, label, color = "cyan" }) {
  const hoverColor =
    color === "green"
      ? "hover:bg-green-500 hover:border-green-400"
      : color === "instagram"
        ? "hover:bg-pink-500 hover:border-pink-400"
        : "hover:bg-cyan-500 hover:border-cyan-400";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${label} profile (opens in a new tab)`}
      title={label}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:h-14 sm:w-14 ${hoverColor}`}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;