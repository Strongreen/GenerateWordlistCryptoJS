const CryptoJS = require("crypto-js");

const encryptTripleDES = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.TripleDES.encrypt(encryptMessage, secretKey);
  return encrypted;
});

module.exports = encryptTripleDES;