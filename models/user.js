const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
    unique: true,
  },
 State: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  City: {
    type: String,
    required: true,
    unique: true,
  },
  RestaurantName: {
    type: String,
    required: true,
    unique: true,
  },
  Country: {
    type: String,
    required: true,
    unique: true,
  },
  UploadRestaurantPhoto: {
    type: String,
    required: true,
    unique: true,
  },
  Address: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  PhoneNumber: {
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
