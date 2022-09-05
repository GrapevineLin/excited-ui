import type { Preset } from "@unocss/core";

export const eColors = ["primary", "success", "info", "warning", "danger"];

export function presetThemeDefault(): Preset {
  return {
    name: "@excited-ui/core/preset-theme-default",
    theme: {
      colors: {
        primary: "hsl(var(--e-primary))",
        success: "hsl(var(--e-success))",
        info: "hsl(var(--e-info))",
        warning: "hsl(var(--e-warning))",
        danger: "hsl(var(--e-danger))",
        a: { border: "hsla(var(--e-base-color),var(--e-border-opacity))" },
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
