import { useEffect, useLayoutEffect, useState } from "react";

const THEME_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") return stored;

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  // ⚡ Immediately apply theme before paint (avoids flicker)
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Save preference
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Optional: Watch for system preference changes (if no theme manually set)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const stored = localStorage.getItem(THEME_KEY);
    if (!stored) {
      const handleChange = (e) => {
        setTheme(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return [theme, setTheme];
}
