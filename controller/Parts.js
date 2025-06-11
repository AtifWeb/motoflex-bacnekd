const model = require("../models/PartModel");

const postPart = async (req, res) => {
  try {
    const data = new model(req.body);
    const savingData = await data.save();
    res.send(savingData);
  } catch (err) {
    res.send(err);
  }
};

const getPart = async (req, res) => {
  try {
    const data = await model.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getPartById = async (req, res) => {
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

const deletePart = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await model.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).send("Part not found");
    }

    res.send("Order deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  postPart,
  getPart,
  getPartById,
  deletePart,
};
