const envConf = require('./config.json');
const env = process.env.ENV ?? 'test';
const testEnv = envConf[env];

export const url = process.env.TEST_URL ?? testEnv.url;

export const customerUsername = process.env.CUST_USERNAME
export const customerPassword = process.env.CUST_PASSWORD