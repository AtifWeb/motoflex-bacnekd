const mongoose = require("mongoose");
const PartSchema = require("../schema/PartsSchema");

const SparePartsModels = mongoose.model("spare_parts", PartSchema);

module.exports = SparePartsModels;
