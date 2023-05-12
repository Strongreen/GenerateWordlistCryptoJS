const fs = require('fs');
const { parse } = require("csv-parse");
const decryptDES = require('./decryptDES');
const writeFile = require('../../Files/writeFile');

const decryptingDES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const dencrypt = decryptDES( line[0], secretKey);
      writeFile(pathOut, dencrypt);
    });
});

module.exports = decryptingDES;