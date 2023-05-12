const CryptoJS = require("crypto-js");

const encryptHMACMD5 = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.HmacMD5(encryptMessage, secretKey);
  return encrypted;
});

const encryptHMACSHA1 = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.HmacSHA1(encryptMessage, secretKey);
  return encrypted;
});

const encryptHMACSHA256 = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.HmacSHA256(encryptMessage, secretKey);
  return encrypted;
});

const encryptHMACSHA512 = ((encryptMessage, secretKey) => {
  let encrypted = CryptoJS.HmacSHA512(encryptMessage, secretKey);
  return encrypted;
});

module.exports = { encryptHMACMD5, encryptHMACSHA1, encryptHMACSHA256, encryptHMACSHA512 };