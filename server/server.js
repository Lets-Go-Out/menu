const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const db = require("../database/connection.js");

app.use(morgan("dev"));
app.use(cors());
app.use(parser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/menu/:menu", (req, res) => {
  let menu = req.params.menu;
  console.log(menu);
  let query = `select * from ${menu};`;
  db.query(query, (err, data) => {
    if (err) return console.log(err.message);
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
