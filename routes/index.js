const express = require("express");
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require("../tweetBank");

router.get("/", function (req, res) {
  let tweets = tweetBank.list();
  res.render("index", { tweets: tweets });
});

// digamos que el cliente pide un GET a /users/guille
router.get("/users/:name", function (req, res) {
  let tweets = tweetBank.find({ name: req.params.name });
  res.render("index", { tweets: tweets });
});

router.get("/tweets/:id", function (req, res) {
  let tweets = tweetBank.find({ id: req.params.id });
  res.render("index", { tweets: tweets });
  console.log(req.params.id);
});

router.get("/create", function (req, res) {
  res.render("index", { showForm: true });
});
module.exports = router;
