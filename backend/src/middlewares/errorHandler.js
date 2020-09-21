const _errorHandler = (error, req, res, next) => {
  //TODO: Check if error is Mongoose error
  //TODO: Check if error is custom thrown error?
  return res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
}

module.exports = _errorHandler;