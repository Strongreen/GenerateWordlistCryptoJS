const CryptoJS = require("crypto-js");

const decryptDES = ((decryptMessage, secretKey) => {
  let decrypted = CryptoJS.DES.decrypt(decryptMessage, secretKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
});

module.exports = decryptDES; 