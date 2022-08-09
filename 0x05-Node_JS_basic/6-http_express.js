// This script will create a simple http server with express

const express = require('express');

const port = 1245;
const host = 'localhost';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, host, () => {
  process.stdout.write('...');
});

module.exports = app;
