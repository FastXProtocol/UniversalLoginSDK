'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'universal_login_relayer_development',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: _path2.default.join(__dirname, '../../../node_modules/universal-login-relayer/migrations')
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'universal_login_relayer_test',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: _path2.default.join(__dirname, '../../../node_modules/universal-login-relayer/migrations')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: _path2.default.join(__dirname, '../../../node_modules/universal-login-relayer/migrations'),
      tableName: 'knex_migrations'
    }
  }

};