(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../actions/search.js":
/*!****************************!*\
  !*** ../actions/search.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchBand = undefined;

var _api = __webpack_require__(/*! ../settings/api */ "../settings/api.js");

var _nodeFetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchBand = exports.searchBand = function searchBand(bandName) {

    return function (dispatch) {

        dispatch({
            type: 'SEARCH_PENDING'
        });

        return (0, _nodeFetch2.default)(_api.ARTISTS_URL + '/' + bandName + '?app_id=' + _api.API_KEY, { cache: "force-cache" }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            return data && !data.error ? dispatch({
                type: 'SEARCH_FULFILLED',
                payload: data
            }) : dispatch({
                type: 'SEARCH_NO_RESULT',
                payload: null
            });
        }).catch(function (e) {
            return dispatch({
                type: 'SEARCH_REJECTED'
            });
        });
    };
};

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

var _search = __webpack_require__(/*! ../../actions/search */ "../actions/search.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _bandThumb = __webpack_require__(/*! ../blocks/bandThumb */ "../components/blocks/bandThumb.js");

var _bandThumb2 = _interopRequireDefault(_bandThumb);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _searchForm = __webpack_require__(/*! ../controls/searchForm */ "../components/controls/searchForm.js");

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsContainer = __webpack_require__(/*! ../common/resultsContainer */ "../components/common/resultsContainer.js");

var _resultsContainer2 = _interopRequireDefault(_resultsContainer);

var _placeholder = __webpack_require__(/*! ../common/placeholder */ "../components/common/placeholder.js");

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPage = (_dec = (0, _reactRedux.connect)(function (store) {
    return store.search;
}), _dec(_class = function (_PureComponent) {
    _inherits(SearchPage, _PureComponent);

    function SearchPage(props) {
        _classCallCheck(this, SearchPage);

        var _this = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this, props));

        _this.state = {
            query: null
        };

        return _this;
    }

    _createClass(SearchPage, [{
        key: 'render',
        value: function render() {
            var query = this.state.query;
            var _props = this.props,
                band = _props.band,
                pending = _props.pending,
                history = _props.history,
                fetched = _props.fetched;

            return _react2.default.createElement(
                _container2.default,
                null,
                _react2.default.createElement(_searchForm2.default, { history: history, query: query }),
                _react2.default.createElement(
                    _heading2.default,
                    null,
                    'Search result for "',
                    query,
                    '"'
                ),
                _react2.default.createElement(
                    _resultsContainer2.default,
                    { className: pending ? 'loading' : null },
                    fetched && band ? _react2.default.createElement(_bandThumb2.default, band) : _react2.default.createElement(
                        _placeholder2.default,
                        null,
                        pending ? 'Loading...' : 'No band found'
                    )
                )
            );
        }
    }], [{
        key: 'getParams',
        value: function getParams(search) {

            var params = (0, _queryString.parse)(search);

            return {
                query: params.query || ''
            };
        }
    }, {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var newQuery = SearchPage.getParams(nextProps.location.search).query;
            var thisQuery = prevState ? prevState.query : null;

            if (newQuery !== thisQuery) {
                nextProps.dispatch((0, _search.searchBand)(newQuery));
            }
            return {
                query: newQuery
            };
        }
    }]);

    return SearchPage;
}(_react.PureComponent)) || _class);
exports.default = SearchPage;

/***/ })

}]);
//# sourceMappingURL=2.js.map