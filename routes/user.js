const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/user");

router.post("/register", (req, res) => register(req, res));
router.post("/login", login);
module.exports = router;
