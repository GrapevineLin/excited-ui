import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  title: 'Hello ExcitedUI',
  description: 'An Excited UI Library',
  base: '/excited-ui/',
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
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

