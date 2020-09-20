const Router = require("express").Router();
const Controller = require("../controllers").Category;

// GET /api/v1/Category/
// Get all Category objects
Router.get("/", Controller.GetAll);

// GET /api/v1/Category/:id
// Find Category object by ID
Router.get("/:id", Controller.FindById);

// POST /api/v1/Category/
// Create new Category object
Router.post("/", Controller.Create);

// PATCH /api/v1/Category/:id
// Updates existing Category object
Router.patch("/:id", Controller.Update);

module.exports = Router;