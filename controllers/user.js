const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    Fullname,
    State,
    email,
    City,
    RestaurantName,
    Country,
    UploadRestaurantPhoto,
    Address,
    password,
    PhoneNumber,
    leftoverAvailable,
  } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      email: email,
      Fullname: Fullname,
      State: State,
      City: City,
      RestaurantName: RestaurantName,
      Country: Country,
      UploadRestaurantPhoto: UploadRestaurantPhoto,
      Address: Address,
      password: password,
      PhoneNumber: PhoneNumber,
      leftoverAvailable: leftoverAvailable,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    res
      .status(200)
      .json({
        email: newUser.email,
        Fullname: newUser.Fullname,
        State: newUser.State,
        City: newUser.City,
        RestaurantName: newUser.RestaurantName,
        Country: newUser.Country,
        Address: newUser.Address,
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
