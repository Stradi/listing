const Service = require("../services").ListingItem;
const SendResponse = require("../helpers").Response;

const _getAll = async (req, res) => {
  return await SendResponse(req, res, Service.GetAll);
}

const _findById = async (req, res) => {
  return await SendResponse(req, res, Service.FindById, req.params.id);
}

const _create = async (req, res) => {
  return await SendResponse(req, res, Service.Create, req.body);
}

const _update = async (req, res) => {
  return await SendResponse(req, res, Service.Update, req.params.id, req.body);
}

const _delete = async (req, res) => {
  return await SendResponse(req, res, Service.Delete, req.params.id);
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;