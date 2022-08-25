import { createApp } from "vue";

import Button from "./button/index";

createApp({
    components:{
        Button
    },
    template:`
        <div>
            <Button color="blue">蓝色按钮</Button>
            <Button color="green">绿色按钮</Button>
            <Button color="gray">灰色按钮</Button>
            <Button color="yellow">黄色按钮</Button>
            <Button color="red">红色按钮</Button>
        </div>

        <div>
            <Button color="blue" round plain icon="search" ></Button>
            <Button color="green" round plain icon="edit" ></Button>
            <Button color="gray" round plain icon="check" ></Button>
            <Button color="yellow" round plain icon="message" ></Button>
            <Button color="red" round plain icon="delete" ></Button>
        </div>
    `
})
.mount("#app");