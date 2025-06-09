// Education.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Education = ({ coursesRef }) => {
  const timeline = [
    {
      degree:
        "M.Sc. in Computer Engineering, Artificial Intelligence & Robotics",
      institution: "Tarbiat Modares University",
      period: "Sep 2021 - Feb 2025",
      details: [
        "Thesis — Epileptic Seizure Prediction from ECG using Machine Learning Approach",
        "Supervisor — Dr. Foad Ghaderi",
        "Thesis Grade — Excellent",
      ],
      skills: [
        "Innovative Research",
        "Scientific Writing",
        "Research & Development",
        "Teaching",
      ],
      courses: [
        "Machine Learning",
        "Neural Networks",
        "Biological Signal Processing",
      ],
    },
    {
      degree: "B.Sc. in Computer Software Engineering Technology",
      institution: "Shamsipour Technical and Vocational College, TVU",
      period: "Sep 2019 - Sep 2021",
      details: [
        "Final Project — Social Media Web-App",
        "Honored — Graduated with First Rank",
      ],
      skills: [
        "Engineering Mathematics",
        "Software Engineering",
        "Web Development",
        "Database Design",
      ],
      courses: ["Statistics & Probabilities", "Artificial Intelligence", ""],
    },
    {
      degree: "A.Sc. in Computer Software Engineering Technology",
      institution: "Enghelab Eslami Technical College, TVU",
      period: "Sep 2017 - Sep 2019",
      details: [],
      skills: [
        "Basic Sciences",
        "Programming Fundamentals",
        "Project Management",
      ],
    },
  ];

  const scrollToCourses = () => {
    if (coursesRef?.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col py-20 relative text-black dark:text-white bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Education
          </h2>

          <div className="relative border-l-2 border-violet-500/30 dark:border-blue-500/30 pl-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="mb-10 relative"
                // hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0)] dark:hover:shadow-[0_2px_8px_rgba(37,99,235,0)] transition
              >
                <span className="absolute -left-11 top-0 w-6 h-6 bg-violet-500 dark:bg-blue-500 rounded-full"></span>
                <h3 className="text-xl font-semibold text-black dark:text-gray-100">
                  {item.degree}
                </h3>
                <div className="italic text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.institution} | {item.period}
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

                {/* Courses Link in a flex container */}
                <div className="flex flex-wrap items-center justify-between">
                  {/* Scroll-to-Courses Button */}
                  {item.courses && item.courses.length > 0 && (
                    <button
                      onClick={scrollToCourses}
                      className="cursor-pointer italic text-sm text-gray-600 dark:text-gray-400 mt-3 hover:underline transition focus:outline-none"
                    >
                      View Selected Courses →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
