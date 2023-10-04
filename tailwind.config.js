/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Mona Sans", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        header: ["Hubot Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
