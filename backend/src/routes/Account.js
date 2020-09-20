const Router = require("express").Router();
const Controller = require("../controllers").Account;
const AuthMiddleware = require("../middlewares").Authentication.Authenticated;

// GET /api/v1/Account/
// Get all Account objects
Router.get("/", AuthMiddleware, Controller.GetAll);

// GET /api/v1/Account/:id
// Find Account object by ID
Router.get("/:id", AuthMiddleware, Controller.FindById);

// POST /api/v1/Account/
// Create new Account object
Router.post("/", Controller.Create);

// POST /api/v1/Account/login
// Authenticate account and return access token
Router.post("/login", Controller.Login);

// PATCH /api/v1/Account/:id
// Updates existing Account object
Router.patch("/:id", AuthMiddleware, Controller.Update);

// DELETE /api/v1/Account/:id
// Deletes a Account object
Router.delete("/:id", AuthMiddleware, Controller.Delete);

module.exports = Router;