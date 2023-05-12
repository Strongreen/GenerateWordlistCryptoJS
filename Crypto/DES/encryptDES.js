const CryptoJS = require("crypto-js");

const encryptAES = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.AES.encrypt(encryptMessage, secretKey);
  return encrypted;
});

module.exports = encryptAES;