const Router = require("express").Router();
const UrlBuilder = require("../helpers").UrlBuilder;

Router.get(UrlBuilder.BaseApiRoute, (req, res) => {
  res.json({
    message: "Working!"
  });
});

module.exports = Router;