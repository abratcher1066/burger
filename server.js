// Dependencies & Boilerplate
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// Ports
const app = express();
const PORT = process.env.PORT || 8080;

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hazy on using controllers, going to add that later and just do a simple connection here for now.
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "burgers_db"
});

// Initialize connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ~~ ROUTES ~~
// app.post route for posting new burger
// app.get route for seeing burgers we got
// app.get/set for changing burgers??
// let's just do 1 and 2 for now


// Add new burger





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  