// setup express
var express = require("express");
var router = express.Router();

// import model
var burger = require("../models/burger_model");

// routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgers = {burgers: data};
        res.render("index", burgers);
    });
});

router.post("/newBurger", function(req, res) {
    console.log(req.body.burger_name)
    burger.create(req.body.burger_name, function(data) {
        res.json(data);
    });
});

router.put("/devoured/:id", function(req, res) {
    burger.updateDevoured(req.params.id, function(data) {
        res.json(data);
    });
});

// export router
module.exports = router;