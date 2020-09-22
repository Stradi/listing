const mongoose = require("mongoose");

const _errorHandler = (error, req, res, next) => {
  let json = {
    code: error.code || "ERROR_CODE_UNKNOWN",
    message: error.message || "ERROR_MESSAGE_UNKNOWN"
  };
  
  if(error instanceof mongoose.Error) {
    json = _mongooseErrorToJSON(error);
  }
  
  return res.status(error.status || 500).json({
    error: json
  });
}

const _mongooseErrorToJSON = (error) => {
  let code = "UNKNOWN_DATABASE";
  let message = "UNKNOWN_DATABASE";
  let fields = [];

  if(error instanceof mongoose.Error.ValidationError) {
    code = "DATABASE_VALIDATION";
    message = "Validation failed, check fields";
    for(field in error.errors) {
      fields.push({
        name: error.errors[field].path,
        kind: error.errors[field].kind,
        message: error.errors[field].message
      });
    }
  }

  return {
    code,
    message,
    fields
  };
}

module.exports = _errorHandler;