const CryptoJS = require("crypto-js");

const salt = ((saltMessage) => {
  return saltMessage.salt.toString();
});

module.exports = salt; 