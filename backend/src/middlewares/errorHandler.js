const _errorHandler = (error, req, res, next) => {
  //TODO: Check if error is Mongoose error
  return res.status(error.status || 500).json({
    error: {
      code: error.code || "ERROR_CODE_UNKNOWN",
      message: error.message || "ERROR_MESSAGE_UNKNOWN"
    }
  });
}

module.exports = _errorHandler;