const { http, express, encryptingAES, decryptingAES, encryptingDES, decryptingDES, encryptingTripleDES, decryptingTripleDES, encryptingRabbit, decryptingRabbit, encryptingMD5, encryptingSHA1, encryptingSHA256, encryptingSHA512, encryptingSHA3, encryptingRIPEMD160, encodingBase64, salting, encodingHEX, encryptingHMACMD5, encryptingHMACSHA1, encryptingHMACSHA256, encryptingHMACSHA512, readFile } = require('./requires');

const server = express();
server.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

server.get('/', () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Get All information File

server.get('/getAllFile', (req, res) => {
  let { pathOut } = req.body;
  const wordlistEncrypted = readFile({ pathOut });
  return res.json({ wordlistEncrypted })
});

// AES

server.post('/AES/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingAES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/AES/decrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  decryptingAES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// DES

server.post('/DES/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingDES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/DES/decrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  decryptingDES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});


// Triple DES

server.post('/TripleDES/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingTripleDES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/TripleDES/decrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  decryptingTripleDES({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// Rabbit

server.post('/Rabbit/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingRabbit({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/Rabbit/decrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  decryptingRabbit({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// MD5

server.post('/MD5/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encryptingMD5({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// SHA1

server.post('/SHA1/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encryptingSHA1({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// SHA2

server.post('/SHA256/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encryptingSHA256({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/SHA512/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encryptingSHA512({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// SHA3

server.post('/SHA3/encrypting', (req, res) => {
  const { pathIn, pathOut, outputLength } = req.body;
  encryptingSHA3({ pathIn, pathOut, outputLength });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// RIPEMD160

server.post('/RIPEMD160/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encryptingRIPEMD160({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// ENCODING

server.post('/Base64/encoding', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encodingBase64({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/HEX/encrypting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  encodingHEX({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// Salt

server.post('/Salt/salting', (req, res) => {
  const { pathIn, pathOut } = req.body;
  salting({ pathIn, pathOut });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

// HMAC

server.post('/HMAC/MD5/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingHMACMD5({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/HMAC/SHA1/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingHMACSHA1({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/HMAC/SHA256/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingHMACSHA256({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.post('/HMAC/SHA512/encrypting', (req, res) => {
  const { pathIn, pathOut, secretKey } = req.body;
  encryptingHMACSHA512({ pathIn, pathOut, secretKey });
  return res.json({ Message: 'Deu certo! Use o get para buscar as informações ou abra o arquivo.', PathFile: pathOut });
});

server.listen(port);
