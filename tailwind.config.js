module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mycustomtheme: {
          // Light mode colors
          primary: "#4f46e5",
          secondary: "#9333ea",
          accent: "#14b8a6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        mycustomdark: {
          // Dark mode colors
          primary: "#a5b4fc",
          secondary: "#d8b4fe",
          accent: "#5eead4",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-content": "#f3f4f6",
          info: "#60a5fa",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "mycustomdark", // default dark theme to use
  },
  variants: {
    extend: {},
  },
}
