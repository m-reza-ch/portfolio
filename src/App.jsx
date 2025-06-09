import { useState, useEffect, useRef } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { Research } from "./components/sections/Research";
import { Publications } from "./components/sections/Publications";
import { Experience } from "./components/sections/Experience";
import { Courses } from "./components/sections/Courses";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";

import { useTheme } from "./hooks/useTheme"; // Import your hook

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useTheme(); // Use your theme hook here

  const homeRef = useRef();
  const publicationsRef = useRef();
  const contactRef = useRef();
  const educationRef = useRef();
  const coursesRef = useRef();

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    // Scroll to top on mount to prevent page jump
    window.scrollTo({ top: 0, behavior: "instant" });

    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } 
        min-h-screen text-base
        bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300`}
      >
        {/* Pass theme and toggle function to Navbar */}
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          setTheme={setTheme}
          homeRef={homeRef}
        />
        <div ref={homeRef}>
          <Home
            publicationsRef={publicationsRef}
            contactRef={contactRef}
            educationRef={educationRef}
          />
        </div>
        <div ref={educationRef}>
          <Education coursesRef={coursesRef} />
        </div>
        <Research />
        <div ref={publicationsRef}>
          <Publications />
        </div>
        <Experience />
        <Projects />
        <div ref={coursesRef}>
          <Courses />
        </div>
        <Skills />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
