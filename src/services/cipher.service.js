const CryptoJS = require("crypto-js");

class CipherService {
  constructor(cryptography) {
    this.cryptography = cryptography;
    this.cryptoFunction = this.getCipherFunctionByName(cryptography);
  }

  getCipherFunctionByName(cryptography) {
    const cryptoFunction = CryptoJS[cryptography];

    if (!cryptoFunction) {
      throw new Error(
        `not found cryptography function to ${cryptography} at crypto-js`
      );
    }

    return cryptoFunction;
  }

  encrypt({ message, secretKey }) {
    const handler = this.cryptoFunction.encrypt
      ? this.cryptoFunction.encrypt
      : this.cryptoFunction;

    return handler(message, secretKey);
  }

  decrypt({ message, secretKey }) {
    const handler = this.cryptoFunction.decrypt
      ? this.cryptoFunction.decrypt
      : this.cryptoFunction;

    const decryptedData = handler(message, secretKey).toString(
      CryptoJS.enc.Utf8
    );

    return decryptedData;
  }
}

module.exports = CipherService;
