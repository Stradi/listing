const Router = require("express").Router();

// GET /api/v1/ListingItem/
//TODO: Add controller.
Router.get("/", (req, res) => {
  return res.json({
    message: "ListingItem Route is working!"
  });
});

module.exports = Router;