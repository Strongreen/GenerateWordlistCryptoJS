const fs = require('fs');
const { parse } = require("csv-parse");
const decryptTripleDES = require('./decryptTripleDES');
const writeFile = require('../../Files/writeFile');

const decryptingTripleDES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const dencrypt = decryptTripleDES( line[0], secretKey);
      writeFile(pathOut, dencrypt);
    });
});

module.exports = decryptingTripleDES;