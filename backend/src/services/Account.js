const Model = require("../models").Account;
const PasswordHelper = require("../helpers").Password;
const TokenHelper = require("../helpers").Token;

const NotFoundError = require("../errors").NotFound;
const BaseError = require("../errors").BaseError;

const _getAll = async () => {
  const response = await Model.find();
  return { data: response }
}

const _findById = async (id) => {
  const response = await Model.findById(id);
  return { data: response }
}

const _findByUsername = async (username) => {
  const response = await Model.findOne({ username });
  return { data: response }
}

const _create = async (data) => {
  const passwordData = PasswordHelper.HashPassword(data.password);
  const response = await new Model({
    username: data.username,
    email: data.email,
    passwordHash: passwordData.hash,
    passwordSalt: passwordData.salt
  }).save();

  return { data: response, token: TokenHelper.GenerateAccessToken(response) }
}

const _login = async (data) => {
  const username = data.username;
  const password = data.password;

  const account = await _findByUsername(username);
  if(!account.data || account.data == null || account.data == undefined) {
    throw new NotFoundError("account");
  }

  const isPasswordValid = PasswordHelper.ValidatePassword(password, account.data.passwordHash, account.data.passwordSalt);
  if(!isPasswordValid) {
    throw new BaseError("INVALID_PASSWORD", "Password is invalid", 401);
  }

  return { data: account.data, token: TokenHelper.GenerateAccessToken(account) }  
}

const _update = async (id, data) => {
  const item = await _findById(id);
  await item.data.updateOne({
    username: data.username || item.data.username,
  });
  return { data: "Success" }
}

const _delete = async (id) => {
  const response = await Model.findByIdAndDelete(id);
  return { data: response }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.FindByUsername = _findByUsername;
module.exports.Create = _create;
module.exports.Login = _login;
module.exports.Update = _update;
module.exports.Delete = _delete;