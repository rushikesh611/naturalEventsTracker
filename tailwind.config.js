module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      0: 0,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
