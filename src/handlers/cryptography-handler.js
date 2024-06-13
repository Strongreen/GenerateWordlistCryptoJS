const {
  ALLOWED_CRYPTO_TO_DECRYPTING,
  ALLOWED_CRYPTO_TO_ENCRYPTING,
} = require("../environment");

const {
  FileService,
  ReadStreamFromCSVService,
  CipherService,
} = require("../services");
const { HttpResponse } = require("../utils");

const encryptHandler = (req, res) => {
  const { cryptography } = req.params;

  if (!ALLOWED_CRYPTO_TO_ENCRYPTING.includes(cryptography)) {
    return res
      .status(400)
      .json(
        HttpResponse.error(
          `Criptografia inválida. Lista de Criptografias válidas: ${ALLOWED_CRYPTO_TO_ENCRYPTING.join(
            ", "
          )}`,
          400
        )
      );
  }

  const cipherService = new CipherService(cryptography);
  const { pathIn, pathOut, secretKey } = req.body;

  const handleData = (chunk) => {
    const encrypted = cipherService.encrypt({
      secretKey,
      message: chunk[0],
    });
    FileService.write({ path: pathOut, data: encrypted });
  };

  ReadStreamFromCSVService.read(pathIn).on("data", handleData);

  return res.status(201).json(
    HttpResponse.created(
      "Deu certo! Use o get para buscar as informações ou abra o arquivo.",
      {
        outputPath: pathOut,
      }
    )
  );
};

const decryptHandler = (req, res) => {
  const { cryptography } = req.params;

  if (!ALLOWED_CRYPTO_TO_DECRYPTING.includes(cryptography)) {
    return res
      .status(400)
      .json(
        HttpResponse.error(
          `Criptografia inválida. Lista de Criptografias válidas: ${ALLOWED_CRYPTO_TO_DECRYPTING.join(
            ", "
          )}`,
          400
        )
      );
  }

  const { pathIn, pathOut, secretKey } = req.body;

  const cipherService = new CipherService(cryptography);

  const handleData = (chunk) => {
    const decrypted = cipherService.decrypt({
      secretKey,
      message: chunk[0],
    });

    FileService.write({ path: pathOut, data: decrypted });
  };

  ReadStreamFromCSVService.read(pathIn).on("data", handleData);

  return res.status(201).json(
    HttpResponse.created(
      "Deu certo! Use o get para buscar as informações ou abra o arquivo.",
      {
        outputPath: pathOut,
      }
    )
  );
};

module.exports = {
  encryptHandler,
  decryptHandler,
};
