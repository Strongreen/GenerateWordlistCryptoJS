const fs = require('fs');
const { parse } = require("csv-parse");
const salt = require('./salt');
const writeFile = require('../../Files/writeFile');

const salting = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const saltt = salt( line[0]);
      writeFile(pathOut, saltt);
    });
});

module.exports = salting;