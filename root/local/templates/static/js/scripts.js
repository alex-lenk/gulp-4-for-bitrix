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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snippet_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _snippet_init_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_snippet_init_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snippet_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _snippet_dropdown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snippet_dropdown_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snippet_header_sticky_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _snippet_header_sticky_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_snippet_header_sticky_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _snippet_js_menu_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _snippet_js_menu_toggle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_snippet_js_menu_toggle_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _snippet_js_footer_toggle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _snippet_js_footer_toggle_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_snippet_js_footer_toggle_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _snippet_moving_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _snippet_moving_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_snippet_moving_js__WEBPACK_IMPORTED_MODULE_5__);

/* Инициализация плагинов */


/* Открытие и закрытие панелей */


/* BEGIN: Инициализация плавающего блока на десктопной версия странице */


/* Открывает меню на мобильных устройствах */


/* Открытие и закрытие меню в подвале сайта */


/* Перенос элементов по DOM дереву из одного места в другое */



/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function () {
  /* Слайдер на главной странице */
  $('.home-slider__list').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnDotsHover: true,
    easing: 'ease-in-out',
    edgeFriction: 0.2,
    cssEase: 'ease-in-out',
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__icon"><use xlink:href="/local/templates/static/img/sprite.svg#arrow-short"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__icon"><use xlink:href="/local/templates/static/img/sprite.svg#arrow-short"></use></svg></button>'
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(document).ready(function () {
  /* BEGIN: Раскрываем и сворачиваем список dropdown */
  let dropdown = '.js__dropdown',
      dropdownActive = 'dropdown-active',
      dropdownToggle = '.js__dropdown-toggle';
  $(dropdownToggle).click(function () {
    if (!$(this).hasClass(dropdownActive)) {
      $('.js__dropdown-toggle.dropdown-active').removeClass(dropdownActive);
      $(this).addClass(dropdownActive);
    } else {
      $(this).removeClass(dropdownActive);
    }
  });
  $('.js__dropdown-close').click(function () {
    $('.dropdown-active').removeClass(dropdownActive);
  });
  $(document).mouseup(function (e) {
    if (!$(dropdown).is(e.target) && $(dropdown).has(e.target).length === 0) {
      $(dropdownToggle).removeClass(dropdownActive);
    }
  });
  /* END */
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

if ($(window).width() >= 992) {
  let headerSticky = $('.header-sticky');

  if (headerSticky.length) {
    let elementPosition = headerSticky.offset();
    $(window).scroll(function () {
      if ($(window).scrollTop() > elementPosition.top) {
        headerSticky.addClass("header-sticky__fixed");
      } else {
        headerSticky.removeClass("header-sticky__fixed");
      }
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.js__menu-toggle').click(function () {
    $('body').toggleClass('menu-opened');
    $('.darkening-layer').fadeToggle();
  });
  $('.darkening-layer').click(function () {
    $('body').removeClass('menu-opened');
    $('.darkening-layer').fadeOut();
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

if ($(window).width() <= 991) {
  $('.js__footer-toggle').click(function () {
    $(this).toggleClass('footer-nav__open').next().slideToggle();
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

if ($(window).width() <= 991) {
  $('.nav-bar-menu').after($('.top-panel-auth'));
}

/***/ })
/******/ ]);