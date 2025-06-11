const express = require("express");

const { postCar, getCar, getCarById, deleteCar } = require("../controller/Car");

const CarRouter = express.Router();
CarRouter.route("/").get((req, res) => {
  res.send("working");
});
CarRouter.route("/api/post/car").post(postCar);
CarRouter.route("/api/get/car").get(getCar);
CarRouter.route("/api/get/car/id").get(getCarById);
CarRouter.route("/api/delete/car/:id").delete(deleteCar);

module.exports = CarRouter;
