const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const CategorySchema = new Schema({
  name: { type: SchemaTypes.String, required: true },
  description: { type: SchemaTypes.String }
  //TODO: Add ListingItem resource as reference
});

CategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Category", CategorySchema);