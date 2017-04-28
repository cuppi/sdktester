
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _JNetwork = require('./JNetwork.js');

var _JNetwork2 = _interopRequireDefault(_JNetwork);

var _JUrlList = require('../constant/JUrlList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkCityManager = function () {
  function NetworkCityManager() {
    (0, _classCallCheck3.default)(this, NetworkCityManager);
  }

  (0, _createClass3.default)(NetworkCityManager, null, [{
    key: 'cityListShouldLocation',
    value: function cityListShouldLocation() {
      return _JNetwork2.default.POST(_JUrlList.cityUrl.jbzCities, (0, _extends3.default)({}, _JNetwork2.default.locationParas()));
    }
  }, {
    key: 'cityCurrentCityNeedLocation',
    value: function cityCurrentCityNeedLocation(location) {
      if (location) {
        return _JNetwork2.default.POST(_JUrlList.cityUrl.jbzCurrentLocation, location);
      }
      return _JNetwork2.default.POST(_JUrlList.cityUrl.jbzCurrentLocation, (0, _extends3.default)({}, _JNetwork2.default.locationParas()));
    }
  }]);
  return NetworkCityManager;
}();

exports.default = NetworkCityManager;