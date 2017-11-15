var express = require("express");
var router = express.Router();

var tables = [{
  name: "yoda",
  phone: "555 5555 555",
  email: "Jedi@Master.com",
  userId: "900",
}];

var waitlist = [{
  name: "Darth Vader",
  phone: "100 100 100",
  email: "darth@vader.com",
  userId: "500",
}];

router.get("/tables", function(req, res) {
  return res.json(tables);
});

router.get("/waitlist", function(req, res) {
  return res.json(waitlist);
});


router.post("/new", function(req, res) {
  var newTable = req.body;
  console.log(newTable);
  if (tables.length < 5) {
    tables.push(newTable);
  } else {
    waitlist.push(newTable);
  }
});

router.post("/check", function(req, res) {
  var check = req.body;
  var table = undefined;
  var tableIndex = undefined;
  console.log(check);
  for (var i = 0; i < tables.length; i++) {
    console.log(check.userId === tables[i].userId, check.userId, tables[i].userId);
    if (check.userId === tables[i].userId) {
      tableIndex = i;
    }
  }
  if (tableIndex !== undefined) {

    table = tables.splice(tableIndex, 1);
    if (waitlist.length > 0) {
      tables.push(waitlist.shift());
    }
    return res.json(table);
  }
  return res.json(false);
});

module.exports = router;