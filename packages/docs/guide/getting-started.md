# Getting Started

## Installation

1. Add `@excited-ui/core` and its supporting libraries

    ```bash
    # pnpm
    pnpm add @excited-ui/core && pnpm add unocss
    ```

    ```bash 
    # yarn
    yarn add @excited-ui/core && yarn add unocss
    ```

    ```bash
    # npm
    npm install @excited-ui/core && npm install unocss
    ```

ExcitedUI is based on UnoCSS, it means that it works properly with uno, so you should install it.


## Usage

1. Add UnoCSS to `vite.config.js`

```ts
import Unocss from 'unocss/vite'
export default {
    plugins: [
    Unocss(),
    ],
}
```

2. Create UnoCSS Config file `uno.config.js` in root of the project with below content:

    ```ts{14}
    import { presetThemeDefault } from "@excited-ui/core";
    import {
      defineConfig,
      presetIcons,
      presetUno,
    } from 'unocss'
    export default defineConfig({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.2,
          extraProperties: {
            height: '1.5em',
            'flex-shrink': '0',
          },
        }),
        presetThemeDefault(),
      ],
      include: [/.*\/excited-ui\.js(.*)?$/, './**/*.vue', './**/*.md'],
    })
    ```

3. Update your `main.js` file like below:

    ```js
    import { createApp } from 'vue'
    import App from './App.vue'
    import { ExcitedUI } from "@excited-ui/core";
    // UnoCSS import
    import 'uno.css'
    // import styles
    import "@excited-ui/core/dist/assets/index.css";
    // Using `app.use(ExcitedUI)` will register all the components globally
    createApp(App)
      .use(ExcitedUI)
      .mount('#app')
    ```

It's done! 🥳

### On-demand Import

First you need to install [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) lets you auto import components on demand. With this you can omit import statement and still get benefits of tree shaking.

1. install `unplugin-vue-components`

  ```bash
  pnpm add -D unplugin-vue-components
  ```
  
2. Add following in `vite.config.js`:

    ```js
    // other imports
    import Components from 'unplugin-vue-components/vite'
    import { ExComponentResolver } from '@excited-ui/core'
    export default defineConfig({
      plugins: [
        // other plugins
        Components({
          resolvers: [
            ExComponentResolver()
          ]
        }),
      ],
    
      // other config
    })
    ```

3. Now, just use components without import manually because it will be auto imported on demand ✨

    ```vue
    <template>
      <ExButton>Primary</ExButton>
    </template>
    ```