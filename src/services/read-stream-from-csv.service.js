const fs = require("fs");
const { parse } = require("csv-parse");

class ReadStreamFromCSVService {
  static read(filePath) {
    return fs
      .createReadStream(filePath)
      .pipe(parse({ delimiter: ",", from_line: 1 }));
  }
}

module.exports = ReadStreamFromCSVService;
