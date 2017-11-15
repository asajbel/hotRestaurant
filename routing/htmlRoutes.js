var express = require('express');
var router = express.Router();

var start = { root: __dirname + "/.."};

router.get("/", function(req, res) {
  res.sendFile("/public/" + "index.html", start);
});

router.get("/add", function(req, res) {
  res.sendFile("/public/" + "add.html", start);
});

router.get("/all", function(req, res) {
  res.sendFile("/public/" + "all.html", start);
});

module.exports = router;