const crypto = require("crypto");

const _getRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

const _hash = (text, salt) => {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(text);

  return { salt, hash: hash.digest("hex") }
}

const _hashPassword = (password) => {
  return _hash(password, _getRandomString(16));
}

const _validatePassword = (password, expectedHash, salt) => {
  const hash = _hash(password, salt);
  return hash.hash === expectedHash;
}

module.exports.HashPassword = _hashPassword;
module.exports.ValidatePassword = _validatePassword;