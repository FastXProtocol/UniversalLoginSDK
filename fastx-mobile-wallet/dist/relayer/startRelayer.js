'use strict';

var _universalLoginRelayer = require('universal-login-relayer');

require('dotenv').config();

var config = require('./config');

var relayer = new _universalLoginRelayer.TokenGrantingRelayer(config);
relayer.start().catch(console.error);