/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createArticle\": () => (/* binding */ createArticle),\n/* harmony export */   \"createArticlesItem\": () => (/* binding */ createArticlesItem),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\nconst url = 'https://course.vue.panfilov.academy/rest/v1/';\nasync function getData(u) {\n  const response = await fetch(u);\n  return response.json();\n}\nfunction createArticle(className, data) {\n  const article = document.createElement('article');\n  article.className = `${className}`;\n  const articleTag = document.createElement('span');\n  articleTag.className = 'article__tag';\n  articleTag.innerHTML = `${data.tag}`;\n  article.append(articleTag);\n  const articleTitle = document.createElement('h2');\n  articleTitle.className = 'article__title';\n  articleTitle.innerHTML = `${data.title.replace(data.tag, '')}`;\n  const articleLink = document.createElement('a');\n  articleLink.href = `./article.html?article=${data.id}`;\n  articleLink.target = '_blank';\n  article.append(articleLink);\n  articleLink.append(articleTitle);\n  const articleInfo = document.createElement('div');\n  articleInfo.className = 'article__info';\n  article.append(articleInfo);\n  const articleAuthor = document.createElement('span');\n  articleAuthor.className = 'article__author';\n  articleAuthor.innerHTML = `${data.author}`;\n  articleInfo.append(articleAuthor);\n  const articleDot = document.createElement('div');\n  articleDot.className = 'article__dot';\n  articleInfo.append(articleDot);\n  const articleCreatedTime = document.createElement('span');\n  articleCreatedTime.className = 'article__time';\n  const options = {\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric'\n  };\n  const createdDate = new Date(data.createdAt * 1000);\n  articleCreatedTime.innerHTML = `${createdDate.toLocaleDateString('en-US', options)}`;\n  articleInfo.append(articleCreatedTime);\n  const articleReadTime = document.createElement('span');\n  articleReadTime.className = 'article__readtime';\n  articleReadTime.innerHTML = `( ${Math.ceil(data.readTime / 60)} mins read)`;\n  articleInfo.append(articleReadTime);\n  const articleText = document.createElement('p');\n  articleText.className = 'article__text';\n  articleText.innerHTML = `${data.description}`;\n  article.append(articleText);\n  return article;\n}\nfunction createArticlesItem(data) {\n  const articlesItem = document.createElement('div');\n  articlesItem.className = 'articles__item';\n  const articlesItemLink = document.createElement('a');\n  articlesItemLink.href = `./article.html?article=${data.id}`;\n  articlesItemLink.target = '_blank';\n  articlesItem.append(articlesItemLink);\n  const articlesPhoto = document.createElement('img');\n  articlesPhoto.className = 'articles__photo';\n  articlesPhoto.src = `${data.image}`;\n  articlesPhoto.alt = 'photo';\n  articlesItemLink.append(articlesPhoto);\n  return articlesItem;\n}\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/main.js?");

/***/ }),

/***/ "./src/js/pages/about.js":
/*!*******************************!*\
  !*** ./src/js/pages/about.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/main.scss */ \"./src/scss/main.scss\");\n\n\nconst aboutInner = document.querySelector('.about__inner');\nasync function getData(u) {\n  const response = await fetch(u);\n  return response.json();\n}\ngetData(`${_main__WEBPACK_IMPORTED_MODULE_0__.url}about`).then(data => {\n  const aboutTitle = document.createElement('h1');\n  aboutTitle.className = 'about__title';\n  aboutTitle.innerHTML = `${data.title}`;\n  aboutInner.before(aboutTitle);\n  const article = document.createElement('article');\n  article.className = 'about__article';\n  article.innerHTML = `${data.content}`;\n  aboutInner.append(article);\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/pages/about.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/scss/main.scss?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"about": 0,
/******/ 			"src_scss_main_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpackbaseconfig"] = self["webpackChunkwebpackbaseconfig"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_scss_main_scss"], () => (__webpack_require__("./src/js/pages/about.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;