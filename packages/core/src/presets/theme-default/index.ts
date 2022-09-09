import type { Preset } from "@unocss/core";

export const eColors = ["primary", "success", "info", "warning", "danger"];

export function presetThemeDefault(): Preset {
  return {
    name: "excited-ui/preset-theme-default",
    theme: {
      colors: {
        default: "hsl(var(--ex-default))",
        primary: "hsl(var(--ex-primary))",
        success: "hsl(var(--ex-success))",
        info: "hsl(var(--ex-info))",
        warning: "hsl(var(--ex-warning))",
        danger: "hsl(var(--ex-danger))",
        a: { border: "hsla(var(--ex-base-color),var(--ex-border-opacity))" },
      },
    },
    safelist: [
      ...eColors.map((c) => `bg-${c}`),
      ...eColors.map((c) => `hover:bg-${c}`),

      ...eColors.map((c) => `border-${c}`),
      ...eColors.map((c) => `text-${c}`),
      ...eColors.map((c) => `shadow-${c}`),
      ...eColors.map((c) => `after:bg-${c}`),
      ...eColors.map((c) => `next:checked:bg-${c}`),
      ...eColors.map((c) => `next:checked:border-${c}`),
    ],
    rules: [
      [
        "overlay",
        {
          position: "absolute",
          inset: 0,
          content: "''",
          background: "currentColor",
          opacity: 0,
        },
      ],
    ],
  };
}
