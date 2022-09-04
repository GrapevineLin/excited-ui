import { App } from "vue";
import * as components from "./components";
import "uno.css";

export const ExcitedUI = {
  install(app: App) {
    for (const prop in components) {
      // @ts-expect-error: I want to index import using string
      const component = components[prop];
      app.component(component.name, component);
    }
  },
};

export * from "./components";
