import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

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
]

const safelist = [
  ...unoColors.map((v) => `bg-${v}-500`),
  ...unoColors.map((v) => `hover:bg-${v}-700`),
  ...unoIcons.map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [
        presetUno(), 
        presetAttributify(),
        presetIcons(),  // 添加图标预设
        ],
  });