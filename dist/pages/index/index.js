(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _parse = __webpack_require__(/*! ../../utils/parse */ "./src/utils/parse.ts");

var _parse2 = _interopRequireDefault(_parse);

__webpack_require__(/*! ./index.styl */ "./src/pages/index/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubscribeIds = ['wIZ5aqHfmpQK87nN6SiA4iov86Uy8X05yEDnp-qdgpo', 'wIZ5aqHfmpQK87nN6SiA4kPdtBsIjrbfRZM83eDmSeY', 'wIZ5aqHfmpQK87nN6SiA4okb5JDOfYQphiaRKH3gUvA'];
var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp9", "anonymousState__temp10", "loopArray26", "loopArray27", "$compid__78", "$compid__79", "curId", "maxId", "nodes", "isAside", "isSubscribe", "tab", "categorys", "cTitle", "issue", "count", "top", "cids", "openid", "tids", "weeklyStore"], _this.config = {
      navigationBarTitleText: '',
      navigationStyle: 'custom'
    }, _this.getIssues = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var content, nodes;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _taroWeapp2.default.showLoading({
                title: 'Loading . . .'
              });
              _context.next = 3;
              return _this.props.weeklyStore.getIssues(id);

            case 3:
              content = _context.sent;

              _taroWeapp2.default.hideLoading();

              if (content) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", _taroWeapp2.default.showToast({
                title: '没有数据',
                duration: 1000
              }));

            case 7:
              nodes = (0, _parse2.default)(content);

              _this.setState({
                nodes: nodes
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onCategory = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(index) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(index);
                _this.setState({
                  isAside: false,
                  nodes: []
                });
                _context2.next = 4;
                return _this.props.weeklyStore.setCategory(index);

              case 4:
                _context2.next = 6;
                return _this.getIssues(0);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onAside = function () {
      var isAside = _this.state.isAside;

      console.log('isAside', isAside);
      _this.setState({
        isAside: !isAside
      });
    }, _this.onPage = function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(p) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.getIssues(p);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.onTarget = function (src, text) {
      console.log(src, text);
      var isUnsubscribe = /Unsubscribe/i.test(text);
      var isOnweb = /Read on the Web/i.test(text);
      _this.props.weeklyStore.setTarget(src);
      if (isUnsubscribe || isOnweb) {
        _taroWeapp2.default.setClipboardData({
          data: src,
          success: function success() {
            _taroWeapp2.default.showToast({
              title: '复制成功',
              duration: 1000
            });
          }
        });
      } else {
        var id = src.match(/\/([\d]+)\//)[1];
        _taroWeapp2.default.navigateTo({
          url: "/pages/post/index?cid=" + _this.props.weeklyStore.cid + "&id=" + id
        });
      }
    }, _this.checkSetting = function () {
      _taroWeapp2.default.getSetting({
        withSubscriptions: true,
        success: function success(res) {
          console.log(res);
          if (res.subscriptionsSetting) {
            var subs = res.subscriptionsSetting;
            var tids = SubscribeIds.filter(function (v) {
              return subs[v] && subs[v] === 'accept';
            });
            _this.setState({
              tids: tids,
              count: tids.length
            });
          }
        }
      });
      _taroWeapp2.default.getStorage({
        key: 'cids',
        success: function success(res) {
          _this.setState({
            cids: res.data
          });
        }
      });
      try {
        var openid = _taroWeapp2.default.getStorageSync('openid');
        _this.setState({
          openid: openid
        });
      } catch (e) {
        _this.onLogin();
      }
    }, _this.onLogin = function () {
      _taroWeapp2.default.login({
        success: function success(res) {
          _taroWeapp2.default.request({
            url: "https://api.leeapps.cn/koa/auth?js_code=" + res.code
          }).then(function (result) {
            console.log(result);
            _this.setState({
              openid: result.data.openid
            });
            _taroWeapp2.default.setStorage({
              key: 'openid',
              data: result.data.openid
            });
          });
        }
      });
    }, _this.onSubscribe = function () {
      var isSubscribe = _this.state.isSubscribe;

      if (isSubscribe) {
        _this.onSubscribeOk();
      } else {
        _this.setState({
          isSubscribe: true
        });
      }
    }, _this.onCheck = function (id) {
      var cids = _this.state.cids;

      var cid = Number(id);
      if (cids.includes(cid)) {
        cids = cids.filter(function (v) {
          return v != cid;
        });
      } else {
        cids.push(cid);
      }
      _this.setState({
        cids: cids
      });
    }, _this.onSubscribeOk = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var cids;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              cids = _this.state.cids;

              _this.setState({
                isSubscribe: false
              });
              _context4.next = 4;
              return _taroWeapp2.default.setStorage({
                key: 'cids',
                data: cids
              });

            case 4:
              _this.onReuestMessage();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    })), _this.onReuestMessage = function () {
      var tids = _this.state.tids;

      if (tids.length) {
        return _this.saveSubscribe();
      }
      _taroWeapp2.default.requestSubscribeMessage({
        tmplIds: [SubscribeIds[0]],
        success: function success(res) {
          console.log(res);
          var _tids = SubscribeIds.filter(function (v) {
            return res[v] && res[v] === 'accept';
          });
          if (tids.length === 0) {
            return;
          }_this.setState({
            tids: _tids
          }, function () {
            return _this.saveSubscribe();
          });
        }
      });
    }, _this.saveSubscribe = function () {
      var _this$state = _this.state,
          openid = _this$state.openid,
          cids = _this$state.cids,
          tids = _this$state.tids;

      _taroWeapp2.default.request({
        method: 'POST',
        url: 'https://api.leeapps.cn/koa/weekly/subscribe',
        data: {
          openid: openid,
          cids: cids,
          tids: tids
        }
      }).then(function (result) {
        if (result.data && result.data.code === 0) {
          _taroWeapp2.default.showToast({
            title: "\u8BA2\u9605\u6210\u529F",
            icon: 'success',
            duration: 1000
          });
        } else {
          _taroWeapp2.default.showToast({
            title: "\u8BA2\u9605\u5931\u8D25,\u8BF7\u91CD\u8BD5",
            duration: 1000
          });
        }
      });
    }, _this.customComponents = ["IconFont", "RenderView"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        isAside: false,
        top: 0,
        // topH: 0,
        nodes: [],
        count: 0,
        isSubscribe: false,
        cids: [],
        openid: '',
        tids: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(ops) {
      var _props$weeklyStore = this.props.weeklyStore,
          tab = _props$weeklyStore.tab,
          categorys = _props$weeklyStore.categorys,
          cid = _props$weeklyStore.cid;

      if (ops.from === 'button') {
        // 来自页面内转发按钮
        console.log(ops.target);
      }
      var title = categorys[tab].title;
      return {
        title: "" + title,
        path: "pages/index/index?cid=" + cid,
        success: function success(res) {
          // 转发成功
          console.log("转发成功:" + JSON.stringify(res));
        },
        fail: function fail(res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        }
      };
    }
  }, {
    key: "componentWillMount",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var weeklyStore, query, cid, menuBtn, cids, tab;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                weeklyStore = this.props.weeklyStore;
                query = this.$router.params;
                cid = Number(query.cid || 1);
                menuBtn = _taroWeapp2.default.getMenuButtonBoundingClientRect();
                // const device = Taro.getSystemInfoSync()
                // console.log(device)
                // console.log(menuBtn)

                this.setState({
                  top: menuBtn.top + 2
                });

                if (weeklyStore.cTitle) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 8;
                return weeklyStore.getCategorys();

              case 8:
                cids = weeklyStore.categorys.map(function (v) {
                  return Number(v.cid);
                });
                tab = cids.indexOf(cid);

                weeklyStore.tab = tab;
                weeklyStore.cid = cid;
                weeklyStore.cTitle = weeklyStore.categorys[tab].title;
                _context5.next = 15;
                return this.getIssues(0);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentWillMount() {
        return _ref6.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {
      console.log('componentWillReact');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.checkSetting();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__78"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__78 = _genCompid2[0],
          $compid__78 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__79"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__79 = _genCompid4[0],
          $compid__79 = _genCompid4[1];

      var _state = this.__state,
          top = _state.top,
          isAside = _state.isAside,
          nodes = _state.nodes,
          count = _state.count,
          isSubscribe = _state.isSubscribe,
          cids = _state.cids;
      var _props$weeklyStore2 = this.__props.weeklyStore,
          categorys = _props$weeklyStore2.categorys,
          tab = _props$weeklyStore2.tab,
          issue = _props$weeklyStore2.issue,
          cTitle = _props$weeklyStore2.cTitle;
      // const asidePd = top + topH

      var mainColor = categorys.length ? categorys[tab].color : '';
      var maxId = categorys.length ? categorys[tab].maxId : 0;
      var curId = Number(issue.pid);
      console.log('更新 侧边栏');
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ background: mainColor, padding: top + "px 0 0 10px", height: "35px" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ padding: '10px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ marginTop: top + "px" });
      var anonymousState__temp4 = isSubscribe ? (0, _taroWeapp.internal_inline_style)({ color: mainColor }) : null;
      var anonymousState__temp9 = (0, _taroWeapp.internal_inline_style)({ background: mainColor, color: '#fff' });
      var anonymousState__temp10 = (0, _taroWeapp.internal_inline_style)({ marginLeft: '10px', background: mainColor, fontWeight: count > 0 ? 'normal' : 600, color: '#fff' });
      var loopArray26 = nodes.length ? nodes.map(function (node, index) {
        node = {
          $original: (0, _taroWeapp.internal_get_original)(node)
        };

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "egzzzzzzzz" + index, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__76 = _genCompid6[0],
            $compid__76 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "tag": node.$original.tag,
          "attrs": node.$original.attrs,
          "onClick": _this3.onTarget,
          "nodes": node.$original.nodes
        }, $compid__76, $prevCompid__76);
        return {
          $compid__76: $compid__76,
          $original: node.$original
        };
      }) : [];
      var loopArray27 = categorys.map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp6 = (0, _taroWeapp.internal_inline_style)({ background: index === tab ? mainColor : '' });
        var $loopState__temp8 = isSubscribe ? cids.includes(Number(v.$original.cid)) ? 'check1' : 'check' : null;

        var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "ehzzzzzzzz" + index, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__77 = _genCompid8[0],
            $compid__77 = _genCompid8[1];

        isSubscribe && _taroWeapp.propsManager.set({
          "name": $loopState__temp8,
          "size": 50,
          "color": index === tab ? '#fff' : mainColor
        }, $compid__77, $prevCompid__77);
        return {
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $compid__77: $compid__77,
          $original: v.$original
        };
      });
      _taroWeapp.propsManager.set({
        "name": "caidan",
        "size": 50,
        "color": "#fff"
      }, $compid__78, $prevCompid__78);
      _taroWeapp.propsManager.set({
        "name": "caidan",
        "size": 80,
        "color": mainColor
      }, $compid__79, $prevCompid__79);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        loopArray26: loopArray26,
        loopArray27: loopArray27,
        $compid__78: $compid__78,
        $compid__79: $compid__79,
        curId: curId,
        maxId: maxId,
        tab: tab,
        categorys: categorys,
        cTitle: cTitle,
        issue: issue
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["onAside", "onPage", "onCategory", "onCheck", "onSubscribe"], _class.$$componentPath = "pages/index/index", _temp2);
Index = (0, _tslib.__decorate)([(0, _mobx.inject)('weeklyStore'), _mobx.observer], Index);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-weekly\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/www/mapp-coder-weekly/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/index.styl":
/*!************************************!*\
  !*** ./src/pages/index/index.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/www/mapp-coder-weekly/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-weekly\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/utils/parse.ts":
/*!****************************!*\
  !*** ./src/utils/parse.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TagName = "([a-zA-Z_][\\w\\-\\.]*)";
var Attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var startTagOpen = new RegExp('^<' + TagName);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + TagName + '[^>]*>');
var html = void 0;
var Index = 0;
var root = void 0;
var currentParent = void 0;
var stack = [];
function init() {
  html = '';
  Index = 0;
  root = null;
  currentParent = null;
  stack = [];
}
function advance(n) {
  Index += n;
  html = html.substring(n);
}
function createASTElement(tag, attrs) {
  // 主节点
  return {
    tag: tag.toLowerCase(),
    attrs: attrs,
    // parent,
    nodes: []
  };
}
function parseStartTag() {
  //-- 第一步 首先匹配开始标签的左边开头部分 --
  var start = html.match(startTagOpen);
  if (start) {
    var match = {
      tagName: start[1],
      attrs: {},
      start: Index
    };
    advance(start[0].length);
    //-- 第二步 循环解析开始标签上的每一个属性键值对 --
    var end = void 0,
        attr = void 0;
    while (!(end = html.match(startTagClose)) && (attr = html.match(Attribute))) {
      advance(attr[0].length);
      match.attrs[attr[1]] = attr[3];
    }
    //-- 第三步 匹配到开始标签的闭合部分，至此开始标签解析结束 --
    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
    }
    // 解析完标签创建一个 AST 节点
    // let element = createASTElement(match.tagName, match.attrs, currentParent);
    var element = createASTElement(match.tagName, match.attrs);
    if (!root) {
      root = element;
    }
    if (currentParent) {
      currentParent.nodes.push(element);
    }
    // 自闭合就不用压入栈中了
    if (!match.unarySlash) {
      stack.push(element);
      currentParent = element;
    }
  }
}
function parseEndTag() {
  var end = html.match(endTag);
  if (end) {
    advance(end[0].length);
    var tagName = end[1];
    var lowerCasedTagName = tagName.toLowerCase();
    var pos = void 0;
    // 从栈顶往栈底找，直到找到栈中离的最近的同类型标签
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].tag === lowerCasedTagName) {
        break;
      }
    }
    // 如果找到了就取出对应的开始标签
    if (pos >= 0) {
      stack.length = pos;
      currentParent = stack[stack.length - 1];
    }
  }
}
function parseText(text) {
  // 文本节点，去掉空文本
  !!text.replace(/ /g, '') && currentParent.nodes.push({
    tag: 'text',
    text: text
  });
}
function parser(_html) {
  html = '<body>' + _html + '</body>';
  while (html) {
    var textEnd = html.indexOf("<");
    if (textEnd === 0) {
      //-- 匹配开始标签 --
      var startTagMatch = html.match(startTagOpen);
      if (startTagMatch) {
        parseStartTag();
        continue;
      }
      //-- 匹配结束标签 --
      var endTagMatch = html.match(endTag);
      if (endTagMatch) {
        parseEndTag();
        continue;
      }
    }
    //-- 匹配文本 --
    // let text, rest;
    var text = void 0;
    if (textEnd >= 0) {
      // rest = html.slice(textEnd);
      text = html.substring(0, textEnd);
      advance(textEnd);
    }
    if (textEnd < 0) {
      text = html;
      html = "";
    }
    text && parseText(text);
  }
  setTimeout(function () {
    return init();
  }, 1000);
  return root.nodes;
}
exports.default = parser;

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);