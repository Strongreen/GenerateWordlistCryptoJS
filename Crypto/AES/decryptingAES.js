const fs = require('fs');
const { parse } = require("csv-parse");
const decryptAES = require('./decryptAES');
const writeFile = require('../../Files/writeFile');

const decryptingAES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const dencrypt = decryptAES( line[0], secretKey);
      writeFile(pathOut, dencrypt);
    });
});

module.exports = decryptingAES;