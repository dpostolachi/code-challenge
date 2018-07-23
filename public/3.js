(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../actions/artist.js":
/*!****************************!*\
  !*** ../actions/artist.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchArtist = undefined;

var _api = __webpack_require__(/*! ../settings/api */ "../settings/api.js");

var _nodeFetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/index.js");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchArtist = exports.searchArtist = function searchArtist(artistName) {

    return function (dispatch) {

        dispatch({
            type: 'SEARCH_PENDING'
        });

        return get(_api.ARTISTS_URL + '/' + artistName, {
            params: {
                app_id: _api.API_KEY
            }
        }).then(function (resp) {
            console.log(resp);
        });
    };
};

/***/ }),

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

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 3rem;\n    font-weight: normal;\n    margin: 32px 0px;\n'], ['\n    font-size: 3rem;\n    font-weight: normal;\n    margin: 32px 0px;\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h1(_templateObject);

/***/ }),

/***/ "../components/pages/search.js":
/*!*************************************!*\
  !*** ../components/pages/search.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _queryString = __webpack_require__(/*! query-string */ "../node_modules/query-string/index.js");

var _artist = __webpack_require__(/*! ../../actions/artist */ "../actions/artist.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPage = (_dec = (0, _reactRedux.connect)(function (store) {
    return store.search;
}), _dec(_class = function (_PureComponent) {
    _inherits(SearchPage, _PureComponent);

    function SearchPage() {
        _classCallCheck(this, SearchPage);

        return _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).apply(this, arguments));
    }

    _createClass(SearchPage, [{
        key: 'getParams',
        value: function getParams() {

            var params = (0, _queryString.parse)(this.props.location.search);

            return {
                query: params.query || ''
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _getParams = this.getParams(),
                query = _getParams.query;

            this.props.dispatch((0, _artist.searchArtist)(query));
        }
    }, {
        key: 'render',
        value: function render() {

            console.log(this.getParams());

            var _getParams2 = this.getParams(),
                query = _getParams2.query;

            return _react2.default.createElement(
                _container2.default,
                null,
                _react2.default.createElement(
                    _heading2.default,
                    null,
                    'Search result for "',
                    query,
                    '"'
                )
            );
        }
    }]);

    return SearchPage;
}(_react.PureComponent)) || _class);
exports.default = SearchPage;

/***/ }),

/***/ "../node_modules/encoding/lib sync recursive":
/*!*****************************************!*\
  !*** ../node_modules/encoding/lib sync ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../node_modules/encoding/lib sync recursive";

/***/ }),

/***/ "../settings/api.js":
/*!**************************!*\
  !*** ../settings/api.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = exports.API_KEY = 'anykey';
// export const API_KEY = 'eyJUb2tlblR5cGUiOiJBUEkiLCJzYWx0IjoiZmMwNjhjYzItNGY3NC00ZTI2LThmZjMtY2M5ZWQwNWIzZDFhIiwiYWxnIjoiSFM1MTIifQ.eyJqdGkiOiJjNzRhNTlmOC1kYjE2LTQzNWEtYWIzYS1hNjc4MzcwYjU5YzgiLCJpYXQiOjE1MzIzNTkwMTd9.H65fOpHvQPgeAG3sLViMXXYVao8GpLMn6paB5gSfQgkkjxjJykL8RPhivoORlrfKaiHK2GZIoanJAWRHDxbgjQ'

var ENDPOINT = exports.ENDPOINT = 'https://rest.bandsintown.com';
var ARTISTS_URL = exports.ARTISTS_URL = ENDPOINT + '/artists';

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=3.js.map