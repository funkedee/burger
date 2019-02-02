// import connection
var connection = require("./connection");

var orm = {
    // SELECT FROM mysql query
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM "+ tableName +";", function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    // INSERT INTO mysql query
    insertOne: function (tableName, columns, values, cb) {
        var queryString = "INSERT INTO " + tableName + " (" + columns + ") VALUES (?);";
        console.log(queryString);
        connection.query(queryString, [values], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    // UPDATE mysql query
    updateOne: function (tableName, columns, newValue, id, cb) {
        connection.query("UPDATE " + tableName + " SET " +
        columns + " = " + newValue +  " WHERE id = " + id, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;