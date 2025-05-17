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
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
      },
    },
  },
};
