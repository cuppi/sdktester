"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by cuppi on 2017/9/6.
 */
var JNetwork_1 = require("./JNetwork");

var JNetworkRoot = function () {
    function JNetworkRoot() {
        (0, _classCallCheck3.default)(this, JNetworkRoot);

        this.otherParas = [];
        this.otherHeaders = [];
    }

    (0, _createClass3.default)(JNetworkRoot, [{
        key: "prefixPromise",
        value: function prefixPromise(url, paras, headers) {
            var _JNetwork_1$default$u, _JNetwork_1$default;

            return (_JNetwork_1$default$u = (_JNetwork_1$default = JNetwork_1.default).useParas.apply(_JNetwork_1$default, (0, _toConsumableArray3.default)(this.otherParas))).useHeaders.apply(_JNetwork_1$default$u, (0, _toConsumableArray3.default)(this.otherHeaders)).POST(url, paras, headers);
        }
    }], [{
        key: "useParas",
        value: function useParas() {
            var instance = this.instance();

            for (var _len = arguments.length, paras = Array(_len), _key = 0; _key < _len; _key++) {
                paras[_key] = arguments[_key];
            }

            instance.otherParas = paras;
            return instance;
        }
    }, {
        key: "useHeaders",
        value: function useHeaders() {
            var instance = this.instance();

            for (var _len2 = arguments.length, headers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                headers[_key2] = arguments[_key2];
            }

            instance.otherHeaders = headers;
            return instance;
        }
    }, {
        key: "instance",
        value: function instance() {
            if (!this._instance) {
                this._instance = new this();
                this._instance.test = Math.random();
            }
            return this._instance;
        }
    }]);
    return JNetworkRoot;
}();

exports.default = JNetworkRoot;
//# sourceMappingURL=JNetworkRoot.js.map
