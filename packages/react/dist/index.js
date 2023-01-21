"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  atmos50: "#B6C5F9",
  atmos100: "#A4B6F7",
  atmos200: "#7E98F4",
  atmos300: "#587AF1",
  atmos400: "#335CEE",
  atmos500: "#1342E4",
  atmos600: "#1037BF",
  atmos800: "#091D65",
  atmos900: "#040E32",
  ocean50: "#D7DDF1",
  ocean100: "#C8D0EC",
  ocean200: "#AAB6E1",
  ocean300: "#8C9CD7",
  ocean400: "#6D83CC",
  ocean500: "#4F69C2",
  ocean600: "#3C55AC",
  ocean700: "#2D4082",
  ocean800: "#1F2C59",
  ocean900: "#10172F",
  fuselage50: "#D2D3E0",
  fuselage100: "#BABBCC",
  fuselage150: "#8B8CA9",
  fuselage200: "#747598",
  fuselage300: "#606282",
  fuselage400: "#4F506B",
  fuselage500: "#3D3F54",
  fuselage600: "#2C2D3C",
  fuselage700: "#1D1E2B",
  fuselage800: "#191A23",
  fuselage900: "#181922",
  red50: "#FBDADA",
  red100: "#F9C7C7",
  red200: "#F5A2A2",
  red300: "#F17E7E",
  red400: "#ED5959",
  red500: "#E93434",
  red600: "#CF1616",
  red700: "#9C1111",
  red800: "#690B0B",
  red900: "#370606",
  green50: "#BCEFCE",
  green100: "#ACECC1",
  green200: "#8AE4A9",
  green300: "#69DC91",
  green400: "#48D578",
  green500: "#2EC662",
  green600: "#23984B",
  green700: "#196B35",
  green800: "#0E3D1E",
  green900: "#041008",
  yellow50: "#FEF7DF",
  yellow100: "#FEF2CB",
  yellow200: "#FCE9A3",
  yellow300: "#FBDF7B",
  yellow400: "#FAD654",
  yellow500: "#F9CC2C",
  yellow600: "#E6B507",
  yellow700: "#B08A05",
  yellow800: "#795F03",
  yellow900: "#433402",
  blue50: "#FAFBFD",
  blue100: "#EDF2FA",
  blue200: "#DBE5F4",
  blue300: "#BCCFEA",
  blue400: "#9DB8E0",
  blue500: "#7EA2D6",
  blue600: "#5383C8",
  blue700: "#3767AD",
  blue800: "#294E82",
  blue900: "#1C3458"
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
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
