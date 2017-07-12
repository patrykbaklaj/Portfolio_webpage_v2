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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n\n\n$(document).ready(function() {\n\n  // text to animate (firstName and surName)\n  let name = $('h2.text_toAnimate');\n  // text to type\n  let h3 = $(\"h3\");\n  // animated arrow\n  const arrow = $(\".arrow_down\");\n\n  // menu handler function invoke\n  menuHandler();\n  // animated header function invoke\n  spliter(name, \"name_animate\");\n  // type text function invoke\n  typeText(h3);\n\n  // arrow Handler\n  arrowHandler();\n\n  function menuHandler(){\n    $('#toggle').click(function() {\n      $(this).toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n\n    $('#overlay ul li a').click(function(event) {\n      $('#toggle').toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n  }\n\n\n  function spliter(toSplit, spanClass) {\n    // set display: block for text, which will be animated\n    name.css(\"display\", \"block\");\n    let splitedText = toSplit.text().split(\"\");\n    toSplit.text(\"\");\n    for (let i = 0; i < splitedText.length; i++) {\n      let span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);\n      toSplit.append(span);\n    }\n  }\n\n  function typeText(textToType){\n    textToType.typeIt({\n      startDelay: 3000,\n      speed: 90,\n      lifeLike: true,\n      autoStart: false\n    });\n  }\n\n\n  function arrowHandler(){\n    let timeoutID = setTimeout(function () {\n      arrow.css(\"display\", \"block\");\n    }, 11000);\n\n    // scroll effect to second section (ABOUT)\n    arrow.on(\"click\", function(){\n      $('html,body').animate({\n        scrollTop: $(\"#about\").offset().top},\n        1000);\n      });\n    }\n\n  });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLE9BQU87QUFDUDs7QUFFQSxHQUFHIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgLy8gdGV4dCB0byBhbmltYXRlIChmaXJzdE5hbWUgYW5kIHN1ck5hbWUpXG4gIGxldCBuYW1lID0gJCgnaDIudGV4dF90b0FuaW1hdGUnKTtcbiAgLy8gdGV4dCB0byB0eXBlXG4gIGxldCBoMyA9ICQoXCJoM1wiKTtcbiAgLy8gYW5pbWF0ZWQgYXJyb3dcbiAgY29uc3QgYXJyb3cgPSAkKFwiLmFycm93X2Rvd25cIik7XG5cbiAgLy8gbWVudSBoYW5kbGVyIGZ1bmN0aW9uIGludm9rZVxuICBtZW51SGFuZGxlcigpO1xuICAvLyBhbmltYXRlZCBoZWFkZXIgZnVuY3Rpb24gaW52b2tlXG4gIHNwbGl0ZXIobmFtZSwgXCJuYW1lX2FuaW1hdGVcIik7XG4gIC8vIHR5cGUgdGV4dCBmdW5jdGlvbiBpbnZva2VcbiAgdHlwZVRleHQoaDMpO1xuXG4gIC8vIGFycm93IEhhbmRsZXJcbiAgYXJyb3dIYW5kbGVyKCk7XG5cbiAgZnVuY3Rpb24gbWVudUhhbmRsZXIoKXtcbiAgICAkKCcjdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCduYXYtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjb3ZlcmxheSB1bCBsaSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICQoJyN0b2dnbGUnKS50b2dnbGVDbGFzcygndG9nZ2xlLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnbmF2LWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBzcGxpdGVyKHRvU3BsaXQsIHNwYW5DbGFzcykge1xuICAgIC8vIHNldCBkaXNwbGF5OiBibG9jayBmb3IgdGV4dCwgd2hpY2ggd2lsbCBiZSBhbmltYXRlZFxuICAgIG5hbWUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIGxldCBzcGxpdGVkVGV4dCA9IHRvU3BsaXQudGV4dCgpLnNwbGl0KFwiXCIpO1xuICAgIHRvU3BsaXQudGV4dChcIlwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0ZWRUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc3BhbiA9ICQoJzxzcGFuIGNsYXNzPScgKyBzcGFuQ2xhc3MgKyAnPjxzcGFuPicpLnRleHQoc3BsaXRlZFRleHRbaV0pO1xuICAgICAgdG9TcGxpdC5hcHBlbmQoc3Bhbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHlwZVRleHQodGV4dFRvVHlwZSl7XG4gICAgdGV4dFRvVHlwZS50eXBlSXQoe1xuICAgICAgc3RhcnREZWxheTogMzAwMCxcbiAgICAgIHNwZWVkOiA5MCxcbiAgICAgIGxpZmVMaWtlOiB0cnVlLFxuICAgICAgYXV0b1N0YXJ0OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBhcnJvd0hhbmRsZXIoKXtcbiAgICBsZXQgdGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBhcnJvdy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgfSwgMTEwMDApO1xuXG4gICAgLy8gc2Nyb2xsIGVmZmVjdCB0byBzZWNvbmQgc2VjdGlvbiAoQUJPVVQpXG4gICAgYXJyb3cub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJChcIiNhYm91dFwiKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);