(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    margin-top: -80px;\n    padding: 80px 0px;\n    background: ', ';\n'], ['\n    display: block;\n    margin-top: -80px;\n    padding: 80px 0px;\n    background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n'], ['\n    display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    width: 200px;\n    height: 200px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n'], ['\n    display: block;\n    width: 200px;\n    height: 200px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: block;\n    width: auto;\n    padding: 6px 12px;\n'], ['\n    display: block;\n    width: auto;\n    padding: 6px 12px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: block;\n    color: #fff;\n    font-size: 3rem;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, .7);\n'], ['\n    display: block;\n    color: #fff;\n    font-size: 3rem;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, .7);\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    border-radius: 50%;\n    margin-right: 12px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    height: 42px;\n    min-width: 42px;\n    line-height: 42px;\n    font-size: 2rem;\n    padding: 0px;\n'], ['\n    border-radius: 50%;\n    margin-right: 12px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);\n    height: 42px;\n    min-width: 42px;\n    line-height: 42px;\n    font-size: 2rem;\n    padding: 0px;\n']);

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(/*! ../common/container */ "../components/common/container.js");

var _container2 = _interopRequireDefault(_container);

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _band = __webpack_require__(/*! ../../actions/band */ "../actions/band.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.es.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lazyImage = __webpack_require__(/*! ../common/lazyImage */ "../components/common/lazyImage.js");

var _lazyImage2 = _interopRequireDefault(_lazyImage);

var _button = __webpack_require__(/*! ../common/button */ "../components/common/button.js");

var _button2 = _interopRequireDefault(_button);

var _colors = __webpack_require__(/*! ../variables/colors */ "../components/variables/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BandWall = _styledComponents2.default.div(_templateObject, function (props) {
    return props.image ? 'url(' + props.image + ') #FAFAFA' : '#FAFAFA';
});

var BandContainer = (0, _styledComponents2.default)(_container2.default)(_templateObject2);
var BandThumb = _styledComponents2.default.div(_templateObject3);

var BandDetails = _styledComponents2.default.div(_templateObject4);

var BandTitle = _styledComponents2.default.h1(_templateObject5);

var BandButton = (0, _styledComponents2.default)(_button2.default)(_templateObject6);

var BandPage = (_dec = (0, _reactRedux.connect)(function (store) {
    return {
        search: store.search,
        band: store.band
    };
}), _dec(_class = function (_PureComponent) {
    _inherits(BandPage, _PureComponent);

    function BandPage(props) {
        _classCallCheck(this, BandPage);

        var _this = _possibleConstructorReturn(this, (BandPage.__proto__ || Object.getPrototypeOf(BandPage)).call(this, props));

        _this.state = {
            band: null
        };

        return _this;
    }

    _createClass(BandPage, [{
        key: 'render',
        value: function render() {
            var band = this.props.band;


            if (!band.data) {
                return null;
            } else {
                var _band$data = band.data,
                    image_url = _band$data.image_url,
                    thumb_url = _band$data.thumb_url,
                    name = _band$data.name,
                    facebook_page_url = _band$data.facebook_page_url;


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
                                        { background: '#ffffff', color: _colors.mainColor },
                                        _react2.default.createElement('i', { className: 'icon icon-facebook' })
                                    )
                                ) : null,
                                _react2.default.createElement(
                                    BandButton,
                                    { background: '#ffffff', color: _colors.mainColor },
                                    _react2.default.createElement('i', { className: 'icon icon-heart' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _container2.default,
                        null,
                        _react2.default.createElement(
                            'pre',
                            null,
                            JSON.stringify(band)
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

            if (band !== prevBand) {
                nextProps.dispatch((0, _band.fetchBand)(band));
            }

            return {
                band: band
            };
        }
    }]);

    return BandPage;
}(_react.PureComponent)) || _class);
exports.default = BandPage;

/***/ }),

/***/ "../node_modules/browser-cookies/src/browser-cookies.js":
/*!**************************************************************!*\
  !*** ../node_modules/browser-cookies/src/browser-cookies.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.defaults = {};

exports.set = function(name, value, options) {
  // Retrieve options and defaults
  var opts = options || {};
  var defaults = exports.defaults;

  // Apply default value for unspecified options
  var expires  = opts.expires  || defaults.expires;
  var domain   = opts.domain   || defaults.domain;
  var path     = opts.path     !== undefined ? opts.path     : (defaults.path !== undefined ? defaults.path : '/');
  var secure   = opts.secure   !== undefined ? opts.secure   : defaults.secure;
  var httponly = opts.httponly !== undefined ? opts.httponly : defaults.httponly;
  var samesite = opts.samesite !== undefined ? opts.samesite : defaults.samesite;

  // Determine cookie expiration date
  // If succesful the result will be a valid Date, otherwise it will be an invalid Date or false(ish)
  var expDate = expires ? new Date(
      // in case expires is an integer, it should specify the number of days till the cookie expires
      typeof expires === 'number' ? new Date().getTime() + (expires * 864e5) :
      // else expires should be either a Date object or in a format recognized by Date.parse()
      expires
  ) : 0;

  // Set cookie
  document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent)                // Encode cookie name
  .replace('(', '%28')
  .replace(')', '%29') +
  '=' + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) +                  // Encode cookie value (RFC6265)
  (expDate && expDate.getTime() >= 0 ? ';expires=' + expDate.toUTCString() : '') + // Add expiration date
  (domain   ? ';domain=' + domain     : '') +                                      // Add domain
  (path     ? ';path='   + path       : '') +                                      // Add path
  (secure   ? ';secure'               : '') +                                      // Add secure option
  (httponly ? ';httponly'             : '') +                                      // Add httponly option
  (samesite ? ';samesite=' + samesite : '');                                       // Add samesite option
};

exports.get = function(name) {
  var cookies = document.cookie.split(';');
  
  // Iterate all cookies
  while(cookies.length) {
    var cookie = cookies.pop();

    // Determine separator index ("name=value")
    var separatorIndex = cookie.indexOf('=');

    // IE<11 emits the equal sign when the cookie value is empty
    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;

    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));

    // Return cookie value if the name matches
    if (cookie_name === name) {
      return decodeURIComponent(cookie.slice(separatorIndex + 1));
    }
  }

  // Return `null` as the cookie was not found
  return null;
};

exports.erase = function(name, options) {
  exports.set(name, '', {
    expires:  -1,
    domain:   options && options.domain,
    path:     options && options.path,
    secure:   0,
    httponly: 0}
  );
};

exports.all = function() {
  var all = {};
  var cookies = document.cookie.split(';');

  // Iterate all cookies
  while(cookies.length) {
    var cookie = cookies.pop();

    // Determine separator index ("name=value")
    var separatorIndex = cookie.indexOf('=');

    // IE<11 emits the equal sign when the cookie value is empty
    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;

    // add the cookie name and value to the `all` object
    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));
    all[cookie_name] = decodeURIComponent(cookie.slice(separatorIndex + 1));
  }

  return all;
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


/***/ })

}]);
//# sourceMappingURL=7.js.map