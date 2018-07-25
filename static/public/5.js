(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../components/common/heading.js":
/*!***************************************!*\
  !*** ../components/common/heading.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 2rem;\n    font-weight: normal;\n    margin: 24px 0px;\n    @media ', ' {\n      font-size: 3rem;\n      margin: 32px 0px;\n    }\n'], ['\n    font-size: 2rem;\n    font-weight: normal;\n    margin: 24px 0px;\n    @media ', ' {\n      font-size: 3rem;\n      margin: 32px 0px;\n    }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h1(_templateObject, _media.device.tablet);

/***/ }),

/***/ "../components/pages/notFound.js":
/*!***************************************!*\
  !*** ../components/pages/notFound.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    // for setting 404 status on backend
    if (props.staticContex) props.staticContext.is404 = true;

    return _react2.default.createElement(
        _container2.default,
        null,
        _react2.default.createElement(
            _heading2.default,
            null,
            '404. Page not found'
        )
    );
};

/***/ })

}]);
//# sourceMappingURL=5.js.map