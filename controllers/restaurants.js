const User = require("../models/user");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await User.find();

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateLeftOver = async (req, res) => {
  const { id } = req.params;
  const { leftoverAvailable } = req.body;
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "unauthorized" });

    const restaurant = await User.findByIdAndUpdate(id);

    if (!restaurant) res.status(404).json({ message: "not found" });
    restaurant.leftoverAvailable = leftoverAvailable;
    await restaurant.save();
    res.status(200).json({ message: "Updated completed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRestaurants, updateLeftOver };
