const fs = require('fs');
const { parse } = require("csv-parse");
const encryptSHA3 = require('./encryptSHA3');
const writeFile = require('../../Files/writeFile');

const encryptingSHA3 = (({pathIn, pathOut, outputLength}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptSHA3( line[0], outputLength);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingSHA3;