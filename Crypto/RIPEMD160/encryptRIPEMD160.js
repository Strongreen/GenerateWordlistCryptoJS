const CryptoJS = require("crypto-js");

const encryptRIPEMD160 = ((encryptMessage) => {
  let encrypted = CryptoJS.RIPEMD160(encryptMessage);
  return encrypted;
});

module.exports = encryptRIPEMD160;