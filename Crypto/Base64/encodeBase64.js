const CryptoJS = require("crypto-js");

const encodeBase64 = ((encodeMessage) => {
  let encode = encodeMessage.toString(CryptoJS.enc.Base64);
  return encode;
});

module.exports = encodeBase64;