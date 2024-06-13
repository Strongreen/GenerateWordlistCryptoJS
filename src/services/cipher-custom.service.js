const CryptoJS = require("crypto-js");

class CipherCustomService {
  static toBase64(message) {
    return CryptoJS.enc.Base64.parse(message).toString();
  }

  static toSHA3(message, outputLength) {
    return CryptoJS.SHA3(message, { outputLength });
  }
}

module.exports = CipherCustomService;
