const express = require("express");
// https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
var router = express.Router();


// EXPORT EXPRESS ROUTER
module.exports = (router) => {

    // Express GET route that directs the user to index.
    router.get("/", (req, res) => {
        res.render("index");
    });

    // // Express GET route that directs the user to main post board.
    // router.get("/board", (req, res) => {
    //     res.render("board");
    // });

    // // Express GET route that directs the user to post form page.
    // router.get("/post", (req, res) => {
    //     res.render("post");
    // });

    // // Express GET route that directs the user to their personal post board.
    // router.get("/myboard", (req, res) => {
    //     res.render("myboard");
    // });

};


/*

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;





*/