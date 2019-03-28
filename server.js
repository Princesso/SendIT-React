const express = require('express');
const winston = require('winston');
const { createLogger, format, transports } = winston;
const path = require('path');
const chalk = require('chalk');

const port = process.env.PORT || 8000;
const app = express();

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

// handle all static files
app.use('/', express.static('dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, function serverListner() {
  logger.debug(`Server running on port ${chalk.blue(port)}`);
});