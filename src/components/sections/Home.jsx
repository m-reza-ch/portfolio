import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

import { motion, useScroll, useTransform } from "framer-motion";

export const Home = ({ publicationsRef, contactRef, educationRef }) => {
  const { scrollYProgress } = useScroll();
  const bgCircleY1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const bgCircleX2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgCircleRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const bgCircleRotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background effects (unchanged) */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 bg-violet-300 dark:bg-teal-700 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ y: bgCircleY1, rotate: bgCircleRotate1 }}
      ></motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-violet-300 dark:bg-teal-700 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ x: bgCircleX2, rotate: bgCircleRotate2 }}
      ></motion.div>

      <RevealOnScroll>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 px-6 max-w-xl mx-auto text-center"
        >
          <p className="text-violet-600 dark:text-teal-400 text-sm mb-3 tracking-widest uppercase font-semibold">
            AI Researcher & Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Mohammad Reza Chopannavaz
          </h1>

          <p className="text-gray-700 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            Passionate researcher and software engineer with a strong focus on
            AI and healthcare innovation.
            <br />
            Dedicated to developing impactful solutions at the intersection of
            technology and science through collaborative and data-driven
            approaches.
          </p>

          <nav aria-label="Social media links">
            <div className="flex justify-center space-x-6 mb-8 text-2xl text-gray-600 dark:text-gray-400">
              {[
                {
                  href: "https://scholar.google.com/citations?user=P21wfaoAAAAJ&hl=en",
                  label: "Google Scholar",
                  icon: <RiGraduationCapFill />,
                },
                {
                  href: "https://github.com/m-reza-ch",
                  label: "GitHub",
                  icon: <FaGithub />,
                },
                {
                  href: "https://www.linkedin.com/in/reza-chopannavaz",
                  label: "LinkedIn",
                  icon: <FaLinkedin />,
                },
                {
                  href: "https://orcid.org/0009-0009-7277-042X",
                  label: "Orcid",
                  icon: <FaOrcid />,
                },
              ].map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-violet-600 dark:hover:text-teal-400 focus:outline-none rounded transition transform hover:scale-110 active:scale-95"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Replace anchor hrefs with scroll-to-button */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => scrollTo(publicationsRef)}
              className="inline-flex items-center justify-center gap-2 bg-violet-600 dark:bg-teal-500 text-white py-3 px-8 rounded font-semibold transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-400 dark:focus:ring-teal-400 cursor-pointer"
            >
              View Publications
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="inline-block border border-violet-600/50 dark:border-teal-500/50 text-violet-600 dark:text-teal-500 py-3 px-8 rounded font-semibold transition hover:bg-violet-600/10 dark:hover:bg-teal-500/20 focus:outline-none focus:ring-4 focus:ring-violet-400 dark:focus:ring-teal-400 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </motion.header>
      </RevealOnScroll>

      {/* Scroll indicator button */}
      <motion.button
        onClick={() => scrollTo(educationRef)}
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-violet-600 dark:text-teal-400 text-2xl cursor-pointer hover:text-violet-800 dark:hover:text-teal-300 transition"
        aria-label="Scroll to next section"
      >
        ↓
      </motion.button>
    </section>
  );
};
