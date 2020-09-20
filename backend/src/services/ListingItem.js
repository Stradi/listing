const Model = require("../models").ListingItem;

const _getAll = async () => {
  return await Model.find();
}

const _findById = async (id) => {
  return await Model.findById(id);
}

const _create = async (data) => {
  return await new Model(data).save();
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;