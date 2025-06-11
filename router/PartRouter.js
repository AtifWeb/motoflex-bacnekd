const express = require("express");

const {
  postPart,
  getPart,
  getPartById,
  deletePart,
} = require("../controller/Parts");

const PartRouter = express.Router();

PartRouter.route("/api/post/part").post(postPart);
PartRouter.route("/api/get/part").get(getPart);
PartRouter.route("/api/get/part/id").get(getPartById);
PartRouter.route("/api/delete/part/:id").delete(deletePart);

module.exports = PartRouter;
