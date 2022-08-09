// This script will create a simple http server

const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  process.stdout.write('...');
});

module.exports = app;
