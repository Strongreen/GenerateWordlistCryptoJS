const ALLOWED_CRYPTO_TO_ENCRYPTING = [
  "AES",
  "Base64",
  "DES",
  "HmacMD5",
  "HmacSHA1",
  "HmacSHA256",
  "HmacSHA512",
  "MD5",
  "Rabbit",
  "RIPEMD160",
  "SHA1",
  "SHA3",
  "SHA256",
  "SHA512",
  "TripleDES",
];

const ALLOWED_CRYPTO_TO_DECRYPTING = ["AES", "DES", "Rabbit", "TripleDES"];

const HOSTNAME = process.env.APPLICATION_HOSTNAME || "127.0.0.1";
const PORT = process.env.APPLICATION_PORT || 3000;

module.exports = {
  ALLOWED_CRYPTO_TO_ENCRYPTING,
  ALLOWED_CRYPTO_TO_DECRYPTING,
  HOSTNAME,
  PORT,
};
