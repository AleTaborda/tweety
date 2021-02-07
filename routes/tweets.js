const express = require("express");
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require("../tweetBank");

//arranca parado en /tweets (lo indico en index.js)
router.get("/", function (req, res, next) {
    let tweets = tweetBank.list();
    res.render("index", { tweets: tweets, showForm: true });
  });
  
  router.get("/:id", function (req, res, next) {
      let id = Number(req.params.id)
      let tweetID = tweetBank.find({ "id": id });
      res.render("index", { tweets: tweetID, showForm: true, });
    });
    
    router.post("/", (req, res, next) => {
        let name = req.body.name;
        let content = req.body.content;

        tweetBank.add(name, content)
        res.redirect("/")
    });

    
module.exports = router;