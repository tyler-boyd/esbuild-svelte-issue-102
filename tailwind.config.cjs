const production = !process.env.WATCH;

module.exports = {
  content: ["./src/**/*.svelte"],
  theme: {
    screens: {
      wide: "1000px",
    },
    borderRadius: {
      DEFAULT: "var(--border-radius, 4px)",
      lg: "var(--border-radius-lg, 8px)",
      full: "100%",
    },
    fontWeight: {
      normal: 400,
      medium: "var(--font-weight-medium, 500)",
      bold: "var(--font-weight-bold, 700)",
    },
    colors: {
      white: "white",
      transparent: "rgba(0,0,0,0)",
      current: "currentColor",
      brand: "var(--brand-color)",
      primary: "var(--primary-color)",
      "primary-tint": "var(--primary-tint-color)",
      secondary: "var(--secondary-color)",
      black: "var(--black-color)",
      "grey-1": "var(--grey-1-color)",
      "grey-2": "var(--grey-2-color)",
      "grey-3": "var(--grey-3-color)",
      "grey-4": "var(--grey-4-color)",
      success: "var(--success-color)",
      "success-tint": "var(--success-tint-color)",
      "warn-1": "var(--warn-1-color)",
      "warn-1-tint": "var(--warn-1-tint-color)",
      "warn-2": "var(--warn-2-color)",
      "warn-2-tint": "var(--warn-2-tint-color)",
      error: "var(--error-color)",
      "error-tint": "var(--error-tint-color)",
      info: "var(--info-color)",
      "info-tint": "var(--info-tint-color)",
      header: "var(--header-color)",
      border: "var(--grey-3-color)",
      muted: "var(--grey-1-color)",
    },
    fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      "2xl": "var(--font-size-2xl)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
