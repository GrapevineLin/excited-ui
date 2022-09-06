import { App } from "vue";
import { ExButton } from "./Button";

export { ExButton };

export default {
  install(app: App) {
    app.component(ExButton.name, ExButton);
  },
};
