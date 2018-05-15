# vue-lazyload-akamai

> Vue.js lazy load image directive with akamai image converter

[![License](https://img.shields.io/github/license/bliblidotcom/vue-lazyload-akamai.svg?longCache=true)](https://github.com/bliblidotcom/vue-lazyload-akamai) [![version](https://img.shields.io/npm/v/vue-lazyload-akamai.svg?maxAge=3600)](https://www.npmjs.com/package/vue-lazyload-akamai)
[![downloads](https://img.shields.io/npm/dt/vue-lazyload-akamai.svg?maxAge=86400)](https://www.npmjs.com/package/vue-lazyload-akamai)

## 💅 Demo Page

https://bliblidotcom.github.io/vue-lazyload-akamai/

or via forked version here: https://mazipan.github.io/vue-lazyload-akamai/

## 🛠 Install with NPM/Yarn

```
npm install vue-lazyload-akamai
// OR
yarn add vue-lazyload-akamai
```

## 🚀 Usage Guide

**Add plugins in `main.js`**

```js
import VueLazyloadAkamai from 'vue-lazyload-akamai'
Vue.use(VueLazyloadAkamai, {optionalConfigs})
```

✅ Available configs explanations:

| Config Name       | Type     | Description             |
| ------------------|----------|-------------------------|
| `useWebp`         | Boolean  | Using webp when support |
| `quality`         | Number   | Quality of image (using scala from 10-100) |
| `width` & `height`| Number   | Width and Height of image (in pixel unit) |
| `fallback`        | String   | Global fallback image if attr `data-err` not setted |
| `placeholder`     | String   | Global placeholder image if attr `src` not setted |
| `timeout`         | Number   | Timeout before image replaced (in millisecond unit) |

**Using in your Vue components:**

```html
<img v-lazyimg
    src="{placeholder image}"
    data-src="{original image}"
    data-err="{fallback image}">
```

✅ Attribute explanations:

| Attribute Name | Description        |
| ---------------|--------------------|
| `src`          | Use as placeholder/loading image before original image was loaded. |
| `data-src`     | Original image that we want to load after user scroll to it's sections |
| `data-err`     | Image as fallback when original image failed to load (404 response) |
| `data-quality` | Quality of image (using scala from 10-100)  |
| `data-width`   | Width of image in pixel unit  |
| `data-height`  | Height of image in pixel unit  |

## 🗿 Polyfill

https://github.com/w3c/IntersectionObserver/tree/master/polyfill

## ▶️ Development

```js
// For development
npm run dev

// For build demo page
npm run build-demo

// For build library file
npm run build-lib

// Publish demo page
npm run publish-demo

// Build and publish demo
npm run dist
```


Copyright © 2018 by [Blibli.com Tech Team](https://github.com/bliblidotcom) - Released Under MIT License
