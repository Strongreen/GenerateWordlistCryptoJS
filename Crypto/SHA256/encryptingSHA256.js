const fs = require('fs');
const { parse } = require("csv-parse");
const encryptSHA256 = require('./encryptSHA256');
const writeFile = require('../../Files/writeFile');

const encryptingSHA256 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptSHA256( line[0]);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingSHA256;