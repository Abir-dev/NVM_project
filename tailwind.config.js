module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greyscale-0": "var(--greyscale-0)",
        "greyscale-900": "var(--greyscale-900)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-body-lg": "var(--body-body-lg-font-family)",
        "body-body-sm": "var(--body-body-sm-font-family)",
        "body-body-xs": "var(--body-body-xs-font-family)",
        "body-body-xss": "var(--body-body-xss-font-family)",
        "button-button-medium": "var(--button-button-medium-font-family)",
        "button-button-small": "var(--button-button-small-font-family)",
        "heading-h2-bold": "var(--heading-h2-bold-font-family)",
        "heading-h2-semibold": "var(--heading-h2-semibold-font-family)",
        "heading-h6-semibold": "var(--heading-h6-semibold-font-family)",
        "text-text-2-medium": "var(--text-text-2-medium-font-family)",
        "text-text-3-medium": "var(--text-text-3-medium-font-family)",
        "text-text-4-reguler": "var(--text-text-4-reguler-font-family)",
        "text-text-4-semibold": "var(--text-text-4-semibold-font-family)",
        "text-text-5-medium": "var(--text-text-5-medium-font-family)",
        "text-text-5-reguler": "var(--text-text-5-reguler-font-family)",
        "text-text-5-semibold": "var(--text-text-5-semibold-font-family)",
        "text-text-6-medium": "var(--text-text-6-medium-font-family)",
        "text-text-6-reguler": "var(--text-text-6-reguler-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
