# ExcitedUI Contributing Guide

Hi! 很高兴你有兴趣给ExcitedUI贡献代码🌈请先查看代码规范

## 目录规范

```tree
.
├── config              # 配置文件
├── coverage            # 覆盖率报告
├── demo                # 代码范例
├── docs                # 文档
├── node_modules  
├── scripts              # 脚本 发布、提交信息检查
├── src                  # 组件代码
└── types                # TS类型定义
```

## 文件命名规范
以一个组件为例，代码规则如下：

```tree
├── src                 # 组件代码
    └── button          # 组件包名
         ├── index.ts   # 组件入口
         ├── Button.tsx  # 组件代码  
         └── __tests__   # 测试用例
                  └── Button.spec.ts   
```

- 包名：小写 + 中划线；
- 统一入口文件： index.ts；
- 组件代码： 大驼峰；
- 测试用例代码 ： 测试对象名+ .spec.ts。

## Commit message 指引

- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- chore: 非代码修改, 比如依赖管理或辅助工具的变动
- ci: 与CI（持续集成服务）有关的改动
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- build: 构建项目
- scope: commit 影响的范围, 比如: route, component, utils, build...
- revert: git revert
- perf: 提高性能的改动