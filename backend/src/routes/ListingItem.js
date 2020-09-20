const Router = require("express").Router();
const Controller = require("../controllers").ListingItem;
const AuthMiddleware = require("../middlewares").Authentication.Authenticated;

// GET /api/v1/ListingItem/
// Get all ListingItem objects
Router.get("/", Controller.GetAll);

// GET /api/v1/ListingItem/:id
// Find ListingItem object by ID
Router.get("/:id", Controller.FindById);

// POST /api/v1/ListingItem/
// Create new ListingItem object
Router.post("/", AuthMiddleware, Controller.Create);

// PATCH /api/v1/ListingItem/:id
// Updates existing ListingItem object
Router.patch("/:id", AuthMiddleware, Controller.Update);

// DELETE /api/v1/ListingItem/:id
// Deletes ListingItem object
Router.delete("/:id", AuthMiddleware, Controller.Delete);

module.exports = Router;