module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    screens: {
      min: "320px",
      mid: "700px",
      max: "1920px",
    },
  },
};
