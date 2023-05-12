const CryptoJS = require("crypto-js");

const encodeHEX = ((encodeMessage) => {
  let encode = encodeMessage.toString(CryptoJS.enc.Hex);
  return encode;
});

module.exports = encodeHEX;