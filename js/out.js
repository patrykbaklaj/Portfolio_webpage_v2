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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n\n\n$(document).ready(function() {\n\n  // text to animate (firstName and surName)\n  let name = $('h2.text_toAnimate');\n  // text to type\n  let h3 = $(\"h3\");\n  // animated arrow\n  const arrow = $(\"#arrow_down\");\n\n  // menu handler function invoke\n  menuHandler();\n  // animated header function invoke\n  spliter(name, \"name_animate\");\n  // type text function invoke\n  typeText(h3);\n\n  // arrow Handler\n  arrowHandler();\n\n  function menuHandler(){\n    $('#toggle').click(function() {\n      $(this).toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n\n    $('#overlay ul li a').click(function(event) {\n      $('#toggle').toggleClass('toggle-active');\n      $('#overlay').toggleClass('nav-active');\n    });\n  }\n\n\n  function spliter(toSplit, spanClass) {\n    // set display: block for text, which will be animated\n    name.css(\"display\", \"block\");\n    let splitedText = toSplit.text().split(\"\");\n    toSplit.text(\"\");\n    for (let i = 0; i < splitedText.length; i++) {\n      let span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);\n      toSplit.append(span);\n    }\n  }\n\n  function typeText(textToType){\n    textToType.typeIt({\n      startDelay: 3000,\n      speed: 90,\n      lifeLike: true,\n      autoStart: false\n    });\n  }\n\n\n  function arrowHandler(){\n    let timeoutID = setTimeout(function () {\n      arrow.css(\"display\", \"block\");\n    }, 11000);\n\n    // scroll effect to second section (ABOUT)\n    arrow.on(\"click\", function(){\n      $('html,body').animate({\n        scrollTop: $(\"#about\").offset().top},\n        1000);\n        $(this).remove();\n      });\n    }\n\n  });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUciLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyB0ZXh0IHRvIGFuaW1hdGUgKGZpcnN0TmFtZSBhbmQgc3VyTmFtZSlcbiAgbGV0IG5hbWUgPSAkKCdoMi50ZXh0X3RvQW5pbWF0ZScpO1xuICAvLyB0ZXh0IHRvIHR5cGVcbiAgbGV0IGgzID0gJChcImgzXCIpO1xuICAvLyBhbmltYXRlZCBhcnJvd1xuICBjb25zdCBhcnJvdyA9ICQoXCIjYXJyb3dfZG93blwiKTtcblxuICAvLyBtZW51IGhhbmRsZXIgZnVuY3Rpb24gaW52b2tlXG4gIG1lbnVIYW5kbGVyKCk7XG4gIC8vIGFuaW1hdGVkIGhlYWRlciBmdW5jdGlvbiBpbnZva2VcbiAgc3BsaXRlcihuYW1lLCBcIm5hbWVfYW5pbWF0ZVwiKTtcbiAgLy8gdHlwZSB0ZXh0IGZ1bmN0aW9uIGludm9rZVxuICB0eXBlVGV4dChoMyk7XG5cbiAgLy8gYXJyb3cgSGFuZGxlclxuICBhcnJvd0hhbmRsZXIoKTtcblxuICBmdW5jdGlvbiBtZW51SGFuZGxlcigpe1xuICAgICQoJyN0b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJyNvdmVybGF5IHVsIGxpIGEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgJCgnI3RvZ2dsZScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCduYXYtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHNwbGl0ZXIodG9TcGxpdCwgc3BhbkNsYXNzKSB7XG4gICAgLy8gc2V0IGRpc3BsYXk6IGJsb2NrIGZvciB0ZXh0LCB3aGljaCB3aWxsIGJlIGFuaW1hdGVkXG4gICAgbmFtZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgbGV0IHNwbGl0ZWRUZXh0ID0gdG9TcGxpdC50ZXh0KCkuc3BsaXQoXCJcIik7XG4gICAgdG9TcGxpdC50ZXh0KFwiXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRlZFRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzcGFuID0gJCgnPHNwYW4gY2xhc3M9JyArIHNwYW5DbGFzcyArICc+PHNwYW4+JykudGV4dChzcGxpdGVkVGV4dFtpXSk7XG4gICAgICB0b1NwbGl0LmFwcGVuZChzcGFuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0eXBlVGV4dCh0ZXh0VG9UeXBlKXtcbiAgICB0ZXh0VG9UeXBlLnR5cGVJdCh7XG4gICAgICBzdGFydERlbGF5OiAzMDAwLFxuICAgICAgc3BlZWQ6IDkwLFxuICAgICAgbGlmZUxpa2U6IHRydWUsXG4gICAgICBhdXRvU3RhcnQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGFycm93SGFuZGxlcigpe1xuICAgIGxldCB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGFycm93LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICB9LCAxMTAwMCk7XG5cbiAgICAvLyBzY3JvbGwgZWZmZWN0IHRvIHNlY29uZCBzZWN0aW9uIChBQk9VVClcbiAgICBhcnJvdy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Fib3V0XCIpLm9mZnNldCgpLnRvcH0sXG4gICAgICAgIDEwMDApO1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);