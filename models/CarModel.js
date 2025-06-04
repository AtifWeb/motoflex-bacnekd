const mongoose = require("mongoose");
const CarSchema = require("../schema/CarSchema");

const CarModel = mongoose.model("car", CarSchema);

module.exports = CarModel;
