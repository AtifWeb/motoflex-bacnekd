const mongoose = require("mongoose");

const PartsSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  minorder: String,
  images: [String],
});

module.exports = PartsSchema;
