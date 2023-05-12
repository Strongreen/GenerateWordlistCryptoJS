const fs = require('fs');
const { parse } = require("csv-parse");
const encryptRIPEMD160 = require('./encryptRIPEMD160');
const writeFile = require('../../Files/writeFile');

const encryptingRIPEMD160 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptRIPEMD160( line[0]);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingRIPEMD160;