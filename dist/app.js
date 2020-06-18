require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _counter = __webpack_require__(/*! ./store/counter */ "./src/store/counter.ts");

var _counter2 = _interopRequireDefault(_counter);

var _weekly = __webpack_require__(/*! ./store/weekly */ "./src/store/weekly.ts");

var _weekly2 = _interopRequireDefault(_weekly);

__webpack_require__(/*! ./app.styl */ "./src/app.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../node_modules/taro-ui/dist/style/components/button.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var store = {
  counterStore: _counter2.default,
  weeklyStore: _weekly2.default
};
(0, _mobx.setStore)(store);
;

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/index/index', 'pages/post/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/app.styl":
/*!**********************!*\
  !*** ./src/app.styl ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.tsx?taro&type=script&parse=ENTRY& */ "./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./app.tsx?taro&type=script&parse=ENTRY& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/store/counter.ts":
/*!******************************!*\
  !*** ./src/store/counter.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var counterStore = (0, _mobx.observable)({
  counter: 0,
  counterStore: function counterStore() {
    this.counter++;
  },
  increment: function increment() {
    this.counter++;
  },
  decrement: function decrement() {
    this.counter--;
  },
  incrementAsync: function incrementAsync() {
    var _this = this;

    setTimeout(function () {
      _this.counter++;
    }, 1000);
  }
});
exports.default = counterStore;

/***/ }),

/***/ "./src/store/weekly.ts":
/*!*****************************!*\
  !*** ./src/store/weekly.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var weeklyStore = (0, _mobx.observable)({
  categorys: [],
  tab: 0,
  cid: 1,
  issue: {
    pid: '',
    title: '',
    content: '',
    // content_cn: '',
    date: ''
  },
  isCN: false,
  cTitle: '',
  targetPost: '',
  setMaxPid: function setMaxPid(pid) {
    this.categorys[this.tab].maxId = pid;
  },
  setCategory: function setCategory(id) {
    this.tab = id;
    this.cid = this.categorys[id].cid;
    this.cTitle = this.categorys[id].title;
  },
  setCN: function setCN(bol) {
    this.isCN = bol;
  },
  getCategorys: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _ref2, data;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _taroWeapp2.default.request({
                url: 'https://api.leeapps.cn/cooperpress-categories'
              });

            case 2:
              _ref2 = _context.sent;
              data = _ref2.data;

              this.categorys = data.sort(function (a, b) {
                return a.oid - b.oid;
              }).map(function (v) {
                return _extends({}, v, { maxId: 0 });
              });
              this.cTitle = this.categorys[0].title;

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getCategorys() {
      return _ref.apply(this, arguments);
    }

    return getCategorys;
  }(),
  getIssues: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var queryPid, _ref4, data, result;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queryPid = id ? '&pid=' + id : '';
              _context2.next = 3;
              return _taroWeapp2.default.request({
                url: 'https://api.leeapps.cn/cooperpresses?category=' + this.cid + queryPid + '&_sort=pid:DESC&_limit=1'
              });

            case 3:
              _ref4 = _context2.sent;
              data = _ref4.data;
              result = data[0];

              if (result) {
                _context2.next = 10;
                break;
              }

              _context2.next = 9;
              return this.getFetch(id);

            case 9:
              result = _context2.sent;

            case 10:
              if (!result) {
                _context2.next = 16;
                break;
              }

              this.issue = result;
              if (id === 0) {
                this.setMaxPid(Number(result.pid));
              }

              if (!(this.isCN && result.content_cn)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt('return', result.content_cn.replace(/(amp;)/g, ''));

            case 15:
              return _context2.abrupt('return', result.content.replace(/(amp;)/g, ''));

            case 16:
              return _context2.abrupt('return', '');

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getIssues() {
      return _ref3.apply(this, arguments);
    }

    return getIssues;
  }(),
  getFetch: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
      var queryPid, _ref6, data;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryPid = id ? '&id=' + id : '';
              _context3.next = 3;
              return _taroWeapp2.default.request({
                url: 'https://api.leeapps.cn/koa/weekly/fetch?category=' + this.cid + queryPid
              });

            case 3:
              _ref6 = _context3.sent;
              data = _ref6.data;
              return _context3.abrupt('return', data[0]);

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getFetch(_x2) {
      return _ref5.apply(this, arguments);
    }

    return getFetch;
  }(),
  getPost: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
      var _ref8, data, result;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _taroWeapp2.default.request({
                url: 'https://api.leeapps.cn/cooperpress-posts?category=' + this.cid + '&pid=' + id + '&_limit=1'
              });

            case 2:
              _ref8 = _context4.sent;
              data = _ref8.data;
              result = data[0];

              if (result) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return this.fetchPost(id);

            case 8:
              result = _context4.sent;

            case 9:
              return _context4.abrupt('return', result);

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getPost(_x3) {
      return _ref7.apply(this, arguments);
    }

    return getPost;
  }(),
  fetchPost: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
      var _ref10, data;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _taroWeapp2.default.request({
                url: 'https://api.leeapps.cn/koa/weekly/post?category=' + this.cid + '&id=' + id + '&type=markdown'
              });

            case 2:
              _ref10 = _context5.sent;
              data = _ref10.data;
              return _context5.abrupt('return', data[0]);

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function fetchPost(_x4) {
      return _ref9.apply(this, arguments);
    }

    return fetchPost;
  }(),
  setTarget: function setTarget(url) {
    this.targetPost = url;
  }
});
exports.default = weeklyStore;

/***/ })

},[["./src/app.tsx","runtime","vendors"]]]);;