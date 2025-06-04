const mongoose = require("mongoose");
const BikeSchema = require("../schema/BikeSchema");

const BikeModel = mongoose.model("bike", BikeSchema);

module.exports = BikeModel;
