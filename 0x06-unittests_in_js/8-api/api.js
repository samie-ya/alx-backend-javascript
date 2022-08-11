// This script will create a server with express

const express = require('express');
const port = 7865;
const host = 'localhost';
const app = express();

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(port, host, () => {
  process.stdout.write('API available on localhost port 7865');
});
