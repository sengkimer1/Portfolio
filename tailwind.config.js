// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    // Ensure it scans your `src` folder
  ],
  darkMode: "class", // Make sure this is set
  theme: {
    extend: {},
  },
  plugins: [],
};
