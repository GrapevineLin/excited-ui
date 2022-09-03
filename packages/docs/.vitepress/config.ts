import { defineConfigWithTheme } from 'vitepress'
// import { version } from '../docs/package.json'
const env = require('process').env

const DEPLOY_BASE = env.DEPLOY_BASE ??  '/excited-ui/'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  title: 'ExcitedUI',
  description: 'An Excited UI Library',
  base: DEPLOY_BASE,
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GrapevineLin/excited-ui' }
    ],
    sidebar: {
      '/': [
        {
          text: '组件',
          items: [ 
            { text: 'Button', link: '/components/button/index' },
          ]
        }
      ]
    }
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

function nav() {
  return [
    {
      text: 'version',
      items: [
        {
          text: '版本日志',
          link: 'https://github.com/GrapevineLin/excited-ui/blob/main/CHANGELOG.md'
        },
        {
          text: '贡献代码',
          link: 'https://github.com/GrapevineLin/excited-ui/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}
