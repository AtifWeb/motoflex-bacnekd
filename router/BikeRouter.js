const express = require("express");

const {
  postBike,
  getBike,
  getBikeById,
  deleteBike,
} = require("../controller/Bike");

const BileRouter = express.Router();

BileRouter.route("/api/post/bike").post(postBike);
BileRouter.route("/api/get/bike").get(getBike);
BileRouter.route("/api/get/bike/id").get(getBikeById);
BileRouter.route("/api/delete/bike/:id").delete(deleteBike);

module.exports = BileRouter;
