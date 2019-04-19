const seedData = require('./randomSeedData')
const fs = require('fs')
const path = require('path')
const recordsFilePath = path.join(__dirname + '/records');

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

// unused functions but left here for reference
// let mealIndex = randomNumberGenerator(0, 20)
// let menuItem = seedData.menuItems[mealIndex]
// let mealDescriptionIndex = randomNumberGenerator(0, 20)
// let mealDescription = seedData.menuItems[mealDescriptionIndex]
// let price = randomNumberGenerator(15, 50, 'price')

/* //////////// helper functions embedded in CSV file generator-created to save space //////////// */
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
  let threeMonths = ["03", "04", "05"];
  return (`${threeMonths[randomNumberGenerator(0, 3)]}-${randomNumberGenerator(10, 29)}-2019`);
};

const generateMealResults = function(iteratorStart=0, iteratorStop=10){
  let str = ``;
  for(var i = iteratorStart; i < iteratorStop; i++){
    str+= restaurant_id + "^" +
      generateRandomDate() + "^" +
      randomNumberGenerator(15, 50, 'price') +  "^" +
      seedData.menuItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.menuDescriptions[randomNumberGenerator(0, 20)] + "^" +
      generateIngredients()[0] + "^" +
      generateIngredients()[1] + '^' +
      generateIngredients()[2] + '^' +
      generateIngredients()[3] + '^' + 
      generateIngredients()[4];
    str+= "\n";
  if(i % 10 === 0){
    restaurant_id++;
    }
  };
  return str;
}

const generateAlcoholResults = function(iteratorStart=0, iteratorStop=10){
  let str = ``;
    for(var i = iteratorStart; i < iteratorStop; i++){
    str+= restaurant_id + "^" +
      generateRandomDate() + "^" +
      randomNumberGenerator(15, 50, 'price') +  "^" +
      seedData.alcoholItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.alcoholDescriptions[randomNumberGenerator(0, 20)];
    str+= "\n";
    if(i % 10 === 0){
      restaurant_id++;
      }
    };
  return str;
}

const generateSpecialResults = function(iteratorStart, iteratorStop){
  let str = ``
  for(var i = iteratorStart; i < iteratorStop; i++){
  str+= restaurant_id + "^" +
    generateRandomDate() + "^" +
    randomNumberGenerator(15, 50, 'price') +  "^" +
    seedData.menuItems[randomNumberGenerator(0, 20)] + "^" +
    seedData.menuDescriptions[randomNumberGenerator(0, 20)];
  str+= "\n";
  if(i % 10 === 0){
    restaurant_id++;
    }
  };
  console.log(restaurant_id)
  return str;
};


/** WRITE ONE MILLION TIMES, THANKS NODE.JS */
function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

/* //////////// Uncomment each function to generate CSV files //////////// */
restaurant_id = 1000000
let breakfastData = 
`restaurant_id^date^price^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five
${generateMealResults(1000000, 6000000)}
`
restaurant_id = 1000000
let brunchData = 
`restaurant_id^date^price^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five
${generateMealResults(0, 1000000)}
`
restaurant_id = 3000000
let lunchData = 
`restaurant_id^date^price^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five
${generateMealResults(3000000, 8000000)}
`
restaurant_id = 5000000
let dinnerData = 
`restaurant_id^date^price^meal_name^meal_description^ingredient_one^ingredient_two^ingredient_three^ingredient_four^ingredient_five
${generateMealResults(5000000, 9000000)}
`

restaurant_id = 9000000
let alcoholData = 
`restaurant_id^date^drink_name^drink_description^price
${generateAlcoholResults(9000000, 10000000)}
`

restaurant_id = 8000000
let specialData = 
`restaurant_id^date^price^special_name^special_description
${generateSpecialResults(8000000, 10000000)}
`


/* //////////// Actual writing of the files using the data above...each sequenced file is broken up into 1M entries to prevent crashing //////////// */
// fs.writeFileSync(`${recordsFilePath}/breakfast2.csv`, breakfastData);
// fs.writeFileSync(`${recordsFilePath}/brunch.csv`, brunchData);
// fs.writeFileSync(`${recordsFilePath}/lunch2.csv`, lunchData);
// fs.writeFileSync(`${recordsFilePath}/dinner2.csv`, dinnerData);
// fs.writeFileSync(`${recordsFilePath}/alcohol.csv`, alcoholData);
// fs.writeFileSync(`${recordsFilePath}/special2.csv`, specialData); 


/* testing writeStream-this will create files 1 second slower than using synchronous version and has the same file limitations (about 1M files before exhausting memory on my laptop)

let writeStream = fs.createWriteStream(path.join(__dirname + '/records/test.csv'));
writeStream.write(breakfastData, 'utf-8')

*/


