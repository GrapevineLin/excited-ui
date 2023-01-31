import { defineConfigWithTheme } from "vitepress";
import { version } from "excited-ui/package.json";
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
  },
  markdown: {
    theme: "dracula",
    // theme: "material-palenight",
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
        { text: "What is ExcitedUI?", link: "/guide/what-is-excited-ui" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Stories/Origin", link: "/guide/stories" },
      ],
    },
    {
      text: "Components",
      collapsible: true,
      items: [
        { text: "Button", link: "/guide/components/button" },
        { text: "Dialog", link: "/guide/components/dialog" },
      ],
    },
  ];
}
