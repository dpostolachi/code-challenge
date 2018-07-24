(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "../components/controls/searchForm.js":
/*!********************************************!*\
  !*** ../components/controls/searchForm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    margin: 32px 0px;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    line-height: 64px;\n    padding: 12px;\n    > input[type="text"] {\n        display: inline-block;\n        vertical-align: middle;\n        width: calc( 100% - 64px );\n        line-height: 1;\n        border: none;\n        font-size: 2rem;\n        padding: 0px 12px;\n        background: #fff;\n        color: #212121;\n        @media ', ' {\n            font-size: 2.4rem;\n        }\n    }\n'], ['\n    display: flex;\n    margin: 32px 0px;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    line-height: 64px;\n    padding: 12px;\n    > input[type="text"] {\n        display: inline-block;\n        vertical-align: middle;\n        width: calc( 100% - 64px );\n        line-height: 1;\n        border: none;\n        font-size: 2rem;\n        padding: 0px 12px;\n        background: #fff;\n        color: #212121;\n        @media ', ' {\n            font-size: 2.4rem;\n        }\n    }\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _button = __webpack_require__(/*! ../common/button */ "../components/common/button.js");

var _button2 = _interopRequireDefault(_button);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "../node_modules/redux-form/es/index.js");

var _media = __webpack_require__(/*! ../variables/media */ "../components/variables/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchForm = _styledComponents2.default.form(_templateObject, _media.device.mobileL);

var Form = function Form(props) {
    var handleSubmit = props.handleSubmit;


    return _react2.default.createElement(
        SearchForm,
        { onSubmit: handleSubmit, method: 'get', action: '/search' },
        _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'query', placeholder: 'Try "Maroon 5"' }),
        _react2.default.createElement(
            _button2.default,
            { background: _colors.mainColor, hoverBackground: _colors.mainColorDark, type: 'submit' },
            _react2.default.createElement('i', { className: 'icon icon-search' })
        )
    );
};

var ReduxForm = (0, _reduxForm.reduxForm)({
    form: 'search',
    enableReinitialize: true,
    destroyOnUnmount: false
})(Form);

exports.default = function (props) {
    var history = props.history,
        query = props.query;

    var initialValues = {
        query: query || ''
    };

    return _react2.default.createElement(ReduxForm, {
        initialValues: initialValues,
        onSubmit: function onSubmit(data) {
            var query = data.query;

            return history.push('/search?query=' + query);
        } });
};

/***/ }),

/***/ "../components/pages/home.js":
/*!***********************************!*\
  !*** ../components/pages/home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _searchForm = __webpack_require__(/*! ../controls/searchForm */ "../components/controls/searchForm.js");

var _searchForm2 = _interopRequireDefault(_searchForm);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var history = props.history;


    return _react2.default.createElement(
        _container2.default,
        null,
        _react2.default.createElement(
            _heading2.default,
            null,
            'Search for an artist'
        ),
        _react2.default.createElement(_searchForm2.default, { history: history })
    );
};

/***/ }),

/***/ "../components/variables/media.js":
/*!****************************************!*\
  !*** ../components/variables/media.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var sizes = {
    mobileS: '320px',
    mobileL: '480px',
    tablet: '768px',
    laptop: '1024px'
};

var device = exports.device = Object.keys(sizes).reduce(function (acc, key) {
    acc[key] = '(min-width: ' + sizes[key] + ')';
    return acc;
}, {});

/***/ })

}]);
//# sourceMappingURL=1.js.map