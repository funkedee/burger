var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// setup middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//  setup handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// Start server listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});