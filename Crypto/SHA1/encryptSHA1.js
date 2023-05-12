const CryptoJS = require("crypto-js");

const encryptSHA1 = ((encryptMessage) => {
  let encrypted = CryptoJS.SHA1(encryptMessage);
  return encrypted;
});

module.exports = encryptSHA1;