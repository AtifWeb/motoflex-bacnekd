const express = require("express");

const { postOrder, getOrder, getOrderById } = require("../controller/Order");

const BileRouter = express.Router();

BileRouter.route("/api/post/order").post(postOrder);
BileRouter.route("/api/get/order").get(getOrder);
BileRouter.route("/api/get/order/id").get(getOrderById);

module.exports = BileRouter;
