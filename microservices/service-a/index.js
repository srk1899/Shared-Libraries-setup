const express = require('express');
const createLogger = require('shared-lib-logger'); // assume npm link or installed via git

const app = express();
const logger = createLogger('Service A');

app.get('/', (req, res) => {
  logger.info('Request received at Service A');
  res.send('Hello from Service A');
});

app.listen(3001, () => {
  logger.info('Service A listening on port 3001');
});
