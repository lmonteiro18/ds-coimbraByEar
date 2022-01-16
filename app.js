//--------------------------------------------MODULES AND APP SETUP--------------------------------------------
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



//--------------------------------------------GET MAIN ROUTE--------------------------------------------
app.get("/", function(req, res) {
  res.render("index", {});
});

app.get("/praca", function(req, res) {
  res.render("praca", {});
});

app.get("/jardim", function(req, res) {
  res.render("jardim", {});
});




//--------------------------------------------PORTS AND APP LISTEN--------------------------------------------
let port = process.env.PORT;
if (port === undefined || port === "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server is up and running on port " + port + ".");
});
