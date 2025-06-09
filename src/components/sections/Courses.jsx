// Courses.jsx
import { RevealOnScroll } from "../RevealOnScroll";
import { BookOpenCheck } from "lucide-react";

export const Courses = () => {
  const categories = [
    {
      title: "Graduate",
      items: [
        "Deep Learning",
        "Computer Vision",
        "Complex Networks",
        "Advanced Data Mining",
        "Reinforcement Learning",
      ],
    },
    {
      title: "Undergraduate",
      items: [
        "Artificial Intelligence",
        "Algorithm Design",
        "Stats & Probability",
      ],
    },
  ];

  return (
    <section
      id="courses"
      className="min-h-screen flex flex-col py-20 relative justify-center text-black dark:text-white bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Specialized Selected Courses
          </h2>
          <div className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-transparent p-6 rounded-xl border border-black/10 dark:border-white/10 backdrop-blur-md 
            hover:-translate-y-1 
            hover:border-violet-500/30 dark:hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_2px_8px_rgba(37,99,235,0.2)]
            transition-all"
              >
                <h3 className="text-xl font-semibold text-black dark:text-gray-100 mb-6">
                  {category.title} Level
                </h3>
                <ul className="space-y-4">
                  {category.items.map((course) => (
                    <li
                      key={course}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-base"
                    >
                      <BookOpenCheck
                        size={20}
                        className="text-violet-500 dark:text-blue-500 flex-shrink-0"
                      />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
