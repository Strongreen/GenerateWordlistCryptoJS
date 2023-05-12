const CryptoJS = require("crypto-js");

const decryptTripleDES = ((decryptMessage, secretKey) => {
  let decrypted = CryptoJS.TripleDES.decrypt(decryptMessage, secretKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
});

module.exports = decryptTripleDES; 