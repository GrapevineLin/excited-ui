import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

export default () =>
  Unocss({
    // safelist: ["i-ic-baseline-code"],
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
