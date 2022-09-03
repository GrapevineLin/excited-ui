import DefaultTheme from "vitepress/theme";
import { ExcitedUI } from "@excited-ui/core";
import "@excited-ui/core/dist/assets/index.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ExcitedUI);
  },
};
