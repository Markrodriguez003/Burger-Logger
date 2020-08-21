const express = require("express"); // EXPRESS
let router = express.Router(); // EXPRESS ROUTER
let foodie = require("../models/foodie") // BRINGING IN FOODIE MODEL


// ------------------------------------------------------------------
// GET REQUEST TO INDEX/MAIN PAGE AND UPDATES WISHLIST/DEVOURED WITH FOODIE ITEMS FROM DB
router.get("/", (req, res) => {

    foodie.all((data) => {
        let foodieObj = {
            foodie: data
        };
        // console.log(" Foodie items:: " + JSON.stringify(foodieObj));
        res.render("index", foodieObj);
    });
});

// GRABS ALL FOODIE ITEMS

router.get("/api/foodie/all", (req, res) => {
    foodie.all((data) => {
        // let foodieObj = {
        //     foodie: data
        // };
        // console.log(" Foodie items:: " + JSON.stringify(data));
        res.json(data);
    });
})

// ------------------------------------------------------------------
// CREATES NEW FOODIE ITEM
router.post("/api/foodie", (req, res) => {
    foodie.create(["foodie_name", "foodie_icon", "devoured"], [req.body.name, req.body.icon, req.body.devoured], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// ------------------------------------------------------------------
// UPDATES FOODIE ITEM WITH TRUE/FALSE DEVOURED PARAMETER
router.put("/api/foodie/:id", (req, res) => {
    let devoured_bool = "id = " + req.params.id;

    console.log("Devoured: ", devoured_bool);

    foodie.update(
        { devoured: req.body.devoured },
        devoured_bool,
        (result) => {
            if (result.changedRows === 0) { return res.status(404).end(); }
            res.status(200).end();
        }
    );
});

module.exports = router; // EXPORTS ROUTER ROUTES TO BE USED IN OTHER JS FILES