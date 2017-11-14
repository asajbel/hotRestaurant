var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var tables = [{
  name: "yoda",
  phone: "555 5555 555",
  email: "Jedi@Master.com",
  userId: 900,
}];

var waitlist = [{
  name: "Darth Vader",
  phone: "100 100 100",
  email: "darth@vader.com",
  userId: 500,
}];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "add.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "all.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});


app.post("/api/new", function(req, res) {
  var newTable = req.body;
  console.log(newTable);
  if (tables.length < 5) {
    tables.push(newTable);
  } else {
    waitlist.push(newTable);
  }
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
