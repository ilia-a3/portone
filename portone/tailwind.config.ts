import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        front: "url('/front-maybe.bmp')",
      },
      colors: {
        abluelight: "#2a4a6b",
        abluedark: "#031d38",
        ayellow: "#d49428",
        ayellowl: "#d4a928",
        ayellowdark: "#ab7315",
      },
      spacing: {
        "110": "30rem",
        "200": "50rem",
        "50%": "50%",
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
export default config;
