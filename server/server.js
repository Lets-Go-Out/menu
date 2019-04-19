const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 80;

const connection = require('../database/postConnect')
// const csvGeneration = require('../database/csvGeneration')

app.use(morgan("dev"));
app.use(cors());
app.use(parser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});









// /////////////
// const { Items, Special } = require("../database/connection.js");
// const { fakerList, fakerList2 } = require("../database/faker.js");

// fakerList.forEach((e, i) => {
//   let ID = e.restaurantID.toString();
//   let obj = { restaurantID: ID };
//   obj[e.menu] = e;
//   let menu = new Items(obj);
//   // console.log(menu)
//   menu.save();
// });
// fakerList2.forEach((e, i) => {
//   let special = new Special({
//     restaurantID: e.restaurantID,
//     head: e.head,
//     body: e.body
//   });
//   special.save();
// });
// ///////////

// app.get("/restaurants/:restaurantID/menu/:menu", (req, res) => {
//   let menu = req.params.menu;
//   let restaurantID = req.params.restaurantID.toString();
//   Items.find({ restaurantID: restaurantID }, (err, docs) => {
//     docs = docs.filter(e => e[menu]);
//     // console.log(docs)
//     res.json(docs);
//   });
// });

// app.get("/restaurants/:restaurantID/menuCount", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   Items.find({ restaurantID: restaurantID }, (err, docs) => {
//     if (err) return console.error(err);
//     let menuCount = sorter(docs);
//     res.json(menuCount);
//   });
// });

// app.get("/restaurants/:restaurantID/special", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   Special.find({ restaurantID: restaurantID }, (err, docs) => {
//     if (err) return console.error(err);
//     res.json(docs);
//   });
// });