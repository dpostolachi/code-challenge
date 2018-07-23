(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

var _nodeFetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchArtist = exports.searchArtist = function searchArtist(artistName) {

    return function (dispatch) {

        dispatch({
            type: 'SEARCH_PENDING'
        });

        return (0, _nodeFetch2.default)(_api.ARTISTS_URL + '/' + artistName + '?app_id=' + _api.API_KEY).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            return data ? dispatch({
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

/***/ "../components/blocks/bandThumb.js":
/*!*****************************************!*\
  !*** ../components/blocks/bandThumb.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n'], ['\n    display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    width: 160px;\n    height: 160px;\n    img {\n        position: relative;\n        max-width: 100%;\n    }\n'], ['\n    display: block;\n    width: 160px;\n    height: 160px;\n    img {\n        position: relative;\n        max-width: 100%;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    width: auto;\n    padding: 12px;\n'], ['\n    display: block;\n    width: auto;\n    padding: 12px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: table;\n    font-size: 3rem;\n    a {\n        color: #212121;\n        text-decoration: none;\n        &:hover{\n            color: ', ';\n        }\n    }\n'], ['\n    display: table;\n    font-size: 3rem;\n    a {\n        color: #212121;\n        text-decoration: none;\n        &:hover{\n            color: ', ';\n        }\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: table;\n    font-size: 1.8rem;\n    margin: 12px 0px;\n'], ['\n    display: table;\n    font-size: 1.8rem;\n    margin: 12px 0px;\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BandContainer = _styledComponents2.default.div(_templateObject);
var BandThumb = _styledComponents2.default.span(_templateObject2);

var BandDetails = _styledComponents2.default.div(_templateObject3);

var BandName = _styledComponents2.default.span(_templateObject4, _colors.mainColor);

var BandUpcomingEvents = _styledComponents2.default.span(_templateObject5);

exports.default = function (props) {
    var name = props.name,
        url = props.url,
        thumb_url = props.thumb_url,
        facebook_page_url = props.facebook_page_url,
        id = props.id,
        upcoming_event_count = props.upcoming_event_count;


    return _react2.default.createElement(
        BandContainer,
        null,
        _react2.default.createElement(
            BandThumb,
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/band/' + id },
                _react2.default.createElement(_lazyImage2.default, { width: 160, height: 160, image: thumb_url, title: name })
            )
        ),
        _react2.default.createElement(
            BandDetails,
            null,
            _react2.default.createElement(
                BandName,
                { to: '/band/' + id },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/band/' + id },
                    name
                )
            ),
            _react2.default.createElement(
                BandUpcomingEvents,
                null,
                'Upcoming events: ',
                _react2.default.createElement(
                    'i',
                    null,
                    upcoming_event_count
                )
            )
        )
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

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 3rem;\n    font-weight: normal;\n    margin: 32px 0px;\n'], ['\n    font-size: 3rem;\n    font-weight: normal;\n    margin: 32px 0px;\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h1(_templateObject);

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

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    height: ', ';\n    width: ', ';\n    background: #E0E0E0;\n    display: inline-block;\n    vertical-align: middle;\n'], ['\n    display: block;\n    height: ', ';\n    width: ', ';\n    background: #E0E0E0;\n    display: inline-block;\n    vertical-align: middle;\n']);

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


            return loaded ? _react2.default.createElement('img', { src: src, alt: title, title: title }) : _react2.default.createElement(Preloader, this.props);
        }
    }]);

    return LazyImage;
}(_react.PureComponent);

exports.default = LazyImage;

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

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    margin: 32px 0px;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    line-height: 64px;\n    padding: 12px;\n    > input[type="text"] {\n        display: inline-block;\n        vertical-align: middle;\n        width: 100%;\n        line-height: 1;\n        border: none;\n        font-size: 2.4rem;\n        padding: 0px 12px;\n        background: #fff;\n        color: #212121;\n    }\n'], ['\n    display: flex;\n    margin: 32px 0px;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    line-height: 64px;\n    padding: 12px;\n    > input[type="text"] {\n        display: inline-block;\n        vertical-align: middle;\n        width: 100%;\n        line-height: 1;\n        border: none;\n        font-size: 2.4rem;\n        padding: 0px 12px;\n        background: #fff;\n        color: #212121;\n    }\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _button = __webpack_require__(/*! ../common/button */ "../components/common/button.js");

var _button2 = _interopRequireDefault(_button);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "../node_modules/redux-form/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchForm = _styledComponents2.default.form(_templateObject);

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

var _templateObject = _taggedTemplateLiteral(['\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n'], ['\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 60px 0px;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 64px;\n        height: 64px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 8px solid #E0E0E0;\n        border-top: 8px solid ', ';\n        top: 50%;\n        left: 50%;\n        margin-left: -32px;\n        margin-top: -32px;\n    }\n'], ['\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius 2px;\n    min-height: 160px;\n    position: relative;\n    margin: 60px 0px;\n    &.loading:before{\n        display: block;\n        position: absolute;\n        content: \'\';\n        width: 64px;\n        height: 64px;\n        border-radius: 50%;\n        animation: ', ' 2s linear infinite;\n        border: 8px solid #E0E0E0;\n        border-top: 8px solid ', ';\n        top: 50%;\n        left: 50%;\n        margin-left: -32px;\n        margin-top: -32px;\n    }\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _heading = __webpack_require__(/*! ../common/heading */ "../components/common/heading.js");

var _heading2 = _interopRequireDefault(_heading);

var _queryString = __webpack_require__(/*! query-string */ "../node_modules/query-string/index.js");

var _artist = __webpack_require__(/*! ../../actions/artist */ "../actions/artist.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spin = (0, _styledComponents.keyframes)(_templateObject);

var SearchResults = _styledComponents2.default.div(_templateObject2, Spin, _colors.mainColor);

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
                history = _props.history;

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
                    SearchResults,
                    { className: pending ? 'loading' : null },
                    !pending && band ? _react2.default.createElement(_bandThumb2.default, band) : null
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
                console.log('fetching');
                nextProps.dispatch((0, _artist.searchArtist)(newQuery));
            }
            return {
                query: newQuery
            };
        }
    }]);

    return SearchPage;
}(_react.PureComponent)) || _class);
exports.default = SearchPage;

