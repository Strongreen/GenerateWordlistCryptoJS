const fs = require('fs');
const { parse } = require("csv-parse");
const encodeBase64 = require('./encodeBase64');
const writeFile = require('../../Files/writeFile');

const encodingBase64 = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encode = encodeBase64( line[0]);
      writeFile(pathOut, encode);
    });
});

module.exports = encodingBase64;