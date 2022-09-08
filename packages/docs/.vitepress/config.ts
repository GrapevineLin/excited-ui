import { defineConfigWithTheme } from "vitepress";
import { version } from "@excited-ui/core/package.json";
const env = require("process").env;

const DEPLOY_BASE = env.DEPLOY_BASE ?? "/excited-ui/";

export default defineConfigWithTheme({
  lang: "zh-CN",
  title: "ExcitedUI",
  description: "An Excited UI Library",
  base: DEPLOY_BASE,
  lastUpdated: true,
  themeConfig: {
    logo: "/images/logo.png",
    nav: nav(),
    socialLinks: [
      { icon: "github", link: "https://github.com/GrapevineLin/excited-ui" },
    ],
    sidebar: {
      "/guide/": sidebarGuide(),
    },
    // sidebar:[
    //   { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    // ]
    // sidebar: {

    //   '/guide': [
    //     {
    //       text: '介绍',
    //       items: [
    //         { text: '起步', link: '/pages/Guide/GettingStarted/index' },
    //         { text: 'Button', link: '/pages/Button/index' },
    //       ]
    //     },
    //     {
    //       text: '组件',
    //       items: [
    //         { text: 'Button', link: '/pages/Button/index' },
    //       ]
    //     }
    //   ]
    // }
  },
  markdown: {
    // theme: 'dracula',
    theme: "material-palenight",
    lineNumbers: true,
  },
});

function nav() {
  return [
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/GrapevineLin/excited-ui/blob/main/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/GrapevineLin/excited-ui/blob/main/.github/contributing.md",
        },
      ],
    },
  ];
}
function sidebarGuide(): any {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        // { text: "What is VitePress?", link: "/guide/what-is-vitepress" },
        { text: "Getting Started", link: "/guide/getting-started" },
        // { text: "Configuration", link: "/guide/configuration" },
        // { text: "Deploying", link: "/guide/deploying" },
      ],
    },
    {
      text: "Components",
      collapsible: true,
      items: [{ text: "Button", link: "/guide/components/button" }],
    },
  ];
}
