const Model = require("../models").Category;
const ListingItemService = require("./ListingItem");

const _getAll = async () => {
  const response = await Model.find().populate("items");
  return { data: response }
}

const _findById = async (id) => {
  const response = await Model.findById(id).populate("items");
  return { data: response }
}

const _create = async (data) => {
  const response = await new Model(data).save();
  return { data: response }
}

const _update = async (id, data) => {
  const item = await _findById(id);
  await item.data.updateOne(data);
  return { data: "Success" }
}

const _delete = async (id) => {
  const response = await Model.findByIdAndDelete(id);
  await ListingItemService.SetCategoryNull(id);
  return { data: response }
}

const _addItem = async (id, data) => {
  const response = await Model.findByIdAndUpdate(id, { $push: { items: data.id }});
  return { data: response }
}

const _deleteItem = async (id, data) => {
  const response = await Model.findByIdAndUpdate(id, { $pull: { items: { _id: data.id }}});
  return { data: response }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;
module.exports.AddItem = _addItem;
module.exports.DeleteItem = _deleteItem;