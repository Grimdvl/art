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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");













window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let calcState = {};
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(calcState);
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]', 200);
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', calcState);
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  Object(_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = triggerSelector => {
  const btns = document.querySelectorAll(triggerSelector);
  //   blocks = document.querySelectorAll(itemsSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const isActive = this.classList.contains('active-style');
      if (isActive) {
        this.classList.remove('active-style');
        this.nextElementSibling.classList.remove('active-content');
        this.nextElementSibling.style.maxHeight = '0px';
      } else {
        btns.forEach(otherBtn => {
          otherBtn.classList.remove('active-style');
          otherBtn.nextElementSibling.classList.remove('active-content');
          otherBtn.nextElementSibling.style.maxHeight = '0px';
        });
        this.classList.add('active-style');
        this.nextElementSibling.classList.add('active-content');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      }
    });
  });

  // blocks.forEach(block => {
  //     block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //     btn.addEventListener('click', function() {
  //         if (!this.classList.contains('active')) {
  //             btns.forEach(btn => {
  //                 btn.classList.remove('active', 'active-style');
  //             });
  //             this.classList.add('active', 'active-style');
  //         }
  //     });
  // });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, state) => {
  const sizeBlock = document.querySelector(sizeSelector),
    materialBlock = document.querySelector(materialSelector),
    optionsBlock = document.querySelector(optionsSelector),
    promocodeBlock = document.querySelector(promocodeSelector),
    resultBlock = document.querySelector(resultSelector);
  const calcFunc = () => {
    switch (true) {
      case sizeBlock.options[sizeBlock.selectedIndex].text === 'Выберите размер картины' || materialBlock.options[materialBlock.selectedIndex].text === 'Выберите материал картины':
        resultBlock.textContent = "Please, choose picture size and material";
        break;
      case promocodeBlock.value === 'IWANTPOPART':
        state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
        state.material = materialBlock.options[materialBlock.selectedIndex].text;
        state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
        state.withoutDiscount = '';
        state.withDiscount = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value) * 0.7;
        resultBlock.textContent = state.withDiscount;
        break;
      default:
        state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
        state.material = materialBlock.options[materialBlock.selectedIndex].text;
        state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
        state.withoutDiscount = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
        state.withDiscount = '';
        resultBlock.textContent = state.withoutDiscount;
    }
    console.log(state);
  };
  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = (selector, limit = 20) => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (selector === '[name="name"]') {
        if (e.key.match(/[^а-яё]/i) || this.value.length >= limit) {
          e.preventDefault();
        }
      } else {
        if (e.key.match(/[^а-яё]/i) && e.key !== ' ' || this.value.length >= limit) {
          e.preventDefault();
        }
      }
    });
    if (selector === '[name="name"]') {
      input.setAttribute('autocomplete', 'off');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
  }
  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  // доделать что б картикна появлялась на страничке 
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    no = document.querySelector('.portfolio-no');
  const typeFilter = markType => {
    const allMarks = wrapper.querySelectorAll('.all');
    allMarks.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  menu.addEventListener('click', e => {
    const target = e.target;
    if (target && target.tagName === 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
      const btnClass = target.classList[0];
      const markType = wrapper.querySelectorAll(`.${btnClass}`);
      typeFilter(markType);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const forms = state => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Loading...',
    success: 'Thanks! I will call you',
    failure: 'Ups! Something wrong...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        console.log(state);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ____ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    if (event.inputType === 'deleteContentBackward' && val.length <= 3) {
      this.value = matrix;
      setCursorPosition(3, this);
      return;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else if (event.type === 'focus' || event.type === 'click') {
      if (this.value.length <= 3) {
        setCursorPosition(this.value.length, this);
      } else {
        setCursorPosition(3, this);
      }
    }
  }
  function preventCursorMove(event) {
    if (event.key === 'ArrowLeft' && (this.selectionStart <= 3 || this.selectionEnd <= 3)) {
      event.preventDefault();
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('click', createMask);
    input.addEventListener('keydown', preventCursorMove);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const present = document.querySelector('.fixed-gift');
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        present.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
      present.style.marginRight = '0px';
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
        present.style.marginRight = '0px';
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll('[data-modal').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');

  // showModalByTime('.popup-consultation', 3000);
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.size-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.size-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // Scrolling with raf

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // Pure js scrolling

  // const element = document.documentElement,
  //       body = document.body;

  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (this.hash !== '') {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0;

  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }

  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };

  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;

  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }

  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };

  // calcScroll();
};
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach(card => {
  //     card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () => {
  //     cards.forEach(card => {
  //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  //     btn.remove();
  // });
  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json').then(res => createCards(res.styles)).catch(error => console.log(error));
    this.remove();
  });
  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
    paused = false;
  const items = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}
  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }
  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map