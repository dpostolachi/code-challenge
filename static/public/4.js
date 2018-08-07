(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../actions/events.js":
/*!****************************!*\
  !*** ../actions/events.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchEvents = undefined;

var _api = __webpack_require__(/*! ../settings/api */ "../settings/api.js");

var _utils = __webpack_require__(/*! ./utils */ "../actions/utils.js");

// Fetching band's events
var fetchEvents = exports.fetchEvents = function fetchEvents(bandName) {

    return function (dispatch) {

        dispatch({
            type: 'EVENTS_PENDING'
        });

        return (0, _utils.get)(_api.ARTISTS_URL + '/' + bandName + '/events/?app_id=' + _api.API_KEY).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            return data && !data.error ? dispatch({
                type: 'EVENTS_FULFILLED',
                payload: data
            }) : dispatch({
                type: 'EVENTS_NO_RESULT',
                payload: null
            });
        }).catch(function (e) {
            return dispatch({
                type: 'EVENTS_REJECTED'
            });
        });
    };
};

/***/ }),

/***/ "../components/blocks/eventThumb.js":
/*!******************************************!*\
  !*** ../components/blocks/eventThumb.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    width: 100%;\n    padding: 12px 12px 40px;\n    background: #080808;\n    min-height: 200px;\n    border-bottom: 1px solid #000;\n    &:nth-child(2n){\n        background: #121212;\n    }\n    &:hover{\n        background: #000000;\n    }\n    @media ', ' {\n        width: 100%;\n    }\n    @media ', ' {\n        width: 50%;\n    }\n    @media ', ' {\n        width: 33.333%;\n    }\n    @media ', ' {\n        width: 25%;\n    }\n'], ['\n    display: block;\n    width: 100%;\n    padding: 12px 12px 40px;\n    background: #080808;\n    min-height: 200px;\n    border-bottom: 1px solid #000;\n    &:nth-child(2n){\n        background: #121212;\n    }\n    &:hover{\n        background: #000000;\n    }\n    @media ', ' {\n        width: 100%;\n    }\n    @media ', ' {\n        width: 50%;\n    }\n    @media ', ' {\n        width: 33.333%;\n    }\n    @media ', ' {\n        width: 25%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 2.6rem;\n    color: ', ';\n    margin: 12px 0px;\n    line-height: 3rem;\n    text-transform: uppercase;\n'], ['\n    font-size: 2.6rem;\n    color: ', ';\n    margin: 12px 0px;\n    line-height: 3rem;\n    text-transform: uppercase;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    font-size: 1.8rem;\n    color: #E0E0E0;\n    margin: 12px 0px;\n'], ['\n    display: block;\n    font-size: 1.8rem;\n    color: #E0E0E0;\n    margin: 12px 0px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: block;\n    margin: 12px 0px 6px;\n    color: #9E9E9E;\n    font-size: 1.8rem;\n'], ['\n    display: block;\n    margin: 12px 0px 6px;\n    color: #9E9E9E;\n    font-size: 1.8rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: block;\n    margin: 6px 0px 12px;\n    color: #757575;\n    font-size: 1.5rem;\n'], ['\n    display: block;\n    margin: 6px 0px 12px;\n    color: #757575;\n    font-size: 1.5rem;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    display: block;\n    font-size: 1.8rem;\n    margin: 24px 0px 6px;\n    color: #424242;\n'], ['\n    display: block;\n    font-size: 1.8rem;\n    margin: 24px 0px 6px;\n    color: #424242;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    display: block;\n    font-size: 1.6rem;\n    line-height: 2rem;\n    > a {\n        color: #9E9E9E;\n        text-decoration: none;\n        &:hover{\n            color: ', ';\n        }\n    }\n'], ['\n    display: block;\n    font-size: 1.6rem;\n    line-height: 2rem;\n    > a {\n        color: #9E9E9E;\n        text-decoration: none;\n        &:hover{\n            color: ', ';\n        }\n    }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    display: block;\n    font-size: 1.6rem;\n    line-height: 2rem;\n    color: #757575;\n'], ['\n    display: block;\n    font-size: 1.6rem;\n    line-height: 2rem;\n    color: #757575;\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _moment = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EventContainer = _styledComponents2.default.div(_templateObject, _media.device.mobileS, _media.device.mobileL, _media.device.tablet, _media.device.laptop);

var EventName = _styledComponents2.default.div(_templateObject2, _colors.mainColor);

var EventDate = _styledComponents2.default.div(_templateObject3);

var EventCountry = _styledComponents2.default.div(_templateObject4);
var EventCity = _styledComponents2.default.div(_templateObject5);

var LinupHeading = _styledComponents2.default.div(_templateObject6);

var LineupBand = _styledComponents2.default.div(_templateObject7, _colors.mainColor);

var LineupMore = _styledComponents2.default.div(_templateObject8);

exports.default = function (props) {
    var _props$venue = props.venue,
        name = _props$venue.name,
        country = _props$venue.country,
        region = _props$venue.region,
        city = _props$venue.city,
        latitude = _props$venue.latitude,
        longitude = _props$venue.longitude,
        datetime = props.datetime,
        description = props.description,
        lineup = props.lineup;

    return _react2.default.createElement(
        EventContainer,
        null,
        _react2.default.createElement(
            EventDate,
            null,
            (0, _moment2.default)(datetime).format('D MMM')
        ),
        _react2.default.createElement(
            EventName,
            null,
            name
        ),
        _react2.default.createElement(
            EventCountry,
            null,
            country
        ),
        _react2.default.createElement(
            EventCity,
            null,
            city,
            region ? ', ' + region : null
        ),
        lineup.length > 1 ? [_react2.default.createElement(
            LinupHeading,
            { key: 0 },
            'Lineup:'
        ), lineup.splice(0, 10).map(function (band, key) {
            return _react2.default.createElement(
                LineupBand,
                { key: key },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/band/' + band },
                    band
                )
            );
        }), lineup.length > 10 ? _react2.default.createElement(
            LineupMore,
            null,
            'and ',
            lineup.length - 10,
            ' more'
        ) : null] : null
    );
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

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 2rem;\n    font-weight: normal;\n    margin: 24px 0px;\n    @media ', ' {\n      font-size: 3rem;\n      margin: 32px 0px;\n    }\n'], ['\n    font-size: 2rem;\n    font-weight: normal;\n    margin: 24px 0px;\n    @media ', ' {\n      font-size: 3rem;\n      margin: 32px 0px;\n    }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h1(_templateObject, _media.device.tablet);

/***/ }),

/***/ "../components/common/lazyImage.js":
/*!*****************************************!*\
  !*** ../components/common/lazyImage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    height: ', ';\n    width: ', ';\n    background: #E0E0E0;\n    display: inline-block;\n    vertical-align: middle;\n    > img {\n        position: relative;\n        max-width: 100%;\n        max-height: 100%;\n    }\n'], ['\n    display: block;\n    height: ', ';\n    width: ', ';\n    background: #E0E0E0;\n    display: inline-block;\n    vertical-align: middle;\n    > img {\n        position: relative;\n        max-width: 100%;\n        max-height: 100%;\n    }\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Preloader = _styledComponents2.default.div(_templateObject, function (props) {
    return props.height ? props.height + 'px' : '100px';
}, function (props) {
    return props.width ? props.width + 'px' : '100px';
});

var LazyImage = function (_PureComponent) {
    _inherits(LazyImage, _PureComponent);

    function LazyImage(props) {
        _classCallCheck(this, LazyImage);

        var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));

        var src = props.src;


        _this.state = {
            loaded: false,
            src: null
        };

        _this.Image = null;

        return _this;
    }

    _createClass(LazyImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var image = this.props.image;

            this.updateImage(image);
        }
    }, {
        key: 'updateImage',
        value: function updateImage(src) {
            var _this2 = this;

            this.Image = new Image();
            this.Image.onload = function (e) {
                _this2.setState({
                    loaded: true,
                    src: src
                });
            };
            return this.Image.src = src;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.Image.onload = null;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var image = this.props.image;

            if (prevProps.image !== image) {
                this.updateImage(image);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var title = this.props.title || '';
            var _state = this.state,
                loaded = _state.loaded,
                src = _state.src;


            return _react2.default.createElement(
                Preloader,
                this.props,
                loaded ? _react2.default.createElement('img', { src: src, alt: title, title: title }) : null
            );
        }
    }]);

    return LazyImage;
}(_react.PureComponent);

exports.default = LazyImage;

/***/ }),

/***/ "../components/common/placeholder.js":
/*!*******************************************!*\
  !*** ../components/common/placeholder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 1;\n'], ['\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    text-align: center;\n    color: #9E9E9E;\n    font-size: 2rem;\n    line-height: 160px;\n    padding: 0px 12px;\n    text-align: center;\n    width: 100%;\n    @media ', ' {\n      font-size: 3rem;\n    }\n'], ['\n    display: block;\n    text-align: center;\n    color: #9E9E9E;\n    font-size: 2rem;\n    line-height: 160px;\n    padding: 0px 12px;\n    text-align: center;\n    width: 100%;\n    @media ', ' {\n      font-size: 3rem;\n    }\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InnnerText = _styledComponents2.default.span(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, _media.device.tablet);

exports.default = function (props) {
    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(InnnerText, props)
    );
};

/***/ }),

/***/ "../components/common/resultsContainer.js":
/*!************************************************!*\
  !*** ../components/common/resultsContainer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 32px 0px;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 6px solid #E0E0E0;\n        border-top: 6px solid ', ';\n        top: 16px;\n        left: 50%;\n        margin-left: -28px;\n    }\n    @media ', ' {\n      margin: 60px 0px;\n    }\n'], ['\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 32px 0px;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 6px solid #E0E0E0;\n        border-top: 6px solid ', ';\n        top: 16px;\n        left: 50%;\n        margin-left: -28px;\n    }\n    @media ', ' {\n      margin: 60px 0px;\n    }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _spin = __webpack_require__(/*! ./spin */ "../components/common/spin.js");

var _spin2 = _interopRequireDefault(_spin);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, _spin2.default, _colors.mainColor, _media.device.tablet);

/***/ }),

/***/ "../components/common/spin.js":
/*!************************************!*\
  !*** ../components/common/spin.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n'], ['\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.keyframes)(_templateObject);

/***/ }),

/***/ "../components/pages/band.js":
/*!***********************************!*\
  !*** ../components/pages/band.js ***!
  \***********************************/
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

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-wrap: wrap;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 0px -12px;\n    background: #F5F5F5;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 6px solid #E0E0E0;\n        border-top: 6px solid ', ';\n        top: 16px;\n        left: 50%;\n        margin-left: -28px;\n    }\n    > span {\n        display: block;\n        width: 100%;\n    }\n'], ['\n    display: flex;\n    flex-wrap: wrap;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 0px -12px;\n    background: #F5F5F5;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 6px solid #E0E0E0;\n        border-top: 6px solid ', ';\n        top: 16px;\n        left: 50%;\n        margin-left: -28px;\n    }\n    > span {\n        display: block;\n        width: 100%;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    padding: 80px 0px;\n    background: ', ';\n    @media ', ' {\n        margin-top: -80px;\n    }\n'], ['\n    display: block;\n    padding: 80px 0px;\n    background: ', ';\n    @media ', ' {\n        margin-top: -80px;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    @media ', ' {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n    }\n'], ['\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    @media ', ' {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: block;\n    height: 200px;\n    width: 200px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    order: 1;\n    @media ', ' {\n        order: 0;\n        width: 200px;\n    }\n'], ['\n    display: block;\n    height: 200px;\n    width: 200px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    order: 1;\n    @media ', ' {\n        order: 0;\n        width: 200px;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: block;\n    padding: 6px 12px;\n    order: 0;\n    width: 100%;\n    margin-bottom: 24px;\n    @media ', ' {\n        order: 1;\n        width: auto;\n    }\n'], ['\n    display: block;\n    padding: 6px 12px;\n    order: 0;\n    width: 100%;\n    margin-bottom: 24px;\n    @media ', ' {\n        order: 1;\n        width: auto;\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    display: block;\n    color: #fff;\n    font-size: 3rem;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, .7);\n'], ['\n    display: block;\n    color: #fff;\n    font-size: 3rem;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, .7);\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    border-radius: 50%;\n    margin-right: 12px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    height: 42px;\n    min-width: 42px;\n    line-height: 42px;\n    font-size: 2rem;\n    padding: 0px;\n'], ['\n    border-radius: 50%;\n    margin-right: 12px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    height: 42px;\n    min-width: 42px;\n    line-height: 42px;\n    font-size: 2rem;\n    padding: 0px;\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _band = __webpack_require__(/*! ../../actions/band */ "../actions/band.js");

var _events = __webpack_require__(/*! ../../actions/events */ "../actions/events.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _eventThumb = __webpack_require__(/*! ../blocks/eventThumb */ "../components/blocks/eventThumb.js");

var _eventThumb2 = _interopRequireDefault(_eventThumb);

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _button = __webpack_require__(/*! ../common/button */ "../components/common/button.js");

var _button2 = _interopRequireDefault(_button);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _resultsContainer = __webpack_require__(/*! ../common/resultsContainer */ "../components/common/resultsContainer.js");

var _resultsContainer2 = _interopRequireDefault(_resultsContainer);

var _placeholder = __webpack_require__(/*! ../common/placeholder */ "../components/common/placeholder.js");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _spin = __webpack_require__(/*! ../common/spin */ "../components/common/spin.js");

var _spin2 = _interopRequireDefault(_spin);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

var _routePromise = __webpack_require__(/*! ../utils/routePromise */ "../components/utils/routePromise.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EventsContainer = _styledComponents2.default.div(_templateObject, _spin2.default, _colors.mainColor);

var BandWall = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.image ? 'url(' + props.image + ') #FAFAFA' : '#FAFAFA';
}, _media.device.tablet);

var BandContainer = (0, _styledComponents2.default)(_container2.default)(_templateObject3, _media.device.tablet);
var BandThumb = _styledComponents2.default.div(_templateObject4, _media.device.tablet);

var BandDetails = _styledComponents2.default.div(_templateObject5, _media.device.tablet);

var BandTitle = _styledComponents2.default.h1(_templateObject6);

var BandButton = (0, _styledComponents2.default)(_button2.default)(_templateObject7);

