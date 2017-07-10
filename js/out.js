/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdHlsZS5zY3NzPzdhMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n\n\n$(document).ready(function() {\n\n  // text to animate (firstName and surName)\n  let name = $('h2.text_toAnimate');\n  // set display: block for text, which will be animated\n  name.css(\"display\", \"block\");\n  // text to type\n  let h3 = $(\"h3\");\n\n  // menu handler function invoke\n  menuHandler();\n  // animated header function invoke\n  spliter(name, \"name_animate\");\n  // type text function invoke\n  typeText(h3);\n\n  function menuHandler(){\n    $('#toggle').click(function() {\n      $(this).toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n\n    $('#overlay ul li a').click(function(event) {\n      $('#toggle').toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n  }\n\n\n  function spliter(toSplit, spanClass) {\n    let splitedText = toSplit.text().split(\"\");\n    toSplit.text(\"\");\n    for (let i = 0; i < splitedText.length; i++) {\n      let span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);\n      toSplit.append(span);\n    }\n  }\n\n  function typeText(textToType){\n    textToType.typeIt({\n      startDelay: 3000,\n      speed: 95,\n      lifeLike: true,\n      autoStart: false\n    });\n  }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyB0ZXh0IHRvIGFuaW1hdGUgKGZpcnN0TmFtZSBhbmQgc3VyTmFtZSlcbiAgbGV0IG5hbWUgPSAkKCdoMi50ZXh0X3RvQW5pbWF0ZScpO1xuICAvLyBzZXQgZGlzcGxheTogYmxvY2sgZm9yIHRleHQsIHdoaWNoIHdpbGwgYmUgYW5pbWF0ZWRcbiAgbmFtZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIC8vIHRleHQgdG8gdHlwZVxuICBsZXQgaDMgPSAkKFwiaDNcIik7XG5cbiAgLy8gbWVudSBoYW5kbGVyIGZ1bmN0aW9uIGludm9rZVxuICBtZW51SGFuZGxlcigpO1xuICAvLyBhbmltYXRlZCBoZWFkZXIgZnVuY3Rpb24gaW52b2tlXG4gIHNwbGl0ZXIobmFtZSwgXCJuYW1lX2FuaW1hdGVcIik7XG4gIC8vIHR5cGUgdGV4dCBmdW5jdGlvbiBpbnZva2VcbiAgdHlwZVRleHQoaDMpO1xuXG4gIGZ1bmN0aW9uIG1lbnVIYW5kbGVyKCl7XG4gICAgJCgnI3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnbmF2LWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnI292ZXJsYXkgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAkKCcjdG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc3BsaXRlcih0b1NwbGl0LCBzcGFuQ2xhc3MpIHtcbiAgICBsZXQgc3BsaXRlZFRleHQgPSB0b1NwbGl0LnRleHQoKS5zcGxpdChcIlwiKTtcbiAgICB0b1NwbGl0LnRleHQoXCJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdGVkVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNwYW4gPSAkKCc8c3BhbiBjbGFzcz0nICsgc3BhbkNsYXNzICsgJz48c3Bhbj4nKS50ZXh0KHNwbGl0ZWRUZXh0W2ldKTtcbiAgICAgIHRvU3BsaXQuYXBwZW5kKHNwYW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHR5cGVUZXh0KHRleHRUb1R5cGUpe1xuICAgIHRleHRUb1R5cGUudHlwZUl0KHtcbiAgICAgIHN0YXJ0RGVsYXk6IDMwMDAsXG4gICAgICBzcGVlZDogOTUsXG4gICAgICBsaWZlTGlrZTogdHJ1ZSxcbiAgICAgIGF1dG9TdGFydDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);