// This script will take input from command

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString()}`);
  console.log('This important software is now closing');
  process.exit();
});
