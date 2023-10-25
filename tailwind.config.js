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
  daisyui: {
    themes: [
      {
        theme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
};
