const BaseError = require("./BaseError");
class NotFound extends BaseError {
  constructor(resourceName) {
    const message = `${resourceName.toUpperCase()} not found`;
    super("NOT_FOUND", message, 404);
  }
}

module.exports = NotFound;