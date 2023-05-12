const fs = require('fs');

const readFile = (({pathOut}) => {
  data = fs.readFileSync(pathOut);
  return data.toString().split('\n');
});

module.exports = readFile; 