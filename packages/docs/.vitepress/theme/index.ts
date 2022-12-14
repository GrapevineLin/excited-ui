import DefaultTheme from "vitepress/theme";
import { ExcitedUI } from "excited-ui";
import DemoBlock from "@/components/DemoBlock/index.vue";
import { App } from "vue";
import { batchRegisterComponents } from "@/utils/index";
import "uno.css";
import "./style.css";
import "excited-ui/dist/assets/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ExcitedUI);

    app.component(DemoBlock.name, DemoBlock);

    const requireModules = [
      import.meta.glob("@/demos/**/*.vue"),
      import.meta.glob("@/components/**/*.vue"),
    ];

    batchRegisterComponents(requireModules, app);
  },
};
