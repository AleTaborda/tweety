const express = require("express");
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();

const userRoutes = require("./user");
const tweetRoutes = require("./tweets")


router.use("/users", userRoutes)
router.use("/tweets", tweetRoutes)
router.use("/", tweetRoutes);

// MODULE EXPORTS
module.exports = router;
