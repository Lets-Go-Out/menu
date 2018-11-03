var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Menu");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {});

const menuSchema = new mongoose.Schema({
  restaurantID: String,
  Lunch: Object,
  Dinner: Object,
  Breakfast: Object,
  Brunch: Object,
  Happy_Hour: Object,
  Alcohol: Object
});
const specialSchema = new mongoose.Schema({
  restaurantID: String,
  head: String,
  body: String
});
const Items = mongoose.model("Items", menuSchema, "Items");
const Special = mongoose.model("Special", specialSchema, "Special");
module.exports = { Items, Special };
