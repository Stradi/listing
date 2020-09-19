const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.json({
    route: "/",
    message: "Working!"
  })
})

Router.get("/api/v1", (req, res) => {
  res.json({
    route: "/api/v1",
    message: "Working!"
  });
});

module.exports = Router;