const fs = require('fs');
const { parse } = require("csv-parse");
const encryptSHA512 = require('./encryptSHA512');
const writeFile = require('../../Files/writeFile');

const encryptingSHA512 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptSHA512( line[0]);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingSHA512;