const CryptoJS = require("crypto-js");

const decryptAES = ((decryptMessage, secretKey) => {
  let decrypted = CryptoJS.AES.decrypt(decryptMessage, secretKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
});

module.exports = decryptAES; 