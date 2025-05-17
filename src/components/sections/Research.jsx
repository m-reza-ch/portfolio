// Research.jsx

import { RevealOnScroll } from "../RevealOnScroll";

export const Research = () => {
  const interests = [
    {
      category: "Machine Learning",
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Feature Engineering",
        "Data Analysis",
      ],
    },
    {
      category: "Deep Learning",
      topics: [
        "Neural Networks",
        "CNNs",
        "RNNs",
        "Autoencoders",
        // "GANs",
        "Optimization",
        "Transformer",
      ],
    },
    {
      category: "Biological Signal Processing",
      topics: [
        "ECG",
        "EEG",
        "Fourier Transform",
        "Wavelet Transform",
        "Signal Analysis",
      ],
    },
    {
      category: "Advanced Data Mining",
      topics: [
        "eXplainable AI",
        "Multi-Modal ML",
        "Data Fusion",
        "Interactive ML",
        "Feature Visualization",
        "Probabilistic Circuits",
      ],
    },
    {
      category: "Self-Supervised Learning",
      topics: [
        "Representation Learning",
        "Generative AI",
        "Contrastive Learning",
        "Predictive Coding",
        "Masked Modeling",
      ],
    },
    {
      category: "Reinforcement Learning",
      topics: [
        "MDPs",
        "DP",
        "Monte Carlo",
        "TD Learning",
        "Approximation",
        "On-Policy Learning",
        "Policy Gradient",
        "Multi-Agent Systems",
      ],
    },
    {
      category: "Digital Imaging",
      topics: [
        "Image Enhancement",
        "Object Detection",
        "Representation",
        "Feature Descriptor",
        "Segmentation",
        "Compression",
      ],
    },
    {
      category: "Complex & Dynamic Networks",
      topics: [
        "Graph Theory",
        "Topologies",
        "Measures",
        "Models",
        "Search Algorithms",
        "Dynamics",
      ],
    },
  ];
  return (
    <section
      id="research"
      title="Research"
      className="min-h-screen flex flex-col py-20 relative items-center justify-center bg-white dark:bg-zinc-950"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Research Interests
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {interests.map((item, idx) => (
              <div
                key={idx}
                className="bg-transparent backdrop-blur-md rounded-lg p-6 border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_2px_8px_rgba(20,158,149,0.3)] transition-all"
              >
                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  {item.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-violet-500/10 dark:bg-teal-500/10 rounded text-violet-700 dark:text-teal-300 px-2 py-0.5 text-xs font-medium tracking-wide hover:bg-violet-500/20 dark:hover:bg-teal-500/20 hover:shadow-[0_2px_6px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_2px_6px_rgba(20,158,149,0.1)] transition-all"
                    >
                      {topic}
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
