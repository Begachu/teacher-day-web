/** @type {import('tailwindcss').Config} */
export default {
  content: ["./home.tsx", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FFCFE0",
        purple: "#C8E1FF",
        green: "#B8F5BF",
        yellow: "#FFEAB5",
        white: "#FFFFFF",
        background: "#050736",
      },
    },
  },
  plugins: [],
};