/***/ }),

/***/ "../node_modules/decode-uri-component/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/decode-uri-component/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../node_modules/node-fetch/browser.js":
/*!*********************************************!*\
  !*** ../node_modules/node-fetch/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = exports = self.fetch;

// Needed for TypeScript and Webpack.
exports.default = self.fetch.bind(self);

exports.Headers = self.Headers;
exports.Request = self.Request;
exports.Response = self.Response;


/***/ }),

/***/ "../node_modules/query-string/index.js":
/*!*********************************************!*\
  !*** ../node_modules/query-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "../node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return (key, value, index) => {
				return value === null ? [
					encode(key, options),
					'[',
					index,
					']'
				].join('') : [
					encode(key, options),
					'[',
					encode(index, options),
					']=',
					encode(value, options)
				].join('');
			};
		case 'bracket':
			return (key, value) => {
				return value === null ? [encode(key, options), '[]'].join('') : [
					encode(key, options),
					'[]=',
					encode(value, options)
				].join('');
			};
		default:
			return (key, value) => {
				return value === null ? encode(key, options) : [
					encode(key, options),
					'=',
					encode(value, options)
				].join('');
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function extract(input) {
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({decode: true, arrayFormat: 'none'}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = param.replace(/\+/g, ' ').split('=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		formatter(decode(key, options), value, ret);
	}

	return Object.keys(ret).sort().reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (obj, options) => {
	const defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = Object.assign(defaults, options);

	if (options.sort === false) {
		options.sort = () => {};
	}

	const formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(key => {
		const value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			const result = [];

			for (const value2 of value.slice()) {
				if (value2 === undefined) {
					continue;
				}

				result.push(formatter(key, value2, result.length));
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&') : '';
};

exports.parseUrl = (input, options) => {
	return {
		url: input.split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "../node_modules/strict-uri-encode/index.js":
/*!**************************************************!*\
  !*** ../node_modules/strict-uri-encode/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


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

/***/ })

}]);
//# sourceMappingURL=1.js.map