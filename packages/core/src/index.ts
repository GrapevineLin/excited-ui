import { App } from "vue";
import * as components from "./components";
import "./presets/theme-default/scss/index.scss";

export const ExcitedUI = {
  install(app: App) {
    for (const prop in components) {
      // @ts-expect-error: I want to index import using string
      const component = components[prop];
      app.component(component.name, component);
    }
  },
};

export {
  eColors as defaultThemeColors,
  presetThemeDefault,
} from "./presets/theme-default";

export * from "./components";
export { ExComponentResolver } from "./componentResolver";
