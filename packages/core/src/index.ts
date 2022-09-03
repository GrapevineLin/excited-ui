import { createApp } from "vue";

import ExButton from "./button/index";

createApp({
  components: {
    ExButton,
  },
  template: `
        <div>
            <ExButton color="blue">蓝色按钮</ExButton>
            <ExButton color="green">绿色按钮</ExButton>
            <ExButton color="gray">灰色按钮</ExButton>
            <ExButton color="yellow">黄色按钮</ExButton>
            <ExButton color="red">红色按钮</ExButton>
        </div>

        <div>
            <ExButton color="blue" round plain icon="search" ></ExButton>
            <ExButton color="green" round plain icon="edit" ></ExButton>
            <ExButton color="gray" round plain icon="check" ></ExButton>
            <ExButton color="yellow" round plain icon="message" ></ExButton>
            <ExButton color="red" round plain icon="delete" ></ExButton>
        </div>
    `,
}).mount("#app");
