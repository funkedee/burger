// import connection
var connection = require("./connection");

var orm = {
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM ?", [tableName], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (tableName, columns, values, cb) {
        connection.query("INSERT INTO ? (?) VALUES (?)", [tableName, columns, values], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function (tableName, columns, newValue, id, cb) {
        connection.query("UPDATE ? SET ? = ? WHERE id = ?", [tableName, columns, newValue, id], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;