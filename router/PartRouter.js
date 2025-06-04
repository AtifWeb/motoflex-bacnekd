const express = require("express");

const { postPart, getPart, getPartById } = require("../controller/Parts");

const PartRouter = express.Router();

PartRouter.route("/api/post/part").post(postPart);
PartRouter.route("/api/get/part").get(getPart);
PartRouter.route("/api/get/part/id").get(getPartById);

module.exports = PartRouter;
