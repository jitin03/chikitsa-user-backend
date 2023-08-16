const express = require("express");

const router = express.Router();

router.use("/auth", require("./authUser"));
router.use("/user", require("./user"));

module.exports = router;
