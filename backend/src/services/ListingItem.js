const Model = require("../models").ListingItem;

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

const _create = async (data) => {
  try {
    const response = await new Model(data).save();
    return { data: response }
  } catch(error) {
    return { error }
  }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;