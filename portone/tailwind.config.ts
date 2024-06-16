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
        "gr-front-one":
          "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(200,225,251,1) 10%, rgba(221,237,253,1) 100%)",
      },
      colors: {
        abluelight: "#2a4a6b",
        abluedark: "#031d38",
        ayellow: "#d49428",
        ayellowl: "#d4a928",
        ayellowlighter: "#e3c15d",
        ayellowdark: "#ab7315",
      },
      spacing: {
        "110": "30rem",
        "200": "50rem",
        "front-first-h": "70rem",
        "50%": "50%",
        "100%": "100%",
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
export default config;
