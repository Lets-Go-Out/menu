const faker = require("faker");
const numberofentries = 7000;
const numberofrestaurants = 100;
var fakerList = Array(numberofentries).fill("0");
var fakerList2 = Array(numberofrestaurants).fill("0");
const nameGenerator = () => {
  let n = Math.ceil(Math.random() * 2);
  let output = faker.random.word();
  for (i = 0; i <= n; i++) {
    output = output.concat(" ", faker.random.word());
  }
  return output;
};
const descriptionGenerator = () => {
  let n = Math.ceil(Math.random() * 9) + 4;
  let output = faker.random.words();
  for (i = 0; i <= n; i++) {
    output = output.concat(". ", faker.random.words());
  }
  return output;
};
const ingredientGenerator = () => {
  let n = Math.ceil(Math.random() * 3);
  let output = [faker.random.word()];
  for (i = 0; i <= n; i++) {
    output.push(faker.random.word());
  }
  return output;
};
const restaurantIDGenerator = () => {
  return Math.ceil(Math.random() * numberofrestaurants);
};
const priceGenerator = () => {
  function addzero(num) {
    if (num.toString().length === 1) {
      num = "0".concat(num);
    }
    return num;
  }
  return (
    "$" +
    faker.random.number({
      min: 10,
      max: 50
    }) +
    "." +
    addzero(
      faker.random.number({
        min: 00,
        max: 99
      })
    )
  );
};
const menuGenerator = restID => {
  let x;
  restID = restID.toString();
  let length = restID.length - 1;
  switch (restID[0]) {
    case "1":
      x = ["Lunch", "Dinner"];
      break;
    case "5":
      x = ["Lunch", "Breakfast", "Happy Hour", "Alcohol"];
      break;
    case "6":
      x = ["Dinner", "Happy Hour", "Alcohol", "Brunch"];
      break;
    default:
      switch (restID[length]) {
        case "9":
        case "8":
          x = [
            "Lunch",
            "Dinner",
            "Breakfast",
            "Brunch",
            "Happy  Hour",
            "Alcohol"
          ];
          break;
        case "5":
          if (Math.round(Math.random()) === 0) {
            x = ["Dinner", "Alcohol", "Happy Hour"];
            break;
          } else {
            x = ["Dinner", "Happy Hour", "Kids"];
            break;
          }
        case "2":
          x = ["Lunch", "Dinner", "Brunch", "Kids"];
          break;
        default:
          x = ["Lunch", "Dinner", "Breakfast"];
      }
  }
  return x[Math.floor(Math.random() * x.length)];
};
fakerList = fakerList.map(e => {
  let name = nameGenerator();
  let description = descriptionGenerator();
  let ingredients = ingredientGenerator();
  let price = priceGenerator();
  let restaurantID = restaurantIDGenerator();
  let menu = menuGenerator(restaurantID);
  return {
    name: name,
    description: description,
    ingredients: ingredients,
    price: price,
    restaurantID: restaurantID,
    menu: menu
  };
});
fakerList2 = fakerList2.map(e => {
  let name = nameGenerator();
  let description = descriptionGenerator();
  let restaurantID = restaurantIDGenerator();
  return { restaurantID: restaurantID, head: name, body: description };
});
module.exports = { fakerList, fakerList2 };
