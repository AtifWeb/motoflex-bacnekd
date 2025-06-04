const model = require("../models/CarModel");

const postCar = async (req, res) => {
  try {
    const data = new model(req.body);
    const savingData = await data.save();
    res.send(savingData);
  } catch (err) {
    res.send(err);
  }
};

const getCar = async (req, res) => {
  try {
    const data = await model.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getCarById = async (req, res) => {
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
  postCar,
  getCar,
  getCarById,
};
