/*! 
 Build based on gin-vue-admin 
 Time : 1691853746000 */
import{bj as r,c1 as t,bR as e,bk as n}from"./index-0bfeb27f.js";import{h as o,j as u,l as a,o as c,U as s}from"./_Uint8Array-d89fe392.js";var f=Object.create;const i=function(){function t(){}return function(e){if(!r(e))return{};if(f)return f(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function p(r,t){var e=-1,n=r.length;for(t||(t=Array(n));++e<n;)t[e]=r[e];return t}function v(r,n,o,u){var a=!o;o||(o={});for(var c=-1,s=n.length;++c<s;){var f=n[c],i=u?u(o[f],r[f],f,o,r):void 0;void 0===i&&(i=r[f]),a?t(o,f,i):e(o,f,i)}return o}var l=Object.prototype.hasOwnProperty;function b(t){if(!r(t))return function(r){var t=[];if(null!=r)for(var e in Object(r))t.push(e);return t}(t);var e=o(t),n=[];for(var u in t)("constructor"!=u||!e&&l.call(t,u))&&n.push(u);return n}function y(r){return u(r)?a(r,!0):b(r)}const d=c(Object.getPrototypeOf,Object);var j="object"==typeof exports&&exports&&!exports.nodeType&&exports,h=j&&"object"==typeof module&&module&&!module.nodeType&&module,m=h&&h.exports===j?n.Buffer:void 0,O=m?m.allocUnsafe:void 0;function g(r,t){if(t)return r.slice();var e=r.length,n=O?O(e):new r.constructor(e);return r.copy(n),n}function w(r){var t=new r.constructor(r.byteLength);return new s(t).set(new s(r)),t}function x(r,t){var e=t?w(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}function U(r){return"function"!=typeof r.constructor||o(r)?{}:i(d(r))}export{w as a,x as b,v as c,p as d,g as e,d as g,U as i,y as k};
