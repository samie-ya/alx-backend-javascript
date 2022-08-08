// This script will display message to STDOUT

function displayMessage(string) {
  process.stdout.write(string + '\n');
}

module.exports = displayMessage;
