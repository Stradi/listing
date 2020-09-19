const mongoose = require("mongoose");

const _connectDatabase = (connectionUri) => {
  const uri = connectionUri || process.env.DB_CONNECTION_URI;

  const opts = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

  mongoose.connect(uri, opts).then(() => {
    console.log("Successfully connected to MongoDB database.");
  }).catch((error) => {
    console.error(error);
    process.exit(-1);
  });
}

module.exports.ConnectDatabase = _connectDatabase;