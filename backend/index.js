require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./src/routes");
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});