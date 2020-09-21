const Model = require("../models").Account;
const PasswordHelper = require("../helpers").Password;
const TokenHelper = require("../helpers").Token;

const _getAll = async () => {
  try {
    const response = await Model.find();
    return { data: response }
  } catch(error) {
    return { error }
  }
}

const _findById = async (id) => {
  try {
    const response = await Model.findById(id);
    return { data: response }
  } catch(error) {
    return { error }
  }
}

const _findByUsername = async (username) => {
  try {
    const response = await Model.findOne({ username });
    return { data: response }
  } catch(error) {
    return { error }
  }
}

const _create = async (data) => {
  try {
    const passwordData = PasswordHelper.HashPassword(data.password);
    const response = await new Model({
      username: data.username,
      email: data.email,
      passwordHash: passwordData.hash,
      passwordSalt: passwordData.salt
    }).save();

    return { data: response, token: TokenHelper.GenerateAccessToken(response) }
  } catch(error) {
    return { error }
  }
}

const _login = async (data) => {
  try {
    const username = data.username;
    const password = data.password;

    const account = await _findByUsername(username);
    if(!account || account == null) {
      return { error: "Account not found." }
    }

    const isPasswordValid = PasswordHelper.ValidatePassword(password, account.data.passwordHash, account.data.passwordSalt);
    if(!isPasswordValid) {
      return { error: "Password is wrong." }
    }

    return { data: account.data, token: TokenHelper.GenerateAccessToken(account) }  
  } catch(error) {
    return { error }
  }
}

const _update = async (id, data) => {
  try {
    const item = await _findById(id);
    if(item.error) { return { error: item.error }}

    const response = await item.data.updateOne({
      username: data.username || item.data.username,
    });
    return { data: "Success" }
  } catch(error) {
    return { error }
  }
}

const _delete = async (id) => {
  try {
    const response = await Model.findByIdAndDelete(id);

    return { data: response }
  } catch(error) {
    return { error }
  }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.FindByUsername = _findByUsername;
module.exports.Create = _create;
module.exports.Login = _login;
module.exports.Update = _update;
module.exports.Delete = _delete;