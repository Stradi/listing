const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const AccountSchema = new Schema({
  username: { type: SchemaTypes.String, required: true, unique: true },
  email: { type: SchemaTypes.String, required: true, unique: true },
  passwordHash: { type: SchemaTypes.String, required: true },
  passwordSalt: { type: SchemaTypes.String }
  //TODO: fill it later
});

AccountSchema.plugin(uniqueValidator);

module.exports = new mongoose.model("Account", AccountSchema);