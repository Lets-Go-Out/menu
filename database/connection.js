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
const Items = mongoose.model("Items", menuSchema, "Items");
module.exports = Items;
