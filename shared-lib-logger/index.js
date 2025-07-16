// shared-lib-logger/index.js
const chalk = require('chalk');

module.exports = function createLogger(serviceName) {
  return {
    info: (message) => {
      console.log(`${chalk.green('[INFO]')} [${serviceName}] ${new Date().toISOString()}: ${message}`);
    },
    error: (error) => {
      console.error(`${chalk.red('[ERROR]')} [${serviceName}] ${new Date().toISOString()}:`, error);
    }
  };
};
