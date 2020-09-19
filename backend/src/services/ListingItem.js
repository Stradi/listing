const Model = require("../models").ListingItem;

const _getAll = async () => {
  return await Model.find();
}

const _findById = async (id) => {
  return await Model.findOne({ id });
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;