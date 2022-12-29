const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
  },
 state: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantName: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
  },
  uploadRestaurantPhoto: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  phoneNumber: {
    type: String,
    required: true,
    unique: true,

  },
  leftoverAvailable: {
    type: Boolean,
    default: false,
  },
 
 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
