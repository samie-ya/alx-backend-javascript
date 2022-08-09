// This script will read a csv a file

const fs = require('fs');

function countStudents(file) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf-8');
    const data = content.split('\n');
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
        if (i[j] !== '') {
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
    }

    console.log(`Number of students: ${counter}`);
    console.log(`Number of students in CS: ${fieldCs}. List: ${newCs.join(', ')}`);
    console.log(`Number of students in SWE: ${fieldSwe}. List: ${newSwe.join(', ')}`);
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
