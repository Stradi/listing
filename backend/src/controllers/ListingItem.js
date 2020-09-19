const Service = require("../services").ListingItem;

const _getAll = async (req, res) => {
  return res.json({
    data: await Service.GetAll()
  });
}

const _findById = async (req, res) => {
  return res.json({
    data: await Service.FindById(req.params.id)
  });
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;