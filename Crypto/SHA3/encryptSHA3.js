const CryptoJS = require("crypto-js");

const encryptSHA3 = ((encryptMessage, outputLengthNum) => {
  let encrypted = CryptoJS.SHA3(encryptMessage, { outputLength: outputLengthNum });
  return encrypted;
});

module.exports = encryptSHA3;