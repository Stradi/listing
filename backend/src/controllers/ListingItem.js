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

const _create = async (req, res) => {
  const data = req.body;
  if(!data.name || data.name == null || data.name == undefined) {
    return res.json({
      error: {
        message: "Name field should be filled"
      }
    });
  }

  return res.json({
    data: await Service.Create(data)
  });
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;