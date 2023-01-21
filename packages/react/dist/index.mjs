var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// ../tokens/dist/index.mjs
var colors = {
  atmos: {
    50: "#B6C5F9",
    100: "#A4B6F7",
    200: "#7E98F4",
    300: "#587AF1",
    400: "#335CEE",
    500: "#1342E4",
    600: "#1037BF",
    700: "#0D2C99",
    800: "#091D65",
    900: "#040E32"
  },
  ocean: {
    50: "#D7DDF1",
    100: "#C8D0EC",
    200: "#AAB6E1",
    300: "#8C9CD7",
    400: "#6D83CC",
    500: "#4F69C2",
    600: "#3C55AC",
    700: "#2D4082",
    800: "#1F2C59",
    900: "#10172F"
  },
  fuselage: {
    50: "#D2D3E0",
    100: "#BABBCC",
    150: "#8B8CA9",
    200: "#747598",
    300: "#606282",
    400: "#4F506B",
    500: "#3D3F54",
    600: "#2C2D3C",
    700: "#1D1E2B",
    800: "#191A23",
    900: "#181922"
  },
  semantic: {
    red: {
      50: "#FBDADA",
      100: "#F9C7C7",
      200: "#F5A2A2",
      300: "#F17E7E",
      400: "#ED5959",
      500: "#E93434",
      600: "#CF1616",
      700: "#9C1111",
      800: "#690B0B",
      900: "#370606"
    },
    green: {
      50: "#BCEFCE",
      100: "#ACECC1",
      200: "#8AE4A9",
      300: "#69DC91",
      400: "#48D578",
      500: "#2EC662",
      600: "#23984B",
      700: "#196B35",
      800: "#0E3D1E",
      900: "#041008"
    },
    yellow: {
      50: "#FEF7DF",
      100: "#FEF2CB",
      200: "#FCE9A3",
      300: "#FBDF7B",
      400: "#FAD654",
      500: "#F9CC2C",
      600: "#E6B507",
      700: "#B08A05",
      800: "#795F03",
      900: "#433402"
    },
    blue: {
      50: "#FAFBFD",
      100: "#EDF2FA",
      200: "#DBE5F4",
      300: "#BCCFEA",
      400: "#9DB8E0",
      500: "#7EA2D6",
      600: "#5383C8",
      700: "#3767AD",
      800: "#294E82",
      900: "#1C3458"
    }
  }
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  head: "Poppins, sans-serif",
  default: "Nunito-sans, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  xs: "1px",
  sm: "2px",
  base: "4px",
  md: "6px",
  lg: "8x",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "#0D2C99",
  color: "#fff",
  borderRadius: "$md",
  padding: "$4",
  border: 0
});
export {
  Button
};
