const { Items, Special } = require("./connection.js");
const { fakerList, fakerList2 } = require("./faker.js");

fakerList.forEach((e, i) => {
  let ID = e.restaurantID.toString();
  let obj = { restaurantID: ID };
  obj[e.menu] = e;
  let menu = new Items(obj);
  menu.save();
});
fakerList2.forEach((e, i) => {
  let special = new Special({
    restaurantID: e.restaurantID,
    head: e.head,
    body: e.body
  });
  special.save();
});
