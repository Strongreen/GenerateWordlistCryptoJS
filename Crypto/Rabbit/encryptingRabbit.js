const fs = require('fs');
const { parse } = require("csv-parse");
const encryptRabbit = require('./encryptRabbit');
const writeFile = require('../../Files/writeFile');

const encryptingRabbit = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptRabbit( line[0], secretKey);
      writeFile(pathOut, encrypt);
    });
});

module.exports = encryptingRabbit;