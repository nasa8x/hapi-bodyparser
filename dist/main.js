!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=7)}([function(e){e.exports={name:"hapi-bodyparser",version:"2.0.1",description:"Hapi.js body parsing plugin",main:"dist/main.js",scripts:{dev:"cross-env NODE_ENV=development webpack --progress --watch --colors",prod:"cross-env NODE_ENV=production webpack -p --progress --colors",test:"node ./src/test.js"},repository:{type:"git",url:"git+https://github.com/nasa8x/hapi-bodyparser.git"},keywords:["bodyparser","body parser","body parsing","payload parsing","payload parser","hapi","hapi bodyparser","payload"],author:"Nasa8x",license:"MIT",bugs:{url:"https://github.com/nasa8x/hapi-bodyparser/issues"},homepage:"https://github.com/nasa8x/hapi-bodyparser#readme",dependencies:{content:"^4.0.5",hapi:"^17.4.0",hoek:"^5.0.3",joi:"^13.2.0",qs:"^6.5.1"},devDependencies:{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-plugin-transform-runtime":"*","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.26.0","clean-webpack-plugin":"^0.1.19","cross-env":"^5.1.4","uglifyjs-webpack-plugin":"^1.2.5",webpack:"^4.6.0","webpack-cli":"^2.1.2","webpack-node-externals":"^1.7.2"},babel:{presets:[["es2015"],["stage-2"]]}}},function(e,t){e.exports=require("qs")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("joi")},function(e,t){e.exports=require("hoek")},function(e,t,r){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(4),i=r(3),s=r(2),a=r(1);e.exports={__SCHEMA:i.object().keys({parser:i.object(),sanitizer:i.object().keys({trim:i.boolean(),stripNullorEmpty:i.boolean()}).allow(null),body:i.boolean(),merge:i.boolean()}),__DEFAULTS:{parser:{allowDots:!0,strictNullHandling:!0},sanitizer:{trim:!0,stripNullorEmpty:!0},body:!1,merge:!1},isObject:function(e){return!(!e||!e.toString||"[object Object]"!==e.toString())},isEmptyObject:function(e){return this.isObject(e)&&0==Object.keys(e).length},isNullOrUndefined:function(e){return null===e||void 0===e},isEmpty:function(e){return!!this.isNullOrUndefined(e)||/^[\s\xa0]*$/.test(e)},isString:function(e){return"string"==typeof e||!!e&&"object"===(void 0===e?"undefined":o(e))&&"[object String]"===Object.prototype.toString.call(e)},sanitize:function(e,t){if(!this.isObject(e))return e;var r=this;return Object.keys(e).forEach(function(o){var n=e[o];r.isObject(n)?e[o]=r.sanitize(n,t):t.stripNullorEmpty&&r.isNullOrUndefined(n)?delete e[o]:r.isString(n)&&(t.trim&&(e[o]=n=n.trim()),t.stripNullorEmpty&&r.isEmpty(n)&&delete e[o])}),e},parse:function(e,t){var r=a.parse(e.payload,t.parser);if(t.merge){var o=s.parse(e.url,!1),i=a.parse(o.query,t.parser);r=n.merge(i,r)}t.sanitizer&&(r=this.sanitize(r,t.sanitizer)),t.body?e.body=r:e.payload=r}}},function(e,t){e.exports=require("content")},function(e,t,r){"use strict";var o=r(6),n=r(5);t.plugin={name:"bodyparser",version:"2.0.1",register:function(e,t){var r=n.__SCHEMA.validate(t);t=Object.assign({},n.__DEFAULTS,r.value),e.decorate("request","body",function(){return{}},{apply:!0}),e.ext("onPostAuth",function(e,i){var s=e.headers["content-type"];if(s&&/post|put|delete|patch|options/gi.test(e.method)){var a=e.route.settings.plugins.body;a&&(r=n.__SCHEMA.validate(a),t=Object.assign({},t,r.value));var p=o.type(s).mime;"multipart/form-data"!==p&&"application/x-www-form-urlencoded"!==p||n.parse(e,t)}return i.continue})},pkg:r(0)}}]);