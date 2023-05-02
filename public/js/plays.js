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

/***/ "./src/js/plays.js":
/*!*************************!*\
  !*** ./src/js/plays.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// const player = document.querySelector(\"#player\");\n// const playerBtn = document.querySelector(\"#playerBtn\");\n\n// playerBtn.addEventListener(\"click\", function () {\n//   console.log(\"hola mundo\");\n// });\n\nwindow.openModal = function (modalId) {\n  document.getElementById(modalId).style.display = \"block\";\n  document.getElementsByTagName(\"body\")[0].classList.add(\"overflow-y-hidden\");\n};\n\nwindow.closeModal = function (modalId) {\n  document.getElementById(modalId).style.display = \"none\";\n  document\n    .getElementsByTagName(\"body\")[0]\n    .classList.remove(\"overflow-y-hidden\");\n};\n\n// Close all modals when press ESC\ndocument.onkeydown = function (event) {\n  event = event || window.event;\n  if (event.keyCode === 27) {\n    document\n      .getElementsByTagName(\"body\")[0]\n      .classList.remove(\"overflow-y-hidden\");\n    let modals = document.getElementsByClassName(\"modal\");\n    Array.prototype.slice.call(modals).forEach((i) => {\n      i.style.display = \"none\";\n    });\n  }\n};\n\n\n//# sourceURL=webpack://afi/./src/js/plays.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/plays.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;