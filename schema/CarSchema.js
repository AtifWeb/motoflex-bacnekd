const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  damage: String,
  driven: String,
  type: String,
  geartype: String,
  year: String,
  petroltype: String,
  images: [String],
});

module.exports = CarSchema;
