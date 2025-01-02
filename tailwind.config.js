/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-swiper": "url('./src/assets/im/ero.svg')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
      colors: {
        primary: "#C19F74",
        secondary: "#FFFFFF",
      },
      fontFamily: {
        Restora: ["Restora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
