require("dotenv").config;

const cors = require("cors");
const express = require("express");
const connection = require("./connection/connection");
const CarRouter = require("./router/CarRouter");
const BikeRouter = require("./router/BikeRouter");
const PartRouter = require("./router/PartRouter");
const OrderRouter = require("./router/OrderRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(CarRouter);
app.use(BikeRouter);
app.use(PartRouter);
app.use(OrderRouter);

connection.serverConnect(app);
connection.dataConnect();
