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