/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "valentine",
      "cyberpunk",
      "aqua",
    ],
    //themes: ["light"],
  },
  plugins: [require("daisyui")],
};
