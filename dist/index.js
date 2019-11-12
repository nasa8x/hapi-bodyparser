module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=r(1),i=r(2),o=r(7);t.plugin={name:o.name,version:o.version,pkg:o,register:(e,t)=>{var r=i.__SCHEMA.validate(t);t=Object.assign({},i.__DEFAULTS,r.value),e.decorate("request","body",(function(){return{}}),{apply:!0}),e.ext("onPostAuth",(e,o)=>{var s=e.headers["content-type"];if(s&&/post|put|delete|patch|options/gi.test(e.method)){var a=e.route.settings.plugins.body;a&&(r=i.__SCHEMA.validate(a),t=Object.assign({},t,r.value));var p=n.type(s).mime;"multipart/form-data"!==p&&"application/x-www-form-urlencoded"!==p||i.parse(e,t)}return o.continue})}}},function(e,t){e.exports=require("@hapi/content")},function(e,t,r){"use strict";var n=r(3),i=r(4),o=r(5),s=r(6);e.exports={__SCHEMA:i.object().keys({parser:i.object(),sanitizer:i.object().keys({trim:i.boolean(),stripNullorEmpty:i.boolean()}).allow(null),body:i.boolean(),merge:i.boolean()}),__DEFAULTS:{parser:{allowDots:!0,strictNullHandling:!0},sanitizer:{trim:!0,stripNullorEmpty:!0},body:!1,merge:!1},isObject:function(e){return!(!e||!e.toString||"[object Object]"!==e.toString())},isEmptyObject:function(e){return this.isObject(e)&&0==Object.keys(e).length},isNullOrUndefined:function(e){return null==e},isEmpty:function(e){return!!this.isNullOrUndefined(e)||/^[\s\xa0]*$/.test(e)},isString:function(e){return"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e)},sanitize:function(e,t){if(!this.isObject(e))return e;var r=this;return Object.keys(e).forEach((function(n){var i=e[n];r.isObject(i)?e[n]=r.sanitize(i,t):t.stripNullorEmpty&&r.isNullOrUndefined(i)?delete e[n]:r.isString(i)&&(t.trim&&(e[n]=i=i.trim()),t.stripNullorEmpty&&r.isEmpty(i)&&delete e[n])})),e},parse:function(e,t){var r=s.parse(e.payload,t.parser);if(t.merge){var i=o.parse(e.url,!1),a=s.parse(i.query,t.parser);r=n.merge(a,r)}t.sanitizer&&(r=this.sanitize(r,t.sanitizer)),t.body?e.body=r:e.payload=r}}},function(e,t){e.exports=require("@hapi/hoek")},function(e,t){e.exports=require("@hapi/joi")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("qs")},function(e){e.exports=JSON.parse('{"name":"hapi-bodyparser","version":"2.1.1","description":"Hapi.js body parsing plugin","main":"dist/index.js","scripts":{"dev":"cross-env NODE_ENV=development webpack --progress --watch --colors","prod":"cross-env NODE_ENV=production webpack -p --progress --colors","test":"node ./src/test.js"},"repository":{"type":"git","url":"git+https://github.com/nasa8x/hapi-bodyparser.git"},"keywords":["bodyparser","body parser","body parsing","payload parsing","payload parser","hapi","hapi bodyparser","payload"],"author":"Nasa8x","license":"MIT","bugs":{"url":"https://github.com/nasa8x/hapi-bodyparser/issues"},"homepage":"https://github.com/nasa8x/hapi-bodyparser#readme","dependencies":{"@hapi/content":"^4.1.0","@hapi/hapi":"^18.4.0","@hapi/hoek":"^8.5.0","@hapi/joi":"^16.1.7","qs":"^6.9.1"},"devDependencies":{"@babel/core":"^7.7.2","@babel/preset-env":"^7.7.1","babel-loader":"^8.0.6","clean-webpack-plugin":"^3.0.0","cross-env":"^6.0.3","webpack":"^4.41.2","webpack-cli":"^3.3.10","webpack-node-externals":"^1.6.0"}}')}]);