const seedData = require('../randomSeedData')
const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')


/* //////////// helper functions embedded in CSV file generator-created to save space //////////// */

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

const createRegularMenu = function(name){
  menu = {};
  menu[name] = {};
  for(var i = 0; i <= 10; i++){
    menu[name]['item'+[i]] = {
      date: generateRandomDate(),
      price: randomNumberGenerator(15, 50, 'price'),
      menuItem: seedData.menuItems[randomNumberGenerator(0, 20)],
      menuDescription: seedData.menuDescriptions[randomNumberGenerator(0, 20)],
      ingredients: generateIngredients()
    }
  }
  return menu;
}

const createAlcoholMenu = function(name){
  let menu = {};
  menu[name] = {}
  for(var i = 0; i <= 10; i++){
      menu[name]['item'+[i]] = {
      date: generateRandomDate(),
      price: randomNumberGenerator(15, 50, 'price'),
      alcoholItem: seedData.alcoholItems[randomNumberGenerator(0, 20)],
      alcoholDescription: seedData.alcoholDescriptions[randomNumberGenerator(0, 20)]
    }
  }
  return menu;
}

const createSpecialMenu = function(name){
  let menu = {};
  menu[name] ={};
  for(var i = 0; i <=10; i++){
    menu[name]['item'+[i]] = {
      date: generateRandomDate(),
      price: randomNumberGenerator(15, 50, 'price'),
      specialName: seedData.menuItems[randomNumberGenerator(0, 20)],
      description: seedData.menuDescriptions[randomNumberGenerator(0, 20)]
    }
  }
  return menu;
}


const generateMealResults = function(iteratorStart, iteratorStop, writer, encoding, callback){
  let restaurant_id = iteratorStop;
  let check = true;
  let i = iteratorStop;
  // let uniqueIDStr = "";

  function write(){
    while(i >= iteratorStart){
      i--;
      // let uniqueID = uuidv4()
      let str = ``;
      str+=restaurant_id + "^";
      // str+= uniqueID + "^"

      if(restaurant_id >= 0 && restaurant_id < 2000000){
        let breakfastMenu = createRegularMenu('breakfast');
        let brunchMenu = createRegularMenu('brunch');
        let specialMenu = createSpecialMenu('special');
        str+= JSON.stringify(breakfastMenu);
        str+= JSON.stringify(brunchMenu);
        str+= JSON.stringify(specialMenu);
      }
      if(restaurant_id >= 2000000 && restaurant_id < 5000000){
        let specialMenu = createSpecialMenu('special');
        let breakfastMenu = createRegularMenu('breakfast');
        let lunchMenu = createRegularMenu('lunch');
        str+= JSON.stringify(breakfastMenu);
        str+= JSON.stringify(lunchMenu);
        str+= JSON.stringify(specialMenu);
      }
      if(restaurant_id >= 5000000 && restaurant_id < 6000000){
        let breakfastMenu = createRegularMenu('breakfast');
        let lunchMenu = createRegularMenu('lunch');
        let dinnerMenu = createRegularMenu('dinner');
        let specialMenu = createSpecialMenu('special');
        str+= JSON.stringify(breakfastMenu);
        str+= JSON.stringify(lunchMenu);
        str+= JSON.stringify(dinnerMenu);
        str+= JSON.stringify(specialMenu);
      }
      if(restaurant_id >= 6000000 && restaurant_id < 80000000){
        let specialMenu = createSpecialMenu('special');
        let lunchMenu = createRegularMenu('lunch');
        let dinnerMenu = createRegularMenu('dinner');
        str+= JSON.stringify(lunchMenu)
        str+= JSON.stringify(dinnerMenu);
        str+= JSON.stringify(specialMenu);
      }
      if(restaurant_id >= 8000000 && restaurant_id < 9000000){
        let happyHourMenu = createAlcoholMenu('happy_hour');
        let dinnerMenu = createRegularMenu('dinner');
        let specialMenu = createSpecialMenu('special');
        str+= JSON.stringify(happyHourMenu) 
        str+= JSON.stringify(dinnerMenu) 
        str+= JSON.stringify(specialMenu);
      }
      if(restaurant_id >= 9000000 && restaurant_id < 10000000){
        let dinnerMenu = createRegularMenu('dinner');
        let alcoholMenu = createAlcoholMenu('alcohol');
        let specialMenu = createSpecialMenu('special');
        str+= JSON.stringify(dinnerMenu);
        str+= JSON.stringify(alcoholMenu);
        str+= JSON.stringify(specialMenu);
      }
      // str+="^" + restaurant_id--;
      restaurant_id--
      if(i !== iteratorStart-1){
        str+= "\n";
      }
      if(i % 10000 === 0) {
        // uniqueIDStr+= uniqueID + "," + "\n"
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
    // fs.writeFileSync((path.join(__dirname + '/records/.txt')), uniqueIDStr)
  }
  write()
}

/* WILL WRITE FILES */

let stream1 = fs.createWriteStream(path.join(__dirname + '/records/meals1.csv'));
generateMealResults(0, 2999999, stream1, 'utf-8', ((err, success) => {
  console.log(err || "done writing!")
  })
);

// let stream2 = fs.createWriteStream(path.join(__dirname + '/records/meals2.csv'));
// generateMealResults(3000000, 6999999, stream2, 'utf-8', ((err, success) => {
//   console.log(err || "done writing!")
//   })
// );

// let stream3 = fs.createWriteStream(path.join(__dirname + '/records/meals3.csv'));
// generateMealResults(7000000, 9999999, stream3, 'utf-8', ((err, success) => {
//   console.log(err || "done writing!")
//   })
// );
