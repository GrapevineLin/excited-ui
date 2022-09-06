import {
  presetUno,
  // presetAttributify,
  presetIcons,
  defineConfig,
} from "unocss";
import { presetThemeDefault } from "@excited-ui/core";

export const unoColors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const unoIcons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];

const safelist = [
  ...unoColors.map((v) => `bg-${v}`),
  ...unoColors.map((v) => `hover:bg-${v}`),
  ...unoIcons.map((v) => `i-ic-baseline-${v}`),
];

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      unit: "em",
      extraProperties: {
        height: "1.5em",
        "flex-shrink": "0",
      },
    }),
    // presetAttributify(),
    presetThemeDefault(),
  ],
  safelist,
  include: [/.*\/excited-ui\.js(.*)?$/, "./**/*.vue", "./**/*.md"],
});
