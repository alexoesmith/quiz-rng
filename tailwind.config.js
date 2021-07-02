module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: "#eff0f3",
        action: "#ea1d75",
      },
      fontFamily: {
        body: ["Space Grotesk"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
