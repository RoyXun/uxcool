# UXCool

[示例网站](http://uxcool.suning.com/)

## 支持环境

- 现代浏览器和 IE10 及以上(需要 polyfills)

## 安装

### 使用 npm 或者 yarn 安装

推荐使用 npm 或 yarn 方式进行开发.

安装 UXCool 了

```bash
npm install @cloud-sn/uxcool --save
```

```bash
yarn add @cloud-sn/uxcool
```

## 浏览器引入

在浏览器中使用`script`和 `link`标签直接引入文件, 并使用全局变量`uxcool`.

snpm 发布包内`@cloud-sn/uxcool/dist`目录下提供了`uxcool.js`,`uxcool.css`和`uxcool.min.js`, `uxcool.min.css`文件

> 不推荐使用已构建文件,无法快速获得 bug 修复,且无法按需加载

### 示例

```javascript
import Vue from 'vue';
import UxCool from '@cloud-sn/uxcool';

Vue.use(UxCool);
```

引入样式:

```javascript
import '@cloud-sn/uxcool/dist/uxcool.css';
```

#### 按需加载

```javascript
import '@cloud-sn/uxcool/es/select/style/css';
import { UxSelect, UxOption, UxOptionGroup } from '@cloud-sn/uxcool/es/select';
```

## 支持

苏宁云前端团队

> 微信群

<img alt="微信群" src="https://github.com/cloud-sn/uxcool/blob/master/static/uxcool-wx.png" width="250">

## LICENSE

UXCool is [MIT licensed](https://github.com/cloud-sn/uxcool/blob/master/LICENSE).
