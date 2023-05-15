/** @type {import('tailwindcss').Config} */
export default {
  content: ["./home.tsx", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF8E8E",
        purple: "#BC89FD",
        green: "#09C1A5",
        yellow: "#ECC359",
        white: "#FFFFFF",
        background: "#050736",
      },
    },
  },
  plugins: [],
};
