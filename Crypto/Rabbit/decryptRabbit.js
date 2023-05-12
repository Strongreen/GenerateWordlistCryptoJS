const CryptoJS = require("crypto-js");

const decryptRabbit = ((decryptMessage, secretKey) => {
  let decrypted = CryptoJS.Rabbit.decrypt(decryptMessage, secretKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
});

module.exports = decryptRabbit; 