const express = require("express");

const {
  postOrder,
  getOrder,
  getOrderById,
  deleteOrder,
} = require("../controller/Order");

const BileRouter = express.Router();

BileRouter.route("/api/post/order").post(postOrder);
BileRouter.route("/api/get/order").get(getOrder);
BileRouter.route("/api/get/order/id").get(getOrderById);
BileRouter.route("/api/delete/order/:id").delete(deleteOrder);

module.exports = BileRouter;
