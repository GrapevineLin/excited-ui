import { App } from "vue";
import ExButton from "@/button";

// 导出单独组件
export { ExButton };

// 编写一个插件，实现一个install方法
export const ExcitedUI = {
  install(app: App): void {
    app.component(ExButton.name, ExButton);
  },
};
