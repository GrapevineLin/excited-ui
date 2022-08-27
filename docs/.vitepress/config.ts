import { defineConfigWithTheme } from 'vitepress'
import { version } from '../../package.json'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  title: 'Hello ExcitedUI',
  description: 'An Excited UI Library',
  base: '/excited-ui/',
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
            { text: 'Button', link: '/button/' },
          ]
        }
      ]
    }
  }
})

function nav() {
  return [
    {
      text: version,
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
