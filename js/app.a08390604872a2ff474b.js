!function(t){function a(a){for(var i,r,s=a[0],l=a[1],c=a[2],h=0,p=[];h<s.length;h++)r=s[h],n[r]&&p.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(d&&d(a);p.length;)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],i=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(i=!1)}i&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={1:0},o=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/vue-lazyload-akamai/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;o.push([5,0]),e()}({10:function(t,a,e){(t.exports=e(9)(!1)).push([t.i,"body{font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;color:#000;font-size:100%}a{text-decoration:none}a,a:hover{color:#0095da}h1{margin:0;margin-left:.3em;font-size:1.5rem;color:#000}.footer,.header{width:100%;background-color:#0095da;color:#000;display:flex;align-items:center;position:fixed;left:0}.header{justify-content:space-between;height:60px;top:0}.footer{justify-content:center;height:50px;font-size:1rem;bottom:0}.ic{fill:#000;margin-right:.3em;width:30px;height:30px}.content{margin:70px 0}.content,.lazy{text-align:center}.lazy{display:block;margin:1em auto;width:350px;height:350px}.modal{position:fixed;z-index:999;top:0;left:0;overflow:auto;width:100%;height:100%;text-align:center;background-color:#000;background-color:rgba(0,0,0,.4);display:flex;align-items:center}@media screen and (min-width:640px){.modal img{width:500px;height:500px}}.btn{background:#0095da;color:#000;display:inline-block;padding:13px 20px;outline:none;border:none;text-align:center;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25em}",""])},11:function(t,a,e){var i=e(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4).default)("3a796635",i,!0,{})},5:function(t,a,e){"use strict";e.r(a);var i=e(2),n=e(3);var o=function(t){e(11)},r=Object(n.a)({name:"app",data:function(){return{modalShow:!1,indexShow:40,images:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}},methods:{openModal:function(){this.modalShow=!this.modalShow,this.modalShow&&(1===this.indexShow?this.indexShow=40:this.indexShow--)},hideModal:function(){this.modalShow=!1}}},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header header-dummy"},[t._m(0),t._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/bliblidotcom/vue-lazyload-akamai",target:"_blank",rel:"noopener",alt:"Github Link"}},[e("svg",{staticClass:"ic",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])])])]),t._v(" "),e("main",{staticClass:"content"},[e("button",{staticClass:"btn",on:{click:t.openModal}},[t._v("Open Modal Box!")]),t._v(" "),t.modalShow?e("div",{staticClass:"modal",on:{click:t.hideModal}},[e("img",{directives:[{name:"lazyimg",rawName:"v-lazyimg"}],staticClass:"lazy 0",attrs:{"data-src":"https://picsum.photos/350/350/?image="+t.indexShow}})]):t._e(),t._v(" "),t._l(t.images,function(t){return e("img",{directives:[{name:"lazyimg",rawName:"v-lazyimg"}],key:"lazy1-"+t,staticClass:"lazy 1",attrs:{"data-src":"https://picsum.photos/350/350/?image="+t,"data-quality":"40","data-width":"350","data-height":"350"}})}),t._v(" "),e("img",{directives:[{name:"lazyimg",rawName:"v-lazyimg"}],staticClass:"lazy 2",attrs:{"data-src":"assets/logo-404.png"}}),t._v(" "),e("img",{directives:[{name:"lazyimg",rawName:"v-lazyimg"}],staticClass:"lazy 3",attrs:{"data-src":"assets/logo-404.png","data-err":"assets/broken-image.jpg"}}),t._v(" "),t._l(t.images,function(t){return e("img",{directives:[{name:"lazyimg",rawName:"v-lazyimg"}],key:"lazy2-"+t,staticClass:"lazy 4",attrs:{"data-src":"https://picsum.photos/350/350/?image="+(t+21)}})})],2),t._v(" "),e("footer",{staticClass:"footer"},[t._v("\n    Copyright © 2018 by Blibli.com Tech Team\n  ")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"/vue-lazyload-akamai/",alt:"Home"}},[a("h1",[this._v("vue-lazyload-akamai")])])}],!1,o,null,null).exports,s=e(0),l=e.n(s),c={install:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp"),i=function(t,a){var i=t.dataset.src;if(!(i.indexOf("data:image")>=0)){a.useWebp&&e&&(i=l.a._withOutputFormat(i,"webp"));var n=t.dataset.quality;n?i=l.a._withQuality(i,n):a.quality&&(i=l.a._withQuality(i,a.quality));var o=t.dataset.width,r=t.dataset.height;o&&r?i=l.a._withDimension(i,o,r):a.width&&param.height&&(i=l.a._withDimension(i,a.width,a.height))}var s=new Image;s.src=i,s.onload=function(){if(i){var e=a.timeout||300;setTimeout(function(){t.src=i},e)}};var c=t.dataset.err;s.onerror=function(){c?t.src=c:a.fallback&&(t.src=a.fallback)}};t.directive("lazyimg",{bind:function(t){a.placeholder&&(t.src=a.placeholder),"IntersectionObserver"in window?function(t,a){var e=new IntersectionObserver(function(t,n){t.forEach(function(t){if(t.isIntersecting){var n=t.target;i(n,a),e.unobserve(n)}})});e.observe(t)}(t,a):i(t,a)},update:function(t){}})}};e(8);e(6),i.a.use(c,{useWebp:!0,placeholder:"assets/placeholder.png",fallback:"assets/broken-image.jpg"}),new i.a({el:"#app",render:function(t){return t(r)}})}});