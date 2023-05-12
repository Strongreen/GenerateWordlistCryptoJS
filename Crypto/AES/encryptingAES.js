const fs = require('fs');
const { parse } = require("csv-parse");
const encryptAES = require('./encryptAES');
const writeFile = require('../../Files/writeFile');

const encryptingAES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptAES( line[0], secretKey);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingAES;