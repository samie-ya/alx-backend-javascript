// This script will create a simple http server

const http = require('http');
const fs = require('fs');

const argv = process.argv.slice(1);
const fsPromise = fs.promises;
const port = 1245;
const host = 'localhost';

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  switch (request.url) {
    case '/students':
      if (fs.existsSync(argv[1])) {
        fsPromise.readFile(argv[1])
          .then((content) => {
            response.writeHead(200);
            const str = content.toString();
            const data = str.split('\n');
            const list = [];
            for (const i of data) {
              const student = i.split(',');
              list.push(student);
            }

            const newList = list.slice(1, list.length);
            let fieldCs = 0;
            const newCs = [];
            let fieldSwe = 0;
            const newSwe = [];
            let counter = 0;
            for (const i of newList) {
              for (let j = 0; j < i.length; j += 1) {
                if (i[j] === 'CS') {
                  counter += 1;
                  fieldCs += 1;
                  newCs.push(i[0]);
                }
                if (i[j] === 'SWE') {
                  counter += 1;
                  fieldSwe += 1;
                  newSwe.push(i[0]);
                }
              }
            }
            const string = 'This is the list of our students\n'
                           + `Number of students: ${counter}\n`
                           + `Number of students in CS: ${fieldCs}. List: ${newCs.join(', ')}\n`
                           + `Number of students in SWE: ${fieldSwe}. List: ${newSwe.join(', ')}`;
            response.end(string);
          });
      } else {
        const string = 'This is the list of our students\n'
                       + 'Cannot load the database';
        response.end(string);
      }
      break;
    default:
      response.writeHead(200);
      response.end('Hello Holberton School!');
  }
});

app.listen(port, host, () => {
  process.stdout.write('...');
});

module.exports = app;
