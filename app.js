const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/escola", function(req, res) {
  res.sendFile(__dirname + "/escola.html");
});

app.get("/ancas", function(req, res) {
  res.sendFile(__dirname + "/ancas.html");
});

app.get("/pavilhao", function(req, res) {
  res.sendFile(__dirname + "/pavilhao.html");
});

app.get("/dei", function(req, res) {
  res.sendFile(__dirname + "/dei.html");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running on port " + (process.env.PORT || 3000) + ".");
});
