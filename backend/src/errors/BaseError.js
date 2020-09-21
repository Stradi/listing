class BaseError {
  constructor(code, message, status) {
    this.code = code;
    this.message = message;
    this.status = status;
  }
}

module.exports = BaseError;