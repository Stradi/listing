const Router = require("express").Router();
const Controller = require("../controllers").Category;
const AuthMiddleware = require("../middlewares").Authentication.Authenticated;

// GET /api/v1/Category/
// Get all Category objects
Router.get("/", Controller.GetAll);

// GET /api/v1/Category/:id
// Find Category object by ID
Router.get("/:id", Controller.FindById);

// POST /api/v1/Category/
// Create new Category object
Router.post("/", AuthMiddleware, Controller.Create);

// PATCH /api/v1/Category/:id
// Updates existing Category object
Router.patch("/:id", AuthMiddleware, Controller.Update);

// DELETE /api/v1/Category/:id
// Deletes a Category object
Router.delete("/:id", AuthMiddleware, Controller.Delete);

module.exports = Router;