module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      primary: "#9c4500",
      "primary-dark": "#FFB68A",
      "on-primary": "#ffffff",
      "primary-container": "#ffdbc7",
      "on-primary-container": "#331100",
      secondary: "#765848",
      "on-secondary": "#ffffff",
      "secondary-container": "#ffdbc7",
      "on-secondary-container": "#2b160a",
      tertiary: "#636032",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#eae5ab",
      "on-tertiary-container": "#1e1c00",
      error: "#ba1b1b",
      "on-error": "#ffffff",
      "error-container": "#ffdad4",
      "on-error-container": "#410001",
      outline: "#85746c",
      background: "#fcfcfc",
      "on-background": "#201a17",
      surface: "#fcfcfc",
      "on-surface": "#201a17",
      "surface-variant": "#F4DED4",
      "on-surface-variant": "#52443d",
      "inverse-surface": "#362f2c",
      "inverse-on-surface": "#FBEEEA",
      "surface-variant-foreground": "#52443D"
    }),
    extend: {},
  },
  plugins: [],
};
