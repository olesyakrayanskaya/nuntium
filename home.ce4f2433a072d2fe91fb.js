/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://course.vue.panfilov.academy/rest/v1/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (url);

/***/ }),

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(927);

async function getData(u) {
  const response = await fetch(u);
  return response.json();
}
getData(`${_main__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}about`).then(data => {
  console.log(data, 'about');
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(927);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(818);


function createArticle(img) {
  const header = document.getElementById('headerID');
  header.style.color = 'green';
  console.log(header);
  const banner = document.createElement('div');
  banner.className = 'banner';
  banner.id = 'BANNER___ID';
  banner.style = `'background-image: url(${img})'`;
  header.appendChild(banner);
  const article = document.createElement('article');
  article.className = 'banner__article article';
  article.append(banner);
}
(0,_about__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`${_main__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}blog/featured/`).then(data => {
  console.log(data);
  const {
    tag,
    title,
    author,
    createdAt: date,
    readTime,
    description: articleText,
    image
  } = data;
  console.log(tag, title, author, date, readTime, articleText, image);
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  const createdDate = new Date(date * 1000);
  const readTimeMin = Math.ceil(readTime / 60);
  const createdDateFormated = createdDate.toLocaleDateString('en-US', options);
  const articleTitle = title.replace(tag, '');
  console.log(createdDateFormated, readTimeMin, articleTitle);
  createArticle(image);
  console.log('featured');
});
})();

/******/ })()
;