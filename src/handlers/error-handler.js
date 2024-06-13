const { HttpResponse } = require("../utils");

const errorHandler = (error, request, response, next) => {
  if (!error) {
    return next();
  }

  return response.status(500).json(HttpResponse.error(error.message, 500));
};

module.exports = errorHandler;
