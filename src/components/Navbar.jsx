import { useEffect } from "react";
import { scroller } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen, theme, setTheme, homeRef }) => {
  const { scrollYProgress } = useScroll();
  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const items = [
    // "home",
    "education",
    "research",
    "publications",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Scroll-related styles
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    [
      "none",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    ]
  );
  const borderRadius = useTransform(scrollY, [0, 50], ["0px", "0 0 8px 8px"]);

  // Scroll instantly to section and close menu
  const handleScrollTo = (section) => {
    setMenuOpen(false);
    scroller.scrollTo(section, {
      duration: 0,
      smooth: false,
      // offset: -30,
    });
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 
  bg-white/80 dark:bg-black/70 
  backdrop-blur-lg 
  border-b border-gray-200 dark:border-gray-700 
  transition-colors select-none 
  dark:backdrop-brightness-150 dark:backdrop-contrast-125"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ boxShadow, borderRadius }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo(homeRef)}
            className="cursor-pointer font-mono text-xl font-bold text-black dark:text-white transition-colors duration-300"
          >
            m.reza
            <span className="text-violet-500 dark:text-blue-400">.ch</span>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {items.map((section) => (
              <motion.div
                key={section}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  onClick={() => handleScrollTo(section)}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors capitalize font-medium"
                >
                  {section}
                </span>
                <motion.div
                  className="absolute bottom-[-5px] left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full
                    bg-violet-500 dark:bg-blue-400"
                  style={{ originX: "left" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right side: Burger menu (mobile) and Theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Burger menu icon (mobile only) */}
            <motion.div
              className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-black dark:text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.8 }}
            >
              <motion.span
                style={{
                  display: "block",
                  position: "absolute",
                  height: "2px",
                  width: "100%",
                  background: "currentColor",
                  borderRadius: "1px",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "0.2s ease-in-out",
                }}
              />
              <motion.span
                style={{
                  display: "block",
                  position: "absolute",
                  height: "2px",
                  width: "100%",
                  background: "currentColor",
                  borderRadius: "1px",
                  top: "50%",
                  transform: menuOpen ? "rotate(-45deg)" : "translateY(-50%)",
                  transition: "0.2s ease-in-out",
                }}
              />
              <motion.span
                style={{
                  display: "block",
                  position: "absolute",
                  height: "2px",
                  width: "100%",
                  background: "currentColor",
                  borderRadius: "1px",
                  bottom: "0",
                  transform: menuOpen ? "translateY(50%)" : "translateY(0)",
                  transition: "0.2s ease-in-out",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
            </motion.div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="text-black dark:text-white hover:text-violet-600 dark:hover:text-blue-400 transition text-xl focus:outline-none cursor-pointer"
              title="Toggle Theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <motion.div
          className="
      md:hidden 
      fixed 
      top-16 
      left-1/2 
      transform -translate-x-1/2
      max-w-5xl 
      w-full 
      bg-white 
      dark:bg-black 
      backdrop-blur-lg 
      border-t 
      border-gray-200 
      dark:border-gray-700 
      z-40 
      rounded-b-lg
      shadow-md
      transition-colors
      overflow-y-auto
      max-h-[calc(100vh-4rem)]
    "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-center p-6 space-y-3">
            {items.map((section) => (
              <motion.div
                key={section}
                whileTap={{ scale: 0.5 }}
                className="relative group w-full max-w-xs"
              >
                <span
                  onClick={() => handleScrollTo(section)}
                  className="cursor-pointer text-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg capitalize transition-colors font-medium select-none block"
                >
                  {section}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full
                    bg-violet-500 dark:bg-blue-400"
                  style={{ originX: "left" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
