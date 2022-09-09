import type { ComponentResolver } from "unplugin-vue-components";

export function ExComponentResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (componentName: string) => {
      if (componentName.match(/^Ex[A-Z]/))
        return { name: componentName, from: "excited-ui" };
    },
  };
}
