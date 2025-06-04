const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  address: String,
  country: String,
  state: String,
  city: String,
  zipcode: String,
  cardholdername: String,
  cardnumber: String,
  expiry_date: String,
  cvv: String,
  order: [],
});

module.exports = OrderSchema;
