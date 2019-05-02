const newrelic = require('newrelic');
const express = require("express");
const path = require("path");
const cors = require("cors");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 80;
const db = require('../database/cassandra/queries')
var redis = require('redis')
client = redis.createClient()

// const postConnection = require('../database/postgres/queries')
// const postCsvGeneration = require('../database/postgres/csvGeneration')

// const cassConnection = require('../database/cassandra/queries')
// const cassCsvGeneration = require('../database/cassandra/csvGeneration')

app.use("*",cors());
app.use(parser.json());
app.use(express.static(path.join(__dirname, "../public")));

// app.listen(port)
app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});

app.get('/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt', (req, res) => {
  res.sendFile('/home/ec2-user/menuloaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
  // res.sendFile('/home/ubuntu/menu/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
})

app.get("/restaurants/:restaurantID/menu/:menu", (req, res) => {
  let menu = req.params.menu;
  let restaurantID = req.params.restaurantID.toString();
  db.findRestaurantById(restaurantID, (response)=>{
    res.json(`${response.rows[0].menu_list}`)
  })
});

app.get("/restaurants/:restaurantID/menuCount", (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  db.findRestaurantById(restaurantID, (response)=>{
    res.json(`${response.rows[0].menu_list}`)
  })
});

app.get("/restaurants/:restaurantID/special", (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  db.findRestaurantById(restaurantID, (response)=>{
    res.json(`${response.rows[0].menu_list}`)
  })
});

app.post('/restaurants/:restaurantID/menu/add-new', (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  let newMenu= req.body;
  db.addNewRestaurant(restaurantId, newMenu, (response) => {
    res.send()
  })
});

app.put('/restaurants/:restaurantID/menu/:menu/edit', (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  let updatedMenu = req.body
  db.editMenuByRestaurantId(restaurantID, updatedMenu, (response) => {
    res.send()
  })
})

app.delete('/restaurants/:restaurantID/delete', (req, res) => {
  let restaurantID = req.params.restaurantID.toString();
  db.deleteEntireMenu(restaurantID, (response) => {
    res.send()
  })
})



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