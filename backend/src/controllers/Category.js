const Service = require("../services").Category;
const SendResponse = require("../helpers").Response;

const _getAll = async (req, res, next) => {
  return await SendResponse(req, res, next, Service.GetAll);
}

const _findById = async (req, res, next) => {
  return await SendResponse(req, res, next, Service.FindById, req.params.id);
}

const _create = async (req, res, next) => {
  //TODO: Add validation!!
  return await SendResponse(req, res, next, Service.Create, req.body);
}

const _update = async (req, res, next) => {
  return await SendResponse(req, res, next, Service.Update, req.params.id, req.body);
}

const _delete = async (req, res, next) => {
  return await SendResponse(req, res, next, Service.Delete, req.params.id);
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;