const express = require("express");
const mongoose = require("mongoose");
const controllers = require("../controllers/the-number");

const router = express.Router();

router.get("/number", controllers.get_number);
router.post("/number", controllers.update_number);
module.exports = router;