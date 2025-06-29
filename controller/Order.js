const model = require("../models/OrderModel");

const postOrder = async (req, res) => {
  try {
    const data = new model(req.body);
    const savingData = await data.save();
    res.send(savingData);
  } catch (err) {
    res.send(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await model.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).send("Order not found");
    }

    res.send("Order deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const data = await model.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getOrderById = async (req, res) => {
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
  postOrder,
  getOrder,
  getOrderById,
  deleteOrder,
};
