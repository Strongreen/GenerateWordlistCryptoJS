const fs = require('fs');
const { parse } = require("csv-parse");
const encryptSHA1 = require('./encryptSHA1');
const writeFile = require('../../Files/writeFile');

const encryptingSHA1 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptSHA1( line[0]);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingSHA1;