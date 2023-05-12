const fs = require('fs');
const { parse } = require("csv-parse");
const { encryptHMACMD5, encryptHMACSHA1, encryptHMACSHA256, encryptHMACSHA512 } = require('./encryptHMAC');
const writeFile = require('../../Files/writeFile');

const encryptingHMACMD5 = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptHMACMD5( line[0]);
      writeFile(pathOut, encrypt);
    });
});

const encryptingHMACSHA1 = (({pathIn, pathOut, secretKey}) => {
  fs.createReadStream(pathIn)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", (line) => {
    const encrypt = encryptHMACSHA1( line[0]);
    writeFile(pathOut, encrypt);
  });
});

const encryptingHMACSHA256 = (({pathIn, pathOut, secretKey}) => {
    fs.createReadStream(pathIn)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", (line) => {
      const encrypt = encryptHMACSHA256( line[0]);
      writeFile(pathOut, encrypt);
    });
});

const encryptingHMACSHA512 = (({pathIn, pathOut, secretKey}) => {
  fs.createReadStream(pathIn)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", (line) => {
    const encrypt = encryptHMACSHA512( line[0]);
    writeFile(pathOut, encrypt);
  });
});


module.exports = { encryptingHMACMD5, encryptingHMACSHA1, encryptingHMACSHA256, encryptingHMACSHA512 };