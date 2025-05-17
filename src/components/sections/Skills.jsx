import { RevealOnScroll } from "../RevealOnScroll";
import { Code, Server, Layers } from "lucide-react";

export const Skills = () => {
  const categories = [
    {
      title: "Python & Data Science",
      icon: (
        <Code className="inline mr-1 w-5 h-5 dark:text-teal-400 text-violet-400" />
      ),
      skills: [
        "PyTorch",
        "TensorFlow",
        "NumPy",
        "SciPy",
        "Pandas",
        "Matplotlib",
        "NetworkX",
      ],
    },
    {
      title: "Full-Stack Development",
      icon: (
        <Server className="inline mr-1 w-5 h-5 dark:text-teal-400 text-violet-400" />
      ),
      skills: ["Node.js", "Express", "React.js", "Redux", "MongoDB"],
    },
    {
      title: "Other",
      icon: (
        <Layers className="inline mr-1 w-5 h-5 dark:text-teal-400 text-violet-400" />
      ),
      skills: ["LaTeX", "Java", "C#", "ASP.Net Core", "OOP", "MySQL"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col py-20 relative justify-center bg-white dark:bg-zinc-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-gray-900 dark:text-gray-300 ">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Programming Skills
          </h2>
          <div className="space-y-12">
            {categories.map(({ title, icon, skills }) => (
              <div
                key={title}
                // className="hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0)] dark:hover:shadow-[0_2px_8px_rgba(20,158,149,0)] transition"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  {icon} {title}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {skills.map((name) => (
                    <span
                      key={name}
                      title={name}
                      className="flex items-center bg-violet-600/20 text-violet-700 dark:bg-teal-600/20 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium tracking-wide cursor-default transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.7)] dark:hover:shadow-[0_0_10px_rgba(20,158,149,0.7)] select-none"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
