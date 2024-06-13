const fs = require("fs");

class FileService {
  static read(path) {
    const data = fs.readFileSync(path);

    return data.toString().split("\n");
  }

  static write({ path, data }) {
    fs.appendFileSync(path, data + "\n");
  }
}

module.exports = FileService;
