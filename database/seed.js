const Items = require("./connection.js");
const fakerList = require("./faker.js");

fakerList.forEach((e, i) => {
  let ID = e.restaurantID.toString();
  let obj = { restaurantID: ID };
  obj[e.menu] = e;
  let menu = new Items(obj);
  menu.save();
});
