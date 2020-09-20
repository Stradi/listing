const Model = require("../models").Category;

const _getAll = async () => {
  try {
    const response = await Model.find().populate("items");
    return { data: response }
  } catch(error) {
    return { error }
  }
}

const _findById = async (id) => {
  try {
    const response = await Model.findById(id).populate("items");
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

const _update = async (id, data) => {
  try {
    const item = await _findById(id);
    if(item.error) { return { error: item.error }}

    const response = await item.data.updateOne(data);
    return { data: "Success" }
  } catch(error) {
    return { error }
  }
}

const _addItem = async (id, data) => {
  try {
    const response = await Model.findByIdAndUpdate(id, { $push: { items: data.id }});
    return { data: response }
  } catch(error) {
    return { error }
  }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.AddItem = _addItem;