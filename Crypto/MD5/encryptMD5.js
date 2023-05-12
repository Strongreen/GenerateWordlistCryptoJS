const CryptoJS = require("crypto-js");

const encryptMD5 = ((encryptMessage) => {
  let encrypted = CryptoJS.MD5(encryptMessage);
  return encrypted;
});

module.exports = encryptMD5;