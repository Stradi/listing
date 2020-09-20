const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ListingItemSchema = {
  name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String }
  //TODO: Fill it later.
}

module.exports = mongoose.model("ListingItem", ListingItemSchema);