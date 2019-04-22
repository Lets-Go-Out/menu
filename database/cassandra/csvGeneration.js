const seedData = require('../randomSeedData')
const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')

const randomNumberGenerator = function(min, max, options){
  min = Math.ceil(min);
  max = Math.floor(max);
  if(options === 'price'){
    let retStr = "$"
    retStr += (Math.floor(Math.random() * (max - min)) + min) + "."
    retStr += (Math.floor(Math.random() * (10 - 0)) + 0) + "0"
    return retStr
  }
  return Math.floor(Math.random() * (max - min)) + min
} 

/* //////////// helper functions embedded in CSV file generator-created to save space //////////// */
const generateIngredients = function(){
  let numIngredients = randomNumberGenerator(3, 6);
  let ingredients = [];
  for(var i = 0; i < numIngredients; i++){
    ingredients.push(seedData.ingredients[randomNumberGenerator(0, 50)]);
  };
  return ingredients;
};

const generateRandomDate = function(){
  let threeMonths = ["03", "04", "05"];
  return (`2019-${threeMonths[randomNumberGenerator(0, 3)]}-${randomNumberGenerator(10, 29)}`);
};

const generateMealResults = function(iteratorStart, iteratorStop, writer, encoding, callback){
  let restaurant_id = 1;
  let check = true;
  let i = iteratorStop;
  // let count = 0;
  let menuCount = 1

  function write(){
    while(i >= iteratorStart){
      i--;
      let str = ``;
      // str+= count;
      str+= uuidv4() + "^" + 
      restaurant_id + "^"
      //some restaurants have three menus
      let menu = {};
      let secondMenu = {};
      let tertiaryMenu = {};

      if(restaurant_id >= 0 && restaurant_id < 1000000){
        menu.brunch = {['item'+[menuCount++]]: {
          date: generateRandomDate(),
          price: randomNumberGenerator(15, 50, 'price'),
          menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
          menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
          ingredients: generateIngredients()
          }
        }
      }
      if(restaurant_id >= 1000000 && restaurant_id < 5000000){
        menu.breakfast = {['item'+[menuCount++]]: {
          date: generateRandomDate(),
          price: randomNumberGenerator(15, 50, 'price'),
          menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
          menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
          ingredients: generateIngredients()
          }
        }
      }
      if(restaurant_id >= 50000 && restaurant_id < 60000){
        menu.lunch = {['item'+[menuCount++]]: {
          date: generateRandomDate(),
          price: randomNumberGenerator(15, 50, 'price'),
          menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
          menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
          ingredients: generateIngredients()
          }
        }
      }
      if(restaurant_id >= 6000000 && restaurant_id < 8000000){
        menu.lunch = {
          ['item'+[menuCount]]: {
          date: generateRandomDate(),
          price: randomNumberGenerator(15, 50, 'price'),
          menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
          menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
          ingredients: generateIngredients()
          }
        },
        secondMenu.dinner = {
            ['item'+[menuCount++]]: {
              date: generateRandomDate(),
              price: randomNumberGenerator(15, 50, 'price'),
              menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
              menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
              ingredients: generateIngredients()
            }
          }
        }
        if(restaurant_id >= 8000000 && restaurant_id < 9000000){
          menu.happy_hour = {
            ['item'+[menuCount]]: {
            date: generateRandomDate(),
            price: randomNumberGenerator(15, 50, 'price'),
            alcoholItem: seedData.alcoholItems[randomNumberGenerator(0, 20)],
            alcoholDescription: seedData.alcoholDescriptions[randomNumberGenerator(0, 20)]
            }
          },
          secondMenu.dinner = {
            ['item'+[menuCount]]: {
              date: generateRandomDate(),
              price: randomNumberGenerator(15, 50, 'price'),
              menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
              menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
              ingredients: generateIngredients()
            }
          },
        tertiaryMenu.special = {
            ['item'+[menuCount++]]: {
              date: generateRandomDate(),
              price: randomNumberGenerator(15, 50, 'price'),
              specialName: seedData.menuItems[randomNumberGenerator(0, 20)],
              description: seedData.menuDescriptions[randomNumberGenerator(0, 20)]
            }
          }
        }
        if(restaurant_id >= 9000000 && restaurant_id < 10000000){
          menu.special = {
            ['item'+[menuCount]]: {
              date: generateRandomDate(),
              price: randomNumberGenerator(15, 50, 'price'),
              specialName: seedData.menuItems[randomNumberGenerator(0, 20)],
              description: seedData.menuDescriptions[randomNumberGenerator(0, 20)]
            }
          },
          secondMenu.alcohol = {
            ['item'+[menuCount++]]: {
            date: generateRandomDate(),
            price: randomNumberGenerator(15, 50, 'price'),
            alcoholItem: seedData.alcoholItems[randomNumberGenerator(0, 20)],
            alcoholDescription: seedData.alcoholDescriptions[randomNumberGenerator(0, 20)]
            }
          }
        }
      str+= JSON.stringify(menu)
      if(secondMenu.dinner || secondMenu.alcohol){
        str+= ',' + JSON.stringify(secondMenu)
      }
      if(tertiaryMenu.special){
        // str+= '^'
        str+= ',' + JSON.stringify(tertiaryMenu)
      }
      if(i !== iteratorStart-1){
        str+= "\n";
      }
      if(menuCount === 11){
        menuCount = 1
      }
      if(i % 10 === 0){
        restaurant_id++;
      }
      if(i % 100000 === 0) {
        console.clear();
        console.log(i);
      }
      if(i === iteratorStart){
        writer.write(str, encoding, callback);
      } else {
        check = writer.write(str, encoding)
      }
      if(!check){
        writer.once('drain', write)
        break;
      }
    }
  }
  write()
}

/* WILL WRITE FILES */
// let stream = fs.createWriteStream(path.join(__dirname + '/records/meals.csv'));
// generateMealResults(0, 99999999, stream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing!")
//   })
// )
