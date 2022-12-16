const {
  getRestaurants,
  updateLeftOver,
} = require("../controllers/restaurants");

const router = require("express").Router();

router.get("/", getRestaurants);
router.patch("/:id", updateLeftOver);

module.exports = router;
