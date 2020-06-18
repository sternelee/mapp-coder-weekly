(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/RenderView/RenderView7"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderView7 = (_temp2 = _class = function (_Taro$Component) {
  _inherits(RenderView7, _Taro$Component);

  function RenderView7() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RenderView7);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RenderView7.__proto__ || Object.getPrototypeOf(RenderView7)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "anonymousState__temp2", "loopArray21", "$compid__62", "$compid__63", "tag", "text", "attrs", "nodes", "anonymousState__temp3"], _this.anonymousFunc1Map = {}, _this.customComponents = ["RenderViewLink", "RenderViewImg", "RenderView8"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RenderView7, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RenderView7.prototype.__proto__ || Object.getPrototypeOf(RenderView7.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__62"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__62 = _genCompid2[0],
          $compid__62 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__63"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__63 = _genCompid4[0],
          $compid__63 = _genCompid4[1];

      var props = this.__props;

      var tag = props.tag,
          attrs = props.attrs,
          nodes = props.nodes,
          onClick = props.onClick,
          _props$text = props.text,
          text = _props$text === undefined ? '' : _props$text;

      if (tag === 'a') {
        this.anonymousFunc0 = onClick;
        _taroWeapp.propsManager.set({
          "onClick": this.anonymousFunc0,
          "attrs": attrs,
          "nodes": nodes
        }, $compid__62, $prevCompid__62);
      }
      if (tag === 'img') {
        _taroWeapp.propsManager.set({
          "attrs": attrs,
          "nodes": nodes
        }, $compid__63, $prevCompid__63);
      }
      if (tag === 'text') {
        _$anonymousState__temp = (0, _taroWeapp.internal_inline_style)(attrs.style);
      }
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(attrs.style);
      var anonymousState__temp3 = ['a', 'text', 'img'].indexOf(tag) < 0;
      var loopArray21 = ['a', 'text', 'img'].indexOf(tag) < 0 ? nodes.map(function (node, index) {
        node = {
          $original: (0, _taroWeapp.internal_get_original)(node)
        };

        var _$indexKey = "dizzz" + index;

        _this2.anonymousFunc1Map[_$indexKey] = onClick;

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "djzzzzzzzz" + index, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__61 = _genCompid6[0],
            $compid__61 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "tag": node.$original.tag,
          "attrs": node.$original.attrs,
          "onClick": _this2.anonymousFunc1.bind(_this2, _$indexKey),
          "nodes": node.$original.nodes,
          "text": node.$original.text || ''
        }, $compid__61, $prevCompid__61);
        return {
          _$indexKey: _$indexKey,
          $compid__61: $compid__61,
          $original: node.$original
        };
      }) : [];
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray21: loopArray21,
        $compid__62: $compid__62,
        $compid__63: $compid__63,
        tag: tag,
        text: text,
        attrs: attrs,
        nodes: nodes,
        anonymousState__temp3: anonymousState__temp3
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }]);

  return RenderView7;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "components/RenderView/RenderView7", _temp2);


RenderView7.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
};
RenderView7.options = {
  addGlobalClass: true
};
exports.default = RenderView7;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RenderView7));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-weekly\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/www/mapp-coder-weekly/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/RenderView/RenderView7.wxml";

/***/ }),

/***/ "./src/components/RenderView/RenderView7.tsx":
/*!***************************************************!*\
  !*** ./src/components/RenderView/RenderView7.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderView7.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderView7.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************!*\
  !*** ./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./RenderView7.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/RenderView/RenderView7.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************!*\
  !*** ./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/www/mapp-coder-weekly/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./RenderView7.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-weekly\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/RenderView/RenderView7.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_www_mapp_coder_weekly_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_RenderView7_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/RenderView/RenderView7.tsx","runtime","vendors"]]]);