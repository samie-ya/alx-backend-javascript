// This script will display message to STDOUT

function displayMessage(string) {
  process.stdout.write(string);
  process.stdout.write('\n');
}

module.exports = displayMessage;
