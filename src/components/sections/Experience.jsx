// Experience.jsx

import { LinkIcon } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const academicPositions = [
    {
      title: "Graduate Teaching Assistant, Digital Signal Processing",
      org: "Department of C.E., Tarbiat Modares University",
      period: "Oct 2023 - Jan 2024",
      details: [
        "Assisted in designing practice questions",
        "Provided guidance and support to students",
        "Graded assignments",
      ],
      skills: ["DSP", "Python", "SciPy", "NumPy", "MNE"],
    },
    {
      title: "Research Assistant, Intelligent Technology Scanning",
      org: "I.T. Research Institute, Tarbiat Modares University",
      period: "Jul 2023 - Jul 2024",
      details: [
        "Researched and evaluated cutting-edge industrial technologies",
      ],
      skills: [
        "Gen. AI",
        "Digital Twins",
        "Sustainable Energy",
        "Wearable Devices",
        "RPA",
        "VR/AR/MR",
      ],
    },
  ];

  const academicServices = [
    {
      title: "Invited Reviewer",
      description: "Expert System with Applications",
      certificateLink:
        "https://drive.google.com/file/d/1Jk2MeZ8hXKEFG0FbYWA03UJz6NV0DfDd/view?usp=sharing",
      date: "Apr 2025",
      publisher: "Elsevier",
      issn: "https://portal.issn.org/resource/ISSN/0957-4174",
    },
    {
      title: "Invited Reviewer",
      description: "Systems and Soft Computing",
      certificateLink:
        "https://drive.google.com/file/d/1dTPecit63jN6P7CbPPzaIIqed29WnUvr/view?usp=sharing",
      date: "Apr 2025",
      publisher: "Elsevier",
      issn: "https://portal.issn.org/resource/ISSN/2772-9419",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col py-20 relative bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 text-black dark:text-gray-100"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Experiences
          </h2>

          <section className="mb-10">
            <h3
              className="text-2xl font-bold text-violet-600 dark:text-blue-500 mb-6 tracking-wide"
              style={{ fontVariant: "small-caps" }}
            >
              Academic Positions
            </h3>
            <div className="relative border-l-2 border-violet-600/30 dark:border-blue-600/30 pl-8 space-y-8">
              {academicPositions.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                  // className="hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0)] dark:hover:shadow-[0_2px_8px_rgba(37,99,235,0)] transition"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
                      {item.org} &mdash;{" "}
                      <span className="not-italic">{item.period}</span>
                    </div>
                    {item.details.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {item.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="mt-1 w-1 h-5 bg-violet-400 dark:bg-blue-400 rounded-sm" />
                            <p className="text-gray-700 dark:text-gray-300">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.skills.length > 0 && (
                      <div className="mt-1">
                        <h4 className="text-sm font-semibold text-violet-600 dark:text-blue-400 mb-2">
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-violet-500/10 dark:bg-blue-500/10 rounded text-violet-700 dark:text-blue-300 px-2 py-0.5 text-xs font-medium tracking-wide rounded-full hover:bg-violet-500/20 dark:hover:bg-blue-500/20 hover:shadow-[0_2px_6px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_2px_6px_rgba(37,99,235,0.1)] transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3
              className="text-2xl font-bold text-violet-600 dark:text-blue-500 mb-6 tracking-wide"
              style={{ fontVariant: "small-caps" }}
            >
              Services
            </h3>
            <div className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-2">
              {academicServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-black/10 dark:border-white/10 rounded-lg p-6 backdrop-blur-md hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_2px_8px_rgba(37,99,235,0.2)] transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide">
                      {service.title}
                    </h3>

                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-gray-700 dark:text-gray-300">
                        {service.description}
                      </p>
                      {service.issn && (
                        <a
                          href={service.issn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline text-sm text-violet-500 dark:text-blue-400 focus:outline-none hover:text-violet-500 dark:hover:text-blue-300 transition"
                        >
                          <span className=" inline-flex items-center gap-2 px-2 py-1 rounded-md text-violet-600 dark:text-blue-300 text-sm font-semibold bg-transparent dark:border-blue-300/30 hover:bg-violet-600/10 dark:hover:bg-blue-300/10 hover:text-violet-700 dark:hover:text-blue-400 transform transition duration-300 ease-in-out active:scale-95">
                            <LinkIcon size={13} />
                            ISSN
                          </span>
                        </a>
                      )}
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">
                      {service.publisher} &mdash;{" "}
                      <span className="not-italic">{service.date}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-right">
                    <a
                      href={service.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-semibold rounded border border-violet-600 text-violet-500 dark:border-blue-600 dark:text-blue-400 hover:bg-violet-600 dark:hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </RevealOnScroll>
    </section>
  );
};
