const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const parser = require("body-parser");
const faker = require("faker");
const app = express();
const port = process.env.PORT || 3000;
const Items = require("../database/connection.js");
const sorter = require("./sorter.js");

app.use(morgan("dev"));
app.use(cors());
app.use(parser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/:restaurantID/menu/:menu", (req, res) => {
  let menu = req.params.menu;
  let restaurantID = req.params.restaurantID.toString();
  Items.find({ restaurantID: restaurantID }, (err, docs) => {
    docs = docs.filter(e => e[menu]);
    res.json(docs);
  });
});

app.get("/:restaurantID/menuCount", (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  Items.find({ restaurantID: restaurantID }, (err, docs) => {
    if (err) return console.error(err);
    let menuCount = sorter(docs);
    res.json(menuCount);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
