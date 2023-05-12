const fs = require('fs');
const { parse } = require("csv-parse");
const decryptRabbit = require('./decryptRabbit');
const writeFile = require('../../Files/writeFile');

const decryptingRabbit = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const dencrypt = decryptRabbit( line[0], secretKey);
      writeFile(pathOut, dencrypt);
    });
});

module.exports = decryptingRabbit;