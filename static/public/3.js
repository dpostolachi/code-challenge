(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../actions/favouriteBands.js":
/*!************************************!*\
  !*** ../actions/favouriteBands.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchFavouriteBands = undefined;

var _api = __webpack_require__(/*! ../settings/api */ "../settings/api.js");

var _utils = __webpack_require__(/*! ./utils */ "../actions/utils.js");

// Fetch all favourite bands
var fetchFavouriteBands = exports.fetchFavouriteBands = function fetchFavouriteBands(bandNames) {

    return function (dispatch) {

        dispatch({
            type: 'FAVOURITE_BANDS_PENDING'
        });

        return Promise.all(bandNames.map(function (bandName) {

            return new Promise(function (resolve, reject) {

                return (0, _utils.get)(_api.ARTISTS_URL + '/' + bandName + '?app_id=' + _api.API_KEY).then(function (resp) {
                    return resp.json();
                }).then(function (data) {
                    if (data && !data.error) {
                        return resolve(data);
                    } else {
                        return reject(data.error);
                    }
                }).catch(function (e) {
                    return reject(e);
                });
            });
        })).then(function (bands) {
            if (bands) {
                return dispatch({
                    type: 'FAVOURITE_BANDS_FULFILLED',
                    payload: bands
                });
            } else {
                return dispatch({
                    type: 'FAVOURITE_BANDS_NO_RESULT',
                    payload: bands
                });
            }
        }).catch(function () {
            return dispatch({
                type: 'FAVOURITE_BANDS_REJECTED'
            });
        });
    };
};

/***/ }),

/***/ "../components/pages/favourites.js":
/*!*****************************************!*\
  !*** ../components/pages/favourites.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _queryString = __webpack_require__(/*! query-string */ "../node_modules/query-string/index.js");

var _favouriteBands = __webpack_require__(/*! ../../actions/favouriteBands */ "../actions/favouriteBands.js");

var _bandThumb = __webpack_require__(/*! ../blocks/bandThumb */ "../components/blocks/bandThumb.js");

var _bandThumb2 = _interopRequireDefault(_bandThumb);

var _searchForm = __webpack_require__(/*! ../controls/searchForm */ "../components/controls/searchForm.js");

var _searchForm2 = _interopRequireDefault(_searchForm);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _resultsContainer = __webpack_require__(/*! ../common/resultsContainer */ "../components/common/resultsContainer.js");

var _resultsContainer2 = _interopRequireDefault(_resultsContainer);

var _placeholder = __webpack_require__(/*! ../common/placeholder */ "../components/common/placeholder.js");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPage = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        favouriteBands: store.favouriteBands,
        favourite: store.favourite
    };
}), _dec(_class = function (_PureComponent) {
    _inherits(SearchPage, _PureComponent);

    function SearchPage(props) {
        _classCallCheck(this, SearchPage);

        var _this = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this, props));

        _this.state = {
            bands: []
        };

        return _this;
    }

    _createClass(SearchPage, [{
        key: 'render',
        value: function render() {
            var _props$favouriteBands = this.props.favouriteBands,
                fetched = _props$favouriteBands.fetched,
                pending = _props$favouriteBands.pending,
                data = _props$favouriteBands.data;
            var favourite = this.props.favourite;


            return _react2.default.createElement(
                _container2.default,
                null,
                _react2.default.createElement(
                    _heading2.default,
                    null,
                    'Favourite bands'
                ),
                _react2.default.createElement(
                    _resultsContainer2.default,
                    { className: pending ? 'loading' : null },
                    favourite.length === 0 ? _react2.default.createElement(
                        _placeholder2.default,
                        null,
                        'You have no favourite bands, yet'
                    ) : fetched && data ? data.map(function (band, key) {
                        return _react2.default.createElement(_bandThumb2.default, _extends({}, band, { key: key }));
                    }) : _react2.default.createElement(
                        _placeholder2.default,
                        null,
                        !fetched ? 'Loading...' : 'No events found'
                    )
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var favourite = nextProps.favourite;

            var prevBands = prevState ? prevState.bands : [];

            if (typeof window !== 'undefined' && favourite.toString() !== prevBands.toString()) {
                nextProps.dispatch((0, _favouriteBands.fetchFavouriteBands)(favourite));
            }
            return {
                bands: favourite
            };
        }
    }]);

    return SearchPage;
}(_react.PureComponent)) || _class);
exports.default = SearchPage;

/***/ })

}]);
//# sourceMappingURL=3.js.map