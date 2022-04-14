# vue-mooc-ui 组件库

## 快速开始

### 1. 安装组件库

```bash
npm install vue-mooc-ui --save
```

### 2. 引用组件库

```javascript
// main.js

// 全部引入
import 'vue-mooc-ui/dist/css/index.css'
import MUI from 'vue-mooc-ui'
Vue.use(MUI)

// 按需引用
import 'vue-mooc-ui/dist/css/demo.css'
import { Demo } from 'vue-mooc-ui'
Vue.use(Demo)
```

## npm发布命令

```bash
# 还原npm源地址，而非淘宝镜像
npm login

# 不能重名，旧版本不能覆盖新版本
npm publish
```

## vuepress编写组件文档

## Q/A

### 为什么别的第三方组件库我们使用`Vue.use(xxx)`直接引入就能用，而自定义组件会报组件未注册呢？

因为 `Vue.use()` 默认调用 组件的 `install` 方法，这个方法里真正执行 `Vue.component()`

### 前端模块化

常见的有三种模块化方案： CommonJS、AMD、UMD

#### CommonJS

1. 文件作用域
2. 缓存
3. 同步加载

适用于服务端
问题： 同步加载意味着会阻塞脚本，不适用于浏览器

#### AMD

适用于浏览器
1. 文件作用域
2. 异步加载

#### UMD

前后端跨平台的模块化解决方案

实现原理：

1. 先判断是否支持Node.js模块(exports是否存在)，存在则使用Node模块格式
2. 再判断是否支持AMD(define 是否存在)，存在则使用AMD方式加载模块
3. 前两个都不存在，则将模块公开到全局(window 或 global)
