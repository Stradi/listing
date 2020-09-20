const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ListingItemSchema = new Schema({
  name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String }
  //TODO: Fill it later.
});

ListingItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model("ListingItem", ListingItemSchema);