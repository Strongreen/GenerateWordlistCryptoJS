const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const { PORT, HOSTNAME } = require("./environment");
const { errorHandler } = require("./handlers");

const server = express();
server.use(express.json());
server.use(routes);
server.use(errorHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
