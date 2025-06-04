const model = require("../models/BikeModel");

const postBike = async (req, res) => {
  try {
    const data = new model(req.body);
    const savingData = await data.save();
    res.send(savingData);
  } catch (err) {
    res.send(err);
  }
};

const getBike = async (req, res) => {
  try {
    const data = await model.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getBikeById = async (req, res) => {
  try {
    const data = await model.findById(req.query.id);

    if (!data) {
      res.status(404).send("Not Found");
      return;
    }
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  postBike,
  getBike,
  getBikeById,
};
