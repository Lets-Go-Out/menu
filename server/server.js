const newrelic = require('newrelic');
const path = require("path");
const port = process.env.PORT || 80;
const db = require('../database/cassandra/queries')
const { parse } = require('querystring')
const http = require('http')
const serveStatic = require('serve-static')
const redis = require('redis')
const client = redis.createClient()
const finalhandler = require('finalhandler')

const serve = serveStatic(path.join(__dirname, "../public"));

http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res))

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')

  ////////////////////////////////////GET///////////////////////////////////////////
  if(req.method === 'GET'){

    if(req.url === '/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt'){
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end('loaderio-d0ef15e857a20dadc3876cbc56b45151');
    } else if (req.url === "/restaurants/:restaurantID/menu/:menu" || 
      req.url === "/restaurants/:restaurantID/menuCount" ||
      req.url === "/restaurants/:restaurantID/special") {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      let restaurantID = req.params.restaurantID.toString();
      db.findRestaurantById(restaurantID, (response)=>{
      res.end(`${response.rows[0].menu_list}`)
      })
    }
    //////////////////////////////////////POST///////////////////////////////////////////
  } else if (req.method === 'POST'){
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    let restaurantID = req.params.restaurantID.toString();
    let newMenu = "";
    req.on('data', chunk => {
      newMenu+= chunk.toString()
    });
    req.on('end', () => {
      db.addNewRestaurant(restaurantID, (parse(newMenu)), (response) => {
        res.end()
      })
    })
    //////////////////////////////////////PATCH///////////////////////////////////////////
  } else if (req.method === 'PATCH'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    let restaurantID = req.params.restaurantID.toString();
    let updatedMenuData = "";
    req.on('data', chunk => {
      updatedMenuData+= chunk.toString()
    });
    req.on('end', () => {
      db.addNewRestaurant(restaurantID, (parse(updatedMenuData)), (response) => {
        res.end()
      })
    })
    //////////////////////////////////////DELETE///////////////////////////////////////////
  } else if (req.method === 'DELETE'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    let restaurantID = req.params.restaurantID.toString();
    db.deleteEntireMenu(restaurantID, (response) => {
      res.end()
    })
  }

}).listen(port, () => console.log('YOOO WHADDUP WE ON DIS PORT:', port))

// app.get('/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt', (req, res) => {
//   res.sendFile('/home/ec2-user/menuloaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
//   // res.sendFile('/home/ubuntu/menu/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
// })

// app.get("/restaurants/:restaurantID/menu/:menu", (req, res) => {
//   let menu = req.params.menu;
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.get("/restaurants/:restaurantID/menuCount", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.get("/restaurants/:restaurantID/special", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.post('/restaurants/:restaurantID/menu/add-new', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   let newMenu= req.body;
//   db.addNewRestaurant(restaurantId, newMenu, (response) => {
//     res.send()
//   })
// });

// app.put('/restaurants/:restaurantID/menu/:menu/edit', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   let updatedMenu = req.body
//   db.editMenuByRestaurantId(restaurantID, updatedMenu, (response) => {
//     res.send()
//   })
// })

// app.delete('/restaurants/:restaurantID/delete', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.deleteEntireMenu(restaurantID, (response) => {
//     res.send()
//   })
// })



// ///////////// USING EXPRESS
// const newrelic = require('newrelic');
// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const parser = require("body-parser");
// const app = express();
// const port = process.env.PORT || 80;
// const db = require('../database/cassandra/queries')
// var redis = require('redis')
// client = redis.createClient()

// // const postConnection = require('../database/postgres/queries')
// // const postCsvGeneration = require('../database/postgres/csvGeneration')

// // const cassConnection = require('../database/cassandra/queries')
// // const cassCsvGeneration = require('../database/cassandra/csvGeneration')

// app.use("*",cors());
// app.use(parser.json());
// app.use(express.static(path.join(__dirname, "../public")));

// // app.listen(port)
// app.listen(port, () => {
//   console.log(`server running at port: ${port}`);
// });

// app.get('/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt', (req, res) => {
//   res.sendFile('/home/ec2-user/menuloaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
//   // res.sendFile('/home/ubuntu/menu/loaderio-d0ef15e857a20dadc3876cbc56b45151.txt')
// })

// app.get("/restaurants/:restaurantID/menu/:menu", (req, res) => {
//   let menu = req.params.menu;
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.get("/restaurants/:restaurantID/menuCount", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.get("/restaurants/:restaurantID/special", (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.findRestaurantById(restaurantID, (response)=>{
//     res.json(`${response.rows[0].menu_list}`)
//   })
// });

// app.post('/restaurants/:restaurantID/menu/add-new', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   let newMenu= req.body;
//   db.addNewRestaurant(restaurantId, newMenu, (response) => {
//     res.send()
//   })
// });

// app.put('/restaurants/:restaurantID/menu/:menu/edit', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   let updatedMenu = req.body
//   db.editMenuByRestaurantId(restaurantID, updatedMenu, (response) => {
//     res.send()
//   })
// })

// app.delete('/restaurants/:restaurantID/delete', (req, res) => {
//   let restaurantID = req.params.restaurantID.toString();
//   db.deleteEntireMenu(restaurantID, (response) => {
//     res.send()
//   })
// })

