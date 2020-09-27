require("dotenv").config();

const express = require("express");
const cors = require("cors");

const ErrorHandlingMiddleware = require("./src/middlewares").ErrorHandler;

const database = require("./src/helpers").Database;
database.ConnectDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./src/routes");
app.use(routes);

app.use(ErrorHandlingMiddleware);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});