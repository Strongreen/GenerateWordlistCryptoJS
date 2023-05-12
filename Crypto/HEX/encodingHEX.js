const fs = require('fs');
const { parse } = require("csv-parse");
const encodeHEX = require('./encodeHEX');
const writeFile = require('../../Files/writeFile');

const encodingHEX = (({pathIn, pathOut}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encode = encodeHEX( line[0]);
      writeFile(pathOut, encode);
    });
});

module.exports = encodingHEX;