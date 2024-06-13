const { FileService } = require("../services");
const { HttpResponse } = require("../utils");

const getAllFileHandler = (req, res) => {
  let { pathOut } = req.body;
  const wordlistEncrypted = FileService.read(pathOut);

  return res.json(HttpResponse.ok("Deu certo!", { wordlistEncrypted }));
};

module.exports = getAllFileHandler;
