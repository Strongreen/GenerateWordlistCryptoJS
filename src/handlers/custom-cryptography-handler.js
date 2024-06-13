const {
  FileService,
  ReadStreamFromCSVService,
  CipherCustomService,
} = require("../services");
const { HttpResponse } = require("../utils");

const Base64EncryptHandler = (req, res) => {
  const { pathIn, pathOut } = req.body;

  const handleData = (chunk) => {
    const encrypted = CipherCustomService.toBase64(chunk[0]);
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

const SHA3EncryptHandler = (req, res) => {
  const { pathIn, pathOut, outputLength } = req.body;

  const handleData = (chunk) => {
    const encrypted = CipherCustomService.toSHA3(chunk[0], outputLength);
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

module.exports = {
  Base64EncryptHandler,
  SHA3EncryptHandler,
};
