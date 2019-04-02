'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKnexWithoutDatabase = exports.getKnexConfig = exports.getKnex = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('./knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNodeEnv = function getNodeEnv() {
  return process.env.NODE_ENV || 'development';
};

var getKnexConfig = function getKnexConfig() {
  return _knexfile2.default[getNodeEnv()];
};

var getKnex = function getKnex() {
  return (0, _knex2.default)(getKnexConfig());
};

var getKnexWithoutDatabase = function getKnexWithoutDatabase() {
  var config = getKnexConfig();
  var newConfig = (0, _extends3.default)({}, config, { connection: (0, _extends3.default)({}, config.connection, { database: 'postgres' }) });
  return (0, _knex2.default)(newConfig);
};

exports.getKnex = getKnex;
exports.getKnexConfig = getKnexConfig;
exports.getKnexWithoutDatabase = getKnexWithoutDatabase;