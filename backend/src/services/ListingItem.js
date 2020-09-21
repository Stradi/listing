const Model = require("../models").ListingItem;
const CategoryService = require("./Category");

const _getAll = async () => {
  const response = await Model.find();
  return { data: response }
}

const _findById = async (id) => {
  const response = await Model.findById(id);
  return { data: response }
}


const _create = async (data) => {
  const response = await new Model(data).save();
  await CategoryService.AddItem(data.category, { id: response._id });
  return { data: response }
}

const _update = async (id, data) => {
  const item = await _findById(id);    
  await item.data.updateOne(data);
  return { data: "Success" }
}

const _delete = async (id) => {
  const response = await Model.findOneAndDelete({ _id: id });
  await CategoryService.DeleteItem(response.category, { id: response._id });
  return { data: response }
}

const _setCategoryNull = async (categoryId) => {
  const response = await Model.find({ category: categoryId }).updateMany({ category: null });
  return { data: response }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.SetCategoryNull = _setCategoryNull;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;