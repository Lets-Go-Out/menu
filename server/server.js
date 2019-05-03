const newrelic = require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require("path");
const port = process.env.PORT || 80;
const db = require('../database/cassandra/queries');
const { parse } = require('querystring');

const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const redis = require('redis');
// const client = redis.createClient();

const client = redis.createClient({
  port: 6379,
  host: '',
  password: ''
})

const serve = serveStatic(path.join(__dirname, "../public"));
//client.on('connect', ()=> console.log('connected to redis!'))

http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res))
  // fs.readFile((path.join(__dirname, '../public/index.html')), (err, fileData) => {
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html',
  //   });
  //   res.write(fileData)
  //   res.end()
  // })

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  ////////////////////////////////////GET///////////////////////////////////////////
  if(req.method === 'GET'){
    if(req.url === '/loaderio-ae5cbfaaa7abc1f02acd83b1db41cc10.txt'){
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end('loaderio-ae5cbfaaa7abc1f02acd83b1db41cc10');
    } else if (req.url.split("/")[1] === "restaurants") {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      let restaurantID = String(req.url.split("/")[2]);
      client.get(restaurantID, (error, reply) => {
        if(reply){
          res.end(JSON.stringify(reply));
        } else {
          db.findRestaurantById(restaurantID, response => {
            let keyVal = `${response.rows[0].menu_list}`
            client.set(restaurantID, keyVal);
            res.end(JSON.stringify(response));
          });
        };
      });
    };
    //////////////////////////////////////POST///////////////////////////////////////////
  } else if (req.method === 'POST'){
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    let restaurantID = String(req.url.split("/")[2]);
    let buffers = []
    req.on('data', (chunk) => {
      buffers.push(chunk)
    });
    req.on('end', () => {
      let newMenu = Buffer.concat(buffers).toString()
      db.addNewRestaurant(restaurantID, newMenu, () => {
        res.statusCode= 200
        res.end()
      });
    });
    //////////////////////////////////////PATCH///////////////////////////////////////////
  } else if (req.method === 'PATCH'){
    let restaurantID = String(req.url.split("/")[2]);
    let buffers = []
    req.on('data', (chunk) => {
      buffers.push(chunk);
    });
    req.on('end', () => {
      let updatedMenu = Buffer.concat(buffers).toString();
      db.editMenuByRestaurantId(restaurantID, updatedMenu, () => {
        res.end();
      });
    });
    //////////////////////////////////////DELETE///////////////////////////////////////////
  } else if (req.method === 'DELETE'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    let restaurantID = String(req.url.split("/")[2]);
    db.deleteEntireMenu(restaurantID, () => {
      res.end();
    })
  }

}).listen(port) //, () => console.log('YOOO WHADDUP WE ON DIS PORT:', port));

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

