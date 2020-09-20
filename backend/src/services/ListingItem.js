const Model = require("../models").ListingItem;
const CategoryService = require("./Category");

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
    const categoryResponse = await CategoryService.AddItem(data.category, { id: response._id });
    if(categoryResponse.error) { return { error: categoryResponse.error }}
    
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

const _delete = async (id) => {
  try {
    const response = await Model.findOneAndDelete({ _id: id });
    const categoryResponse = await CategoryService.DeleteItem(response.category, { id: response._id });
    if(categoryResponse.error) { return { error: categoryResponse.error }}
    
    return { data: response }
  } catch(error) {
    return { error }
  }
}

const _setCategoryNull = async (categoryId) => {
  try {
    const response = await Model.find({ category: categoryId }).updateMany({ category: null });
    return { data: response }
  } catch(error) {
    return { error }
  }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.SetCategoryNull = _setCategoryNull;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;