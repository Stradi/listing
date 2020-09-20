const jwt = require("jsonwebtoken");

const _getAuthToken = (req) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  return token;
}

const _authenticated = (req, res, next) => {
  const token = _getAuthToken(req);
  if(token === null) {
    return res.status(401).json({
      error: {
        message: "No authorization token provided"
      }
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, account) => {
    if(error) {
      return res.status(403).json({
        error: {
          message: "JWT is expired or wrong"
        }
      });
    }

    req.account = account;
    next();
  });
}

module.exports.Authenticated = _authenticated;