// import orm
var orm = require("../config/orm")

// burger specific mysql query
var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(newBurgerName, cb) {
        orm.insertOne("burgers", "burger_name", newBurgerName, function(res) {
            cb(res);
        });
    },
    updateDevoured: function(id, cb) {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res);
        });
    }
};

// export burgers
module.exports = burger;