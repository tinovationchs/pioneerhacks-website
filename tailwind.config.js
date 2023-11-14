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
        /*
         * Library:
         * Moltov Fuschia: #B02066 
         * Dark Fuschia: #59224B
         * DarkDark Fuschia: #221433
         * Dull Teal: #68A38A
         */
        theme: {
          "primary": "#fbbf24",
          "secondary": "#f97316",
          "accent": "#753158",
          "neutral": "#ebdada",
          "neutral-focus": "#B02066",
          "base-200": "#B02066",
          "base-100": "#221433",
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
