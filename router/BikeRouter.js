const express = require("express");

const { postBike, getBike, getBikeById } = require("../controller/Bike");

const BileRouter = express.Router();

BileRouter.route("/api/post/bike").post(postBike);
BileRouter.route("/api/get/bike").get(getBike);
BileRouter.route("/api/get/bike/id").get(getBikeById);

module.exports = BileRouter;
