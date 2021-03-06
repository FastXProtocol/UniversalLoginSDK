const config = require('./config.ts');

const getNodeEnv = () => process.env.NODE_ENV || 'development';

const getConfig = () => config[`${getNodeEnv()}`];

export default getConfig;
