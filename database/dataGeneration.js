const randomSeedData = require('./randomSeedData')
const fs = require('fs')
const path = require('path')
const randomWords = require('random-words')

let fileNameBreakfast = path.join(__dirname + './records/breakfast/') //1,428,571
let fileNameBrunch = path.join(__dirname + './records/brunch/')
let fileNameLunch = path.join(__dirname + './records/lunch/')
let fileNameDinner = path.join(__dirname + './records/dinner/')
let fileNameAlcohol = path.join(__dirname + './records/alcohol/')

let fileNameSpecial = path.join(__dirname + './records/special/')
let fileNameIngredients = path.join(__dirname + './records/ingredients/') //50
let fileNameMenuItems = path.join(__dirname + './records/menu-items/')

const randomNumberGenerator = function(min=1, max, options){
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
let restaurant_id = 0; //range: 0 - 1,428,571

let menuItemIndex = randomNumberGenerator(0, 20)
let mealDescriptionIndex = randomNumberGenerator(0, 20)
let price = randomNumberGenerator(15, 50, 'price')
let numIngredients = randomNumberGenerator(3, 6)
let ingredients = []
for(var i = 0; i < numIngredients; i++){
  ingredients.push(randomSeedData.ingredients[randomNumberGenerator(0, 51)])
}
console.log(ingredients)



// console.log(randomSeedData.menuItems[menuItemIndex])





//meals: 
//restaurant_id(int not null) unique
//meal_name: INT (foreign key)
//meal_description: (String, 15-35 words)
//price: (String, 12-60)

//specials:
//restaurant_id: (FOREIGN KEY)
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