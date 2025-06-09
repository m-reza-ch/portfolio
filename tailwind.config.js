// tailwind.config.js
export default {
  dark: "class", // <--- IMPORTANT!
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
      },
      fontSize: {
        base: "2rem", // 16px
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
      },
    },
  },
};