var BandPage = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        search: store.search,
        band: store.band,
        favourite: store.favourite,
        events: store.events
    };
}), _dec(_class = (0, _routePromise.WithRoutePromises)(_class = function (_PureComponent) {
    _inherits(BandPage, _PureComponent);

    function BandPage(props) {
        _classCallCheck(this, BandPage);

        var _this = _possibleConstructorReturn(this, (BandPage.__proto__ || Object.getPrototypeOf(BandPage)).call(this, props));

        var band = props.match.params.band;


        _this.state = {
            band: band
        };

        return _this;
    }

    _createClass(BandPage, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Reseting fetched and pending to false on unmount
            return this.props.dispatch((0, _band.resetBand)());
        }
    }, {
        key: 'toggleFavourite',
        value: function toggleFavourite(bandName) {
            var _this2 = this;

            return function (e) {

                e.preventDefault();
                _this2.props.dispatch((0, _band.pushFavouriteBand)(bandName));
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                band = _props.band,
                favourite = _props.favourite,
                events = _props.events;
            var fetched = band.fetched,
                pending = band.pending;


            if (pending || !band.data) {
                return _react2.default.createElement(
                    _container2.default,
                    null,
                    _react2.default.createElement(
                        EventsContainer,
                        { className: pending ? 'loading' : null },
                        _react2.default.createElement(
                            _placeholder2.default,
                            null,
                            !fetched ? 'Loading...' : 'Band not found'
                        )
                    )
                );
            } else {
                var _band$data = band.data,
                    image_url = _band$data.image_url,
                    thumb_url = _band$data.thumb_url,
                    name = _band$data.name,
                    facebook_page_url = _band$data.facebook_page_url;


                var inFavourites = favourite.indexOf(name) > -1;

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        BandWall,
                        { image: image_url },
                        _react2.default.createElement(
                            BandContainer,
                            null,
                            _react2.default.createElement(
                                BandThumb,
                                null,
                                _react2.default.createElement(_lazyImage2.default, { width: 200, height: 200, image: thumb_url, title: name })
                            ),
                            _react2.default.createElement(
                                BandDetails,
                                null,
                                _react2.default.createElement(
                                    BandTitle,
                                    null,
                                    name
                                ),
                                facebook_page_url ? _react2.default.createElement(
                                    'a',
                                    { href: facebook_page_url, target: '_blank' },
                                    _react2.default.createElement(
                                        BandButton,
                                        { type: 'button', background: '#ffffff', color: _colors.mainColor },
                                        _react2.default.createElement('i', { className: 'icon icon-facebook' })
                                    )
                                ) : null,
                                _react2.default.createElement(
                                    BandButton,
                                    {
                                        type: 'button', background: inFavourites ? _colors.mainColor : '#ffffff', color: inFavourites ? '#ffffff' : _colors.mainColor,
                                        onClick: this.toggleFavourite(name)
                                    },
                                    _react2.default.createElement('i', { className: 'icon icon-heart' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _container2.default,
                        null,
                        _react2.default.createElement(
                            _heading2.default,
                            null,
                            'Events'
                        ),
                        _react2.default.createElement(
                            EventsContainer,
                            { className: events.pending ? 'loading' : null },
                            events.fetched && events.data.length ? events.data.map(function (event, key) {
                                return _react2.default.createElement(_eventThumb2.default, _extends({}, event, { key: key }));
                            }) : _react2.default.createElement(
                                _placeholder2.default,
                                null,
                                !events.fetched ? 'Loading...' : 'No events found'
                            )
                        )
                    )
                );
            }
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var band = nextProps.match.params.band;

            var prevBand = prevState ? prevState.band : null;

            // Loading state of the band
            var _nextProps$band = nextProps.band,
                fetched = _nextProps$band.fetched,
                pending = _nextProps$band.pending;


            if (!fetched && !pending) {

                // typeof window === 'undefined' is used to check if it's backend
                if (typeof window === 'undefined' && nextProps.promises !== null) {
                    nextProps.promises.push(nextProps.dispatch((0, _band.fetchBand)(band)));
                    nextProps.promises.push(nextProps.dispatch((0, _events.fetchEvents)(band)));
                } else {
                    nextProps.dispatch((0, _band.fetchBand)(band));
                    nextProps.dispatch((0, _events.fetchEvents)(band));
                }
            }

            return {
                band: band
            };
        }
    }]);

    return BandPage;
}(_react.PureComponent)) || _class) || _class);
exports.default = BandPage;

/***/ }),

/***/ "../components/utils/routePromise.js":
/*!*******************************************!*\
  !*** ../components/utils/routePromise.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WithRoutePromises = exports.RoutePromiseProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	Used to collect fetch promises on backend and to resolve them
*/

var RoutePromise = (0, _react.createContext)({
	// An array of promises to be resolved on backend before render
	promises: []
});

var RoutePromiseProvider = exports.RoutePromiseProvider = RoutePromise.Provider;

var WithRoutePromises = exports.WithRoutePromises = function WithRoutePromises(Component) {
	return function (props) {
		return _react2.default.createElement(
			RoutePromise.Consumer,
			null,
			function (promises) {
				return _react2.default.createElement(Component, _extends({}, props, promises));
			}
		);
	};
};

/***/ })

}]);
//# sourceMappingURL=4.js.map