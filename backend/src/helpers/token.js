const jwt = require("jsonwebtoken");

const _generateAccessToken = (accountInfo) => {
  const payload = {
    username: accountInfo.username
  };

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
}

module.exports.GenerateAccessToken = _generateAccessToken;