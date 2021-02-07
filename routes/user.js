const express = require("express");
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require("../tweetBank");

// arranco parado en /user (Lo indico en index.js)
router.get("/:name", function (req, res, next) {
    let user = req.params.name;
    let nombre = tweetBank.find({ name: user });
    res.render("index", { tweets: nombre, showForm: true, twitero: user });
  });
  
module.exports = router;