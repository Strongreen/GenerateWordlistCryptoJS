const fs = require('fs');
const { parse } = require("csv-parse");
const encryptMD5 = require('./encryptMD5');
const writeFile = require('../../Files/writeFile');

const encryptingMD5 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptMD5( line[0]);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingMD5;