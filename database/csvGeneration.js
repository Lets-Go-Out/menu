const seedData = require('./randomSeedData')
const fs = require('fs')
const path = require('path')

// let fileNameIngredients = path.join(__dirname + '/records') //100000 third of ingredients that exist in the world
let restaurant_id = 0;

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

// let mealIndex = randomNumberGenerator(0, 20)
// let menuItem = seedData.menuItems[mealIndex]
// let mealDescriptionIndex = randomNumberGenerator(0, 20)
// let mealDescription = seedData.menuItems[mealDescriptionIndex]
// let price = randomNumberGenerator(15, 50, 'price')

const generateIngredients = function(){
  let numIngredients = randomNumberGenerator(3, 6);
  let ingredients = [];
  for(var i = 0; i < numIngredients; i++){
    ingredients.push(seedData.ingredients[randomNumberGenerator(0, 50)]);
  };
  if(ingredients.length === 3){
    ingredients[3] = null;
    ingredients[4] = null;
  } else if(ingredients.length === 4){
    ingredients[4] = null;
  };
  return ingredients;
};

const generateRandomDate = function(){
  let threeMonths = ["March", "April", "May"];
  return new Date(`${threeMonths[randomNumberGenerator(0, 3)]} ${randomNumberGenerator(0, 29)}, 2019 10:24:00`);
};

const generateMealResults = function(iteratorStart=0, iteratorStop=10){
  let str = ``;
  for(var i = iteratorStart; i < iteratorStop; i++){
    str+= restaurant_id + "^" +
      generateRandomDate() + "^" +
      seedData.menuItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.menuDescriptions[randomNumberGenerator(0, 20)] + "^" +
      generateIngredients()[0] + "^" +
      generateIngredients()[1] + '^' +
      generateIngredients()[2] + '^' +
      generateIngredients()[3] + '^' + 
      generateIngredients()[4] + '^' +
      randomNumberGenerator(15, 50, 'price');
    str+= "\n";
    restaurant_id++;
  }
  return str;
}

const generateAlcoholResults = function(iteratorStart=0, iteratorStop=10){
  let str = ``;
    for(var i = iteratorStart; i < iteratorStop; i++){
    str+= restaurant_id + "^" +
      generateRandomDate() + "^" +
      seedData.alcoholItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.alcoholDescriptions[randomNumberGenerator(0, 20)] + "^" +
      randomNumberGenerator(15, 50, 'price');
    str+= "\n";
    restaurant_id++;
  }
  return str;
}

const generateSpecialResults = function(){
  let str = ``
  for(var i = 0; i < 10; i++){
  str+= restaurant_id + "^" +
    generateRandomDate() + "^" +
    seedData.menuItems[randomNumberGenerator(0, 20)] + "^" +
    seedData.menuDescriptions[randomNumberGenerator(0, 20)] + "^" +
    randomNumberGenerator(15, 50, 'price');
  str+= "\n";
  restaurant_id++;
  };
  return str;
};


let breakfastData = 
`restaurant_id^date^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five^price
${generateMealResults()}
`
let brunchData = 
`restaurant_id^date^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five^price
${generateMealResults()}
`
let lunchData = 
`restaurant_id^date^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five^price
${generateMealResults()}
`
let dinnerData = 
`restaurant_id^date^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five^price
${generateMealResults()}
`
let alcoholData = 
`restaurant_id^date^drink_name^drink_description^price
${generateAlcoholResults()}
`
let specialData = 
`restaurant_id^date^special_name^special_description^price
${generateSpecialResults()}
`

let breakfastFilePath = path.join(__dirname + '/records') ;
let brunchFilePath = path.join(__dirname + '/records');
let lunchFilePath = path.join(__dirname + '/records');
let dinnerFilePath = path.join(__dirname + '/records');
let alcoholFilePath = path.join(__dirname + '/records');
let specialFilePath = path.join(__dirname + '/records');

// fs.writeFileSync(`${breakfastFilePath}/breakfast.csv`, breakfastData);
// fs.writeFileSync(`${brunchFilePath}/brunch.csv`, brunchData);
// fs.writeFileSync(`${lunchFilePath}/lunch.csv`, lunchData);
// fs.writeFileSync(`${dinnerFilePath}/dinner.csv`, dinnerData);
// fs.writeFileSync(`${alcoholFilePath}/alcohol.csv`, alcoholData);
fs.writeFileSync(`${specialFilePath}/special.csv`, specialData);


//meals: 
//restaurant_id(int not null) unique
//meal_name: INT (foreign key)
//meal_description: (String, 15-35 words)
//price: (String, 12-60)

//specials:
//restaurant_id: (FOREIGN KEY)
//date: date range
//meal_name: (String, 3-5 words)
//meal_description: (String, 12-60)

//ingredient table:
//id: FOREIGN KEY
//ingredient name: (String: not null, 5-13 characters, 3-5 words)

//menu items:
//id: FOREIGN KEY
//meal_name: (String 3-5 words)
//ingredient1: (String)
//ingredient2: (String)
//ingredient3: (String)
//ingredient4: (String)
//ingredient5: (String)