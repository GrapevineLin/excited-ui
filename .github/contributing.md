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