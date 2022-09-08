import type { ComponentResolver } from "unplugin-vue-components";

export function ExComponentResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.match(/^A[A-Z]/)) return { name, from: "@excited-ui/core" };
    },
  };
}
