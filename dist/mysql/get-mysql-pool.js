'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionPool = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mysql = require('mysql2/promise');

const makeConfig = (globalConfig = {}) => ({
  host: globalConfig.mysql_host || 'localhost',
  user: globalConfig.mysql_user || 'root',
  password: globalConfig.mysql_password || '',
  database: globalConfig.mysql_database || '',
  port: globalConfig.mysql_port ? globalConfig.mysql_port : 3306
});

const dbConfig = makeConfig(_config2.default);

if (_config2.default.mac === 'true') {
  dbConfig.socketPath = '/tmp/mysql.sock';
}

const pool = mysql.createPool(dbConfig);
const connectionPool = exports.connectionPool = pool;