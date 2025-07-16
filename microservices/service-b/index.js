const express = require('express');
const createLogger = require('shared-lib-logger'); // assume npm link or installed via git

const app = express();
const logger = createLogger('Service B');

app.get('/', (req, res) => {
  logger.info('Request received at Service B');
  res.send('Hello from Service B');
});

app.listen(3001, () => {
  logger.info('Service B listening on port 3002');
});
