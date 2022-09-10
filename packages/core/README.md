<p align="center">
  <a href="https://grapevinelin.github.io/excited-ui/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://grapevinelin.github.io/excited-ui/images/logo.png" alt="Vite logo">
  </a>
</p>
<br/>

<p align="center">
  <!-- <a href="https://github.com/GrapevineLin/excited-ui">
    <img src="https://img.shields.io/badge/Excited-%E5%AD%A6%E4%B9%A0%E4%B8%80%E4%B8%AA-blue"/>
  </a> -->
  <a href="https://github.com/GrapevineLin/excited-ui">
    <img src="https://github.com/GrapevineLin/excited-ui/actions/workflows/ci.yaml/badge.svg"/>
  </a>
  <a href="https://codecov.io/gh/GrapevineLin/excited-ui" > 
    <img src="https://codecov.io/gh/GrapevineLin/excited-ui/branch/main/graph/badge.svg?token=CMRZP7WCFA"/> 
  </a>
  <a href="https://badge.fury.io/js/excited-ui"><img src="https://badge.fury.io/js/excited-ui.svg" alt="npm version" height="18"></a>
</p>

# Excited UI

一个用于练习的Vue3组件库，因为看起来很令人兴奋，所以叫 `Excited UI`

[阅读文档](https://grapevinelin.github.io/excited-ui/)

## 技术栈考量

既然是练习为目的的库，那么技术方面的选择一定有有点意思~

- Vue3：Vue的最新版本
- Vite：下一代前端构建工具
- TypeScript：工程化必备
- Pnpm：快速的，节省磁盘空间的包管理工具
- UnoCSS: 可定制性和易用性都很棒的原子化CSS
- VitePress：基于Vite的文档建设工具

- 代码一致化：编码规范： ESLint （语法） + Prettier（格式）+ Husky (提交时自动检查)；

[为什么原子化CSS选择Uno？](https://antfu.me/posts/reimagine-atomic-css-zh)

持续集成：GitHubAction

## 功能实现

- [ ] 支持完整引入和按需引入
- [x] 文档建设
- [x] 代码一致化
- [x] 单元测试
- [ ] 主题换色
- [x] monorepo

## 进阶

### Web Components

如果能编译成 `Web Components`，可以在技术栈不敏感的场景下使用，那么将实用性将大大提升，具体仍需[调研](https://cn.vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)

## 关于logo

无设计，白嫖自这个网站：https://www.shopify.com/tools/logo-maker/onboarding/preview

这个[AI绘图](https://openai.com/dall-e-2/)似乎更有趣，但是需要💰
