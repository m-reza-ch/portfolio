import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string } or null
  const [loading, setLoading] = useState(false);

  // Reset validation state when user scrolls away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setErrors({ name: "", email: "", message: "" });
          setTouched({ name: false, email: false, message: false });
          setStatus(null);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-dismiss status message
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateForm = (data) => {
    const newErrors = { name: "", email: "", message: "" };

    if (data.name.trim() === "") {
      newErrors.name = "Please enter your name.";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (data.message.trim() === "") {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  const hasErrors = (errorObj) =>
    Object.values(errorObj).some((error) => error !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

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
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMsg =
        error?.text ||
        error?.message ||
        "Oops! Something went wrong. Please try again.";
      setStatus({ type: "error", message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  };

  const inputBaseClasses =
    "w-full bg-gray-100 text-black dark:bg-white/5 dark:text-white border border-gray-300 dark:border-white/10 rounded px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-violet-500 dark:focus:border-blue-500 focus:bg-violet-500/10 dark:focus:bg-blue-500/10";

  const isNameError = touched.name && errors.name !== "";
  const isEmailError = touched.email && errors.email !== "";
  const isMessageError = touched.message && errors.message !== "";

  const isSubmitDisabled = loading || hasErrors(errors);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-between text-black dark:text-white bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className={`${inputBaseClasses} ${
                isNameError ? "border-red-600 dark:border-red-400" : ""
              }`}
              placeholder="Your Name..."
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              onBlur={() => handleBlur("name")}
              aria-invalid={isNameError}
              aria-describedby="name-error"
            />
            {isNameError && (
              <p
                id="name-error"
                className="text-xs text-red-600 dark:text-red-400 -mt-3"
              >
                {errors.name}
              </p>
            )}

            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className={`${inputBaseClasses} ${
                isEmailError ? "border-red-600 dark:border-red-400" : ""
              }`}
              placeholder="Your Email..."
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              onBlur={() => handleBlur("email")}
              aria-invalid={isEmailError}
              aria-describedby="email-error"
            />
            {isEmailError && (
              <p
                id="email-error"
                className="text-xs text-red-600 dark:text-red-400 -mt-3"
              >
                {errors.email}
              </p>
            )}

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className={`${inputBaseClasses} ${
                isMessageError ? "border-red-600 dark:border-red-400" : ""
              }`}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              onBlur={() => handleBlur("message")}
              aria-invalid={isMessageError}
              aria-describedby="message-error"
            />
            {isMessageError && (
              <p
                id="message-error"
                className="text-xs text-red-600 dark:text-red-400 -mt-3"
              >
                {errors.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitDisabled}
                className="w-full bg-violet-500 dark:bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div className="h-6 mt-2 flex items-center justify-center">
              <AnimatePresence>
                {status && (
                  <motion.p
                    key="status-message"
                    initial={{ opacity: 0, y: 5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm font-semibold text-center ${
                      status.type === "success"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="w-full text-center text-gray-600 dark:text-gray-500 text-sm py-4 border-t border-gray-200 dark:border-white/10 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 flex-shrink-0">
        © 2025 - M.Reza Chopannavaz
      </footer>
    </section>
  );
};
