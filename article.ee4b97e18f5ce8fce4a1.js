/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/main.js
const url = 'https://course.vue.panfilov.academy/rest/v1/';
/* harmony default export */ const main = (url);
;// CONCATENATED MODULE: ./src/js/pages/article.js

async function getDataById(id) {
  const response = await fetch(`${main}blog/article/${id}`);
  return response.json();
}
getDataById(2).then(data => {
  console.log(data);
});
/******/ })()
;