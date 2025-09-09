/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "sscale(1)" },
          "33%": { transform: "sscale(1.2)" },
          "66%": { transform: "sscale(0.8)" },
          "100%": { transform: "sscale(1)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
      },
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)",
      },
    },
  },
  plugins: [],
};
