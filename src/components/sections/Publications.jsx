import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Link } from "lucide-react";

export const Publications = () => {
  const pubs = [
    {
      title:
        "An Empirical Investigation of Reconstruction Loss-Based Models for Seizure Prediction from ECG Data",
      authors: "Chopannavaz, M. R.; Ghaderi, F.",
      journal:
        "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
      date: "Apr 2025",
      status: "Under Review",
      doi: "https://doi.org/10.48550/arXiv.2504.08381",
      abstract:
        "Epileptic seizures are sudden neurological disorders characterized by abnormal, excessive neuronal activity in the brain, which is often associated with changes in cardiovascular activity. These disruptions can pose significant physical and psychological challenges for patients. Therefore, accurate seizure prediction can help mitigate these risks by enabling timely interventions, ultimately improving patients' quality of life. Traditionally, EEG signals have been the primary standard for seizure prediction due to their precision in capturing brain activity. However, their high cost, susceptibility to noise, and logistical constraints limit their practicality, restricting their use to clinical settings. In order to overcome these limitations, this study focuses on leveraging ECG signals as an alternative for seizure prediction. In this paper, we present a novel method for predicting seizures based on detecting anomalies in ECG signals during their reconstruction. By extracting time-frequency features and leveraging various advanced deep learning architectures, the proposed method identifies deviations in heart rate dynamics associated with seizure onset. The proposed approach was evaluated using the Siena database and could achieve specificity of 99.16%, accuracy of 76.05%, and false positive rate (FPR) of 0.01/h, with an average prediction time of 45 minutes before seizure onset. These results highlight the potential of ECG-based seizure prediction as a patient-friendly alternative to traditional EEG-based methods.",
      keywords: [
        "Anomaly Detection",
        "Autoencoders",
        "Deep Learning",
        "Electrocardiogram",
        "Epilepsy",
        "Seizure",
        "Prediction",
      ],
    },
    {
      title:
        "Advances in Machine Learning for Epileptic Seizure Prediction: A Review of Electrocardiogram-Based Approaches",
      authors: "Chopannavaz, M. R.; Ghaderi, F.",
      journal: "Engineering Applications of Artificial Intelligence",
      date: "Oct 2024",
      status: "Under Review",
      doi: "https://doi.org/10.20944/preprints202504.0942.v1",
      abstract:
        "Epilepsy is a neurological disorder that affects millions of people worldwide and causes severe suffering. By providing opportunities for early intervention and seizure management, early detection of seizures can significantly enhance the quality of life for epileptic patients. Over the past few decades, significant efforts have been made to explore non-invasive methodologies for predicting seizures. Recent advancements have highlighted the potential of Electrocardiogram (ECG), particularly Heart Rate Variability (HRV) analysis, as a valuable biomarker for seizure prediction. However, the effectiveness of these approaches can vary, making it difficult to select the most appropriate strategy. Unlike previous reviews that have mostly focused on methods related to HRV analysis from medical perspectives, we aim to provide a comprehensive review of the machine learning techniques that have been applied to ECG data for predicting epileptic seizure attacks. In this study, we explore the relationship between the cardiovascular system and seizure activity, including the physiological effects of epileptic seizures and their implications for predictive modeling. Additionally, we provide a detailed comparison of available seizure prediction techniques, including a review of public datasets, common methodologies, key components, and evaluation metrics. Finally, the study highlights the strengths and limitations of various approaches while discussing existing challenges and future opportunities. We believe our work lays a basis for developing more sophisticated methods on utilizing the ECG signal for better seizure prediction.",
      keywords: [
        "Epilepsy",
        "Seizure Prediction",
        "Electrocardiogram",
        "Hear Rate Variability",
        "Classification",
        "Anomaly Detection",
      ],
    },
  ];

  // State to track which pub is open, store index or null if none open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="publications"
      className="min-h-screen flex flex-col py-20 relative items-center justify-center bg-white dark:bg-zinc-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-black dark:text-gray-100">
            Publications
          </h2>
          <div className="space-y-6">
            {pubs.map((pub, i) => (
              <PubCard
                key={i}
                pub={pub}
                isOpen={openIndex === i}
                onToggle={() => toggleOpen(i)}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const PubCard = ({ pub, isOpen, onToggle }) => {
  return (
    <div
      className="bg-transparent backdrop-blur-md p-6 rounded-xl border border-black/10 dark:border-white/10 
        hover:-translate-y-1 hover:border-violet-500/30 dark:hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_2px_8px_rgba(20,158,149,0.2)] transition-all"
    >
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100 text-justify">
        {pub.title}
      </h3>

      <div className="text-sm text-gray-700 dark:text-gray-400 mb-1">
        {pub.authors}
      </div>

      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 italic gap-2 mb-3">
        <span>{pub.journal}</span>
        <span className="text-gray-400 dark:text-gray-500">|</span>
        <span className="text-gray-700 dark:text-gray-300 not-italic">
          {pub.date}
        </span>
        <span className="text-gray-400 dark:text-gray-500">|</span>
        <span className="bg-violet-600/20 dark:bg-teal-600/20 text-violet-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium tracking-wide hover:bg-violet-500/20 dark:hover:bg-teal-500/20 hover:shadow-[0_2px_6px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_2px_6px_rgba(20,158,149,0.1)] transition-all">
          {pub.status}
        </span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <a
          href={pub.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-violet-600 dark:text-teal-300 text-sm font-semibold bg-transparent dark:border-teal-300/30 hover:bg-violet-600/10 dark:hover:bg-teal-300/10 hover:text-violet-700 dark:hover:text-teal-400 transform transition duration-300 ease-in-out active:scale-95"
        >
          <Link size={16} />
          DOI / Preprint
        </a>

        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-violet-600 dark:text-teal-300 text-sm font-semibold bg-transparent dark:border-teal-300/30 hover:bg-violet-600/10 dark:hover:bg-teal-300/10 hover:text-violet-700 dark:hover:text-teal-400 transform transition duration-300 ease-in-out active:scale-95 cursor-pointer"
        >
          {isOpen ? (
            <>
              Hide Abstract
              <ChevronDown size={16} />
            </>
          ) : (
            <>
              Show Abstract
              <ChevronRight size={16} />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <hr className="border-gray-300 dark:border-gray-700 w-1/2 border-[0.5px] mx-auto my-4" />
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <h4 className="text-sm font-semibold text-violet-600 dark:text-teal-400 mb-2">
                Abstract
              </h4>
              <p className="text-justify mb-4 font-semibold">{pub.abstract}</p>

              {/* Keywords */}
              {pub.keywords?.length > 0 && (
                <div className="mt-1">
                  <h5 className="text-sm font-semibold text-violet-600 dark:text-teal-400 mb-2">
                    Keywords:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-violet-500/10 dark:bg-teal-500/10 rounded text-violet-700 dark:text-teal-300 px-2 py-0.5 text-xs font-medium tracking-wide hover:bg-violet-500/20 dark:hover:bg-teal-500/20 hover:shadow-[0_2px_6px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_2px_6px_rgba(20,158,149,0.1)] transition-all"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
