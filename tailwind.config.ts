import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-img": "url(/Hero1.jpg)"
      },
      colors: {
        "primary-orange": "var(--primary-orange)",
        "primary-blue": "var(--primary-blue)",
        "secondary-blue": "var(--secondary-blue)"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px" // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px" // border-large
        }
      },
      themes: {
        light: {},
        dark: {
          colors: {
            primary: {
              DEFAULT: "#EA5709",
              foreground: "#000000"
            },
            secondary: {
              DEFAULT: "#002444",
              foreground: "#000000"
            },
            focus: "#BEF264"
          }
        }
      }
    })
  ]
};
export default config;
