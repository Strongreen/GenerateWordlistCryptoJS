const CryptoJS = require("crypto-js");

const encryptSHA256 = ((encryptMessage) => {
  let encrypted = CryptoJS.SHA256(encryptMessage);
  return encrypted;
});

module.exports = encryptSHA256;