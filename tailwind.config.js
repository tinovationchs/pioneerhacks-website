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
          "primary": "#fbbf24",
          "secondary": "#f97316",
          "accent": "#ef4444",
          "neutral": "#eeeeee",
          "neutral-focus": "#2b3440",
          "base-200": "#2d4059",
          "base-100": "#3f4c66",
          "info": "#2dd4bf",
          "success": "#bef264",
          "warning": "#fbbf24",
          "error": "#f87272",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
};
