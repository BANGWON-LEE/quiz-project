import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        primary: {
          default: "#007bff", // 기본 색상
          50: "#e2f0f7", // 밝은 색상 1
          100: "#d2dbe6", // 밝은 색상 2
          200: "#c1cbd2", // 밝은 색상 3
          300: "#b0badb", // 밝은 색상 4
          400: "#a0a9c3", // 밝은 색상 5
          500: "#9098b3", // 기본 색상 (위와 동일)
          600: "#8087a3", // 어두운 색상 1
          700: "#707693", // 어두운 색상 2
          800: "#606583", // 어두운 색상 3
          900: "#505473", // 어두운 색상 4
        },
        secondary: {
          // ... (secondary 색상 변형 추가)
        },
      },
      colors: {
        primary: "#007bff", // 기본 색상
        secondary: "#6c757d", // 보조 색상
      },
    },
  },
  plugins: [],
};
export default config;
