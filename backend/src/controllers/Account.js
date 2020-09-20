const Service = require("../services").Account;

const _getAll = async (req, res) => {
  const obj = await Service.GetAll();
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ data: obj.data });
  }
}

const _findById = async (req, res) => {
  const obj = await Service.FindById(req.params.id);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ data: obj.data });
  }
}

const _create = async (req, res) => {
  const data = req.body;
  const obj = await Service.Create(data);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ data: obj.data });
  }
}

const _update = async (req, res) => {
  const obj = await Service.Update(req.params.id, req.body);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ data: obj.data });
  }
}

const _delete = async (req, res) => {
  const obj = await Service.Delete(req.params.id);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ data: obj.data });
  }
}

module.exports.GetAll = _getAll;
module.exports.FindById = _findById;
module.exports.Create = _create;
module.exports.Update = _update;
module.exports.Delete = _delete;