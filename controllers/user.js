const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    fullname,
    state,
    email,
    city,
    restaurantName,
    country,
    uploadRestaurantPhoto,
    address,
    password,
    phoneNumber,
    leftoverAvailable,
  } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      email: email,
      fullname: fullname,
      state: state,
      city: city,
      restaurantName: restaurantName,
      country: country,
      uploadRestaurantPhoto: uploadRestaurantPhoto,
      address: address,
      password: password,
      phoneNumber: phoneNumber,
      leftoverAvailable: leftoverAvailable,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    res.status(200).json({
      email: newUser.email,
      fullname: newUser.fullname,
      state: newUser.state,
      city: newUser.city,
      restaurantName: newUser.restaurantName,
      country: newUser.country,
      address: newUser.address,
      leftoverAvailable: newUser.leftoverAvailable,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    if (password !== user.password)
      return res.status(401).json({ msg: "Incorrect password" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { register, login };
