import { useState, useEffect, useRef, useCallback } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const sectionRef = useRef(null);
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shakeField, setShakeField] = useState(null);
  // NEW STATE: To control timed visibility of "All fields are required" message
  const [showRequiredMessageTimed, setShowRequiredMessageTimed] =
    useState(false);

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const validateForm = useCallback((data) => {
    const newErrors = { name: "", email: "", message: "" };
    if (!data.name.trim()) newErrors.name = "Please enter your name.";
    if (!data.email.trim())
      newErrors.email = "Please enter your email address.";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Please enter a valid email address.";
    if (!data.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setErrors({ name: "", email: "", message: "" });
          setAttemptedSubmit(false);
          setStatus(null);
          setShowRequiredMessageTimed(false); // Also clear this message
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // NEW EFFECT: To make "All fields are required" message disappear after a few seconds
  useEffect(() => {
    if (showRequiredMessageTimed) {
      const timer = setTimeout(() => setShowRequiredMessageTimed(false), 3000); // Disappear after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showRequiredMessageTimed]);

  const hasErrors = (errorObj) => Object.values(errorObj).some(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (attemptedSubmit) {
      setErrors(validateForm({ ...formData, [name]: value }));
      // If user starts typing and fixes errors, hide the timed message immediately
      if (!hasErrors({ ...formData, [name]: value })) {
        setShowRequiredMessageTimed(false);
      }
    }
  };

  const handleBlur = (field) => {
    if (attemptedSubmit) {
      setErrors(validateForm(formData));
      // If user blurs and fixes errors, hide the timed message immediately
      if (!hasErrors(formData)) {
        setShowRequiredMessageTimed(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setShowRequiredMessageTimed(true); // Show the timed message if there are errors
      const firstErrorField = Object.keys(validationErrors).find(
        (key) => validationErrors[key]
      );
      setShakeField(firstErrorField);
      inputRefs[firstErrorField]?.current?.focus();
      setTimeout(() => setShakeField(null), 500);
      return;
    }

    // If validation passes, ensure the timed message is hidden
    setShowRequiredMessageTimed(false);

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setAttemptedSubmit(false);
    } catch (error) {
      const errorMsg =
        error?.text ||
        error?.message ||
        "Something went wrong, please try again later.";
      setStatus({ type: "error", message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full bg-gray-100 text-black dark:bg-white/5 dark:text-white border border-gray-300 dark:border-white/10 rounded px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-violet-500 dark:focus:border-blue-500 focus:bg-violet-500/10 dark:focus:bg-blue-500/10";

  const shakeAnimation = {
    initial: { x: 0 },
    animate: { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.3 } },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-between text-black dark:text-white bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
    >
      <RevealOnScroll>
        <div
          ref={formContainerRef}
          // ADDED: scrollbar-gutter-stable to prevent layout shift when scrollbar appears
          className="flex-grow flex flex-col items-center pt-15 pb-0 sm:pb-4 overflow-y-auto scrollbar-gutter-stable"
        >
          <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <motion.div
                key="name-field"
                variants={shakeAnimation}
                animate={shakeField === "name" ? "animate" : "initial"}
              >
                <input
                  ref={inputRefs.name}
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="Your Name..."
                  className={`${inputBase} ${
                    attemptedSubmit && errors.name
                      ? "border-red-600 dark:border-red-400"
                      : ""
                  }`}
                />
                {attemptedSubmit && errors.name && (
                  <p className="text-xs mt-1 text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                key="email-field"
                variants={shakeAnimation}
                animate={shakeField === "email" ? "animate" : "initial"}
              >
                <input
                  ref={inputRefs.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="Your Email..."
                  className={`${inputBase} ${
                    attemptedSubmit && errors.email
                      ? "border-red-600 dark:border-red-400"
                      : ""
                  }`}
                />
                {attemptedSubmit && errors.email && (
                  <p className="text-xs mt-1 text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                key="message-field"
                variants={shakeAnimation}
                animate={shakeField === "message" ? "animate" : "initial"}
              >
                <textarea
                  ref={inputRefs.message}
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  placeholder="Your Message..."
                  className={`${inputBase} ${
                    attemptedSubmit && errors.message
                      ? "border-red-600 dark:border-red-400"
                      : ""
                  }`}
                />
                {attemptedSubmit && errors.message && (
                  <p className="text-xs mt-1 text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </motion.div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-500 dark:bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Message Below Button */}
              <div className="min-h-[1.75rem] mt-1">
                {/* "All fields are required" message */}
                <AnimatePresence>
                  {/* NEW CONDITION: showRequiredMessageTimed must be true */}
                  {attemptedSubmit &&
                    hasErrors(errors) &&
                    showRequiredMessageTimed &&
                    !status && (
                      <motion.p
                        key="required-fields-message"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-center font-medium px-3 py-1 rounded border text-red-600 dark:text-red-400 border-red-400/30 bg-red-400/10"
                      >
                        Please complete all required fields correctly.
                      </motion.p>
                    )}
                </AnimatePresence>

                {/* Submission status message */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      key="form-status"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25 }}
                      className={`text-sm text-center font-medium px-3 py-1 rounded border ${
                        status.type === "success"
                          ? "text-green-600 dark:text-green-400 border-green-400/30 bg-green-400/10"
                          : "text-red-600 dark:text-red-400 border-red-400/30 bg-red-400/10"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="w-full text-center text-gray-600 dark:text-gray-500 text-sm py-4 border-t border-gray-200 dark:border-white/10 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 flex-shrink-0">
        © 2025 - M.Reza Chopannavaz
      </footer>
    </section>
  );
};
