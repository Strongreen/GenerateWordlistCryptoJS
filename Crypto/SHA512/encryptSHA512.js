const CryptoJS = require("crypto-js");

const encryptSHA512 = ((encryptMessage) => {
  let encrypted = CryptoJS.SHA512(encryptMessage);
  return encrypted;
});

module.exports = encryptSHA512;