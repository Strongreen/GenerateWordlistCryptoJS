class HttpResponse {
  constructor(code, message, data, error = false) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static ok(message, data) {
    return new HttpResponse(200, message, data);
  }

  static error(message, statusCode = 400) {
    return new HttpResponse(statusCode, message, null, true);
  }

  static created(message, data) {
    return new HttpResponse(201, message, data);
  }
}

module.exports = HttpResponse;
