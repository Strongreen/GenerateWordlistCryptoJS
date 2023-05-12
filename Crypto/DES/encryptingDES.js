const fs = require('fs');
const { parse } = require("csv-parse");
const encryptDES = require('./encryptDES');
const writeFile = require('../../Files/writeFile');

const encryptingDES = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptDES( line[0], secretKey);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingDES;