const mongoose = require("mongoose");

const BikeSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  driven: String,
  year: String,
  petroltype: String,
  images: [String],
});

module.exports = BikeSchema;
