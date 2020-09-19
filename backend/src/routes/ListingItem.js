const Router = require("express").Router();
const Controller = require("../controllers").ListingItem;

// GET /api/v1/ListingItem/
// Get all ListingItem objects
Router.get("/", Controller.GetAll);

// GET /api/v1/ListingItem/:id
// Find ListingItem object by ID
Router.get("/:id", Controller.FindById);

module.exports = Router;