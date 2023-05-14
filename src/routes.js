const express = require("express");

const {
  getAllFileHandler,
  customCryptographyHandlers,
  cryptographyHandlers,
} = require("./handlers");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Server is running!",
  });
});

// Get All information File
router.get("/getAllFile", getAllFileHandler);

// Custom routes first
router.post(
  "/Base64/encrypting",
  customCryptographyHandlers.Base64EncryptHandler
);

router.post("/SHA3/encrypting", customCryptographyHandlers.SHA3EncryptHandler);

// Dynamic CryptoJS handlers to encrypting and decrypting
router.post("/:cryptography/encrypting", cryptographyHandlers.encryptHandler);

router.post("/:cryptography/decrypting", cryptographyHandlers.decryptHandler);

module.exports = router;
