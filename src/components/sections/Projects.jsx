import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, LinkIcon } from "lucide-react";

const projectData = [
  {
    title: "Reconstruction-Based ESP",
    type: "Research",
    description:
      "ECG-based epileptic seizure prediction using various deep learning architectures, such as LSTM, CNN, Autoencoders, and Transformers.",
    tech: ["PyTorch", "ECG", "CNN", "LSTM", "Autoencoder", "Transoformers"],
    demo: "https://doi.org/10.48550/arXiv.2504.08381", // Replace with real DOI or demo link
    demoType: "DOI",
    code: "",
  },
  {
    title: "Social Media",
    type: "College Project",
    description:
      "A social media web application designed for content creation, user interaction through comments and likes, and real-time chat.",
    tech: ["Node.js", "React.js", "Redux", "MongoDB", "NoSQL"],
    demo: "https://drive.google.com/file/d/1L6SnZm0tnhlVuxT3WeJt4L3G0vWAJRaw/view?usp=sharing",
    demoType: "Demo",
    code: "",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col py-20 relative items-center justify-center bg-white dark:bg-zinc-950"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between border border-black/10 dark:border-white/10 rounded-lg p-6 backdrop-blur-md 
                  hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-teal-500/30 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_2px_8px_rgba(20,158,149,0.2)] 
                  transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <span className="bg-violet-600/20 dark:bg-teal-600/20 text-violet-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium tracking-wide hover:bg-violet-500/20 dark:hover:bg-teal-500/20 hover:shadow-[0_2px_6px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_2px_6px_rgba(20,158,149,0.1)] transition-all italic">
                    {project.type}
                  </span>
                </div>

                <p className="text-neutral-700 dark:text-neutral-400 mb-4 text-sm leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-violet-500/10 dark:bg-teal-500/10 text-violet-700 dark:text-teal-300 px-2 py-0.5 text-xs font-medium tracking-wide rounded-full hover:bg-violet-500/20 dark:hover:bg-teal-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.demo || project.code) && (
                  <div className="flex justify-between items-center mt-2">
                    {/* Demo or DOI link on the left */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" inline-flex items-center gap-2 px-2 py-1 rounded-md text-violet-600 dark:text-teal-300 text-sm font-semibold bg-transparent dark:border-teal-300/30 hover:bg-violet-600/10 dark:hover:bg-teal-300/10 hover:text-violet-700 dark:hover:text-teal-400 transform transition duration-300 ease-in-out active:scale-95"
                      >
                        <LinkIcon size={15} />
                        {project.demoType || "Demo"}
                      </a>
                    )}

                    {/* GitHub link on the right */}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" inline-flex items-center gap-2 px-2 py-1 rounded-md text-violet-600 dark:text-teal-300 text-sm font-semibold bg-transparent dark:border-teal-300/30 hover:bg-violet-600/10 dark:hover:bg-teal-300/10 hover:text-violet-700 dark:hover:text-teal-400 transform transition duration-300 ease-in-out active:scale-95"
                      >
                        <FaGithub size={15} />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
