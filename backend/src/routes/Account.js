const Router = require("express").Router();
const Controller = require("../controllers").Account;

// GET /api/v1/Account/
// Get all Account objects
Router.get("/", Controller.GetAll);

// GET /api/v1/Account/:id
// Find Account object by ID
Router.get("/:id", Controller.FindById);

// POST /api/v1/Account/
// Create new Account object
Router.post("/", Controller.Create);

// PATCH /api/v1/Account/:id
// Updates existing Account object
Router.patch("/:id", Controller.Update);

// DELETE /api/v1/Account/:id
// Deletes a Account object
Router.delete("/:id", Controller.Delete);

module.exports = Router;