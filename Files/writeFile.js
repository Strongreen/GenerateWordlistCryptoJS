const fs = require('fs');

const writeFile = ((pathOut, cpfCrypto) => {
  try { 
      fs.appendFileSync(pathOut,cpfCrypto + '\n');
    } catch (err) {
      console.error(err);
    }
});

module.exports = writeFile; 