import DefaultTheme from "vitepress/theme";
import { ExcitedUI } from "@excited-ui/core";
import "uno.css";
import "@excited-ui/core/dist/assets/index.css";
import DemoBlock from "@/components/DemoBlock/index.vue";
import { App } from "vue";
import { batchRegisterComponents } from "@/utils/index";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ExcitedUI);

    app.component(DemoBlock.name, DemoBlock);

    const requireModules = [
      import.meta.glob("@/pages/**/*.vue"),
      import.meta.glob("@/components/**/*.vue"),
    ];

    batchRegisterComponents(requireModules, app);
  },
};
