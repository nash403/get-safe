!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.getSafe=t():e.getSafe=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";var n=r(1);e.exports=n},function(e,t,r){"use strict";var n=function(e){return null!==e&&void 0!==e};e.exports=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];var i=e.split("."),f=i.pop(),c=function(e){return"string"==typeof e&&"()"===e.slice(-2)}(f);f=c?f.slice(0,-2):f;var p=i.reduce(function(e,t){return n(e)&&e[t]},t);return n(p)?c?p[f].apply(p,o):p[f]:void 0}}])});