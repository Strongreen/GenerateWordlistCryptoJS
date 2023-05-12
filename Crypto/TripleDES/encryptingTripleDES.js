const fs = require('fs');
const { parse } = require("csv-parse");
const encryptTripleDES = require('./encryptTripleDES');
const writeFile = require('../../Files/writeFile');

const encryptingTripleDES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptTripleDES( line[0], secretKey);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingTripleDES;