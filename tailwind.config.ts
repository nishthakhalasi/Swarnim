import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        background: "#f7fafc",
        darkgreen: "#43916F",
        textcolor: "#072B2C",
        TableHover: "#ECF4F1",
        TableHeader: "#BEDACF",
        Border: "#C4EDD7",
        error: "#e55642",
        darkblue: "#105F62",
        placeholder: "#072B2C",
        yellow: "#FBBD56",
        blue: "#007AFF",
        lightblue: "#CE008F",
        gold: "#e0935a",

        // Shadcn
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        font10: "10px",
        font12: "12px",
        font13: "13px",
        font14: "14px",
        font15: "15px",
        font16: "16px",
        font20: "20px",
        font22: "22px",
      },
      boxShadow: {
        login:
          "0px 4px 4px 0px rgba(22, 34, 51, 0.05), 0px 4px 24px 0px rgba(22, 34, 51, 0.05), 0px 24px 24px 0px rgba(22, 34, 51, 0.05), 0px 32px 32px 0px rgba(22, 34, 51, 0.05), 0px 120px 120px 0px rgba(22, 34, 51, 0.08)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
