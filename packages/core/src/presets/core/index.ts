import type { Preset } from "@unocss/core";

export function presetCore(): Preset {
  return {
    name: "@excited-ui/core/preset-core",
    variants: [
      (matcher: string) => {
        if (!matcher.startsWith("i:")) return matcher;

        return {
          // slice `i:` prefix and passed to the next variants and rules
          matcher: matcher.slice(2),
          selector: (s: string) => `${s} > i`,
        };
      },
    ],
  };
}
