const CryptoJS = require("crypto-js");

const encryptRabbit = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.Rabbit.encrypt(encryptMessage, secretKey);
  return encrypted;
});

module.exports = encryptRabbit;