const Service = require("../services").Account;

const _cb = async (req, res, fn, ...args) => {
  const obj = await fn(...args);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ content: obj });
  }
}

const _getAll = async (req, res) => {
  return await _cb(req, res, Service.GetAll);
}

const _findById = async (req, res) => {
  return await _cb(req, res, Service.FindById, req.params.id);
}

const _create = async (req, res) => {
  return await _cb(req, res, Service.Create, req.body);
}

const _login = async (req, res) => {
  return await _cb(req, res, Service.Login, req.body);
}

const _update = async (req, res) => {
  return await _cb(req, res, Service.Update, req.params.id, req.body);
}

const _delete = async (req, res) => {
  return await _cb(req, res, Service.Delete, req.params.id);
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Login = _login;
module.exports.Update = _update;
module.exports.Delete = _delete;