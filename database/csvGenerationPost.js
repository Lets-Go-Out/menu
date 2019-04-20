const seedData = require('./randomSeedData')
const fs = require('fs')
const path = require('path')
// const recordsFilePath = path.join(__dirname + '/records');

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
  return (`2019-${threeMonths[randomNumberGenerator(0, 3)]}-${randomNumberGenerator(10, 29)}`);
};

/* Three functions: generate special results, happy hour, and meal results */

const generateSpecialResults = function(iteratorStart, iteratorStop, writer, encoding, callback){
  let restaurant_id = iteratorStop;
  let check = true;
  let i = iteratorStop;

  function write(){
    while(i >= iteratorStart){
      i--;
      let str = ``;
      str+= restaurant_id + "^" +
      generateRandomDate() + "^" +
      randomNumberGenerator(15, 50, 'price') +  "^" +
      seedData.menuItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.menuDescriptions[randomNumberGenerator(0, 20)];
      str+= "\n";
      if(i !== iteratorStart-1){
        str+= "\n";
      }
      if(i % 10 === 0){
        restaurant_id--;
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

const generateAlcoholAndHappyHourResults = function(iteratorStart, iteratorStop, writer, encoding, callback){
  let restaurant_id = iteratorStop;
  let check = true;
  let i = iteratorStop;

  function write(){
    while(i >= iteratorStart){
      i--;
      let str = ``;
      str += restaurant_id + '^' +
      generateRandomDate() + "^" +
      randomNumberGenerator(15, 50, 'price') +  "^" +
      seedData.alcoholItems[randomNumberGenerator(0, 20)] + "^" +
      seedData.alcoholDescriptions[randomNumberGenerator(0, 20)];
      if(i !== iteratorStart-1){
        str+= "\n";
      }
      if(i % 10 === 0){
        restaurant_id--;
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

const generateMealResults = function(iteratorStart, iteratorStop, writer, encoding, callback){
  let restaurant_id = iteratorStop;
  let check = true;
  let i = iteratorStop;

  function write(){
    while(i >= iteratorStart){
      i--;
      let str = ``;
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
      if(i !== iteratorStart-1){
        str+= "\n";
      }
      if(i % 10 === 0){
        restaurant_id--;
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

/* Actually populating the csv files */
/* call once for breakfast, write 4 million records */
// let breakfastStream = fs.createWriteStream(path.join(__dirname + '/records/breakfast.csv'));
// generateMealResults(1000000, 5000000, breakfastStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing breakfast!")
//   })
// )

/* call once for brunch, write 1 million records (brunch is not common everywhere!) */
// let brunchStream = fs.createWriteStream(path.join(__dirname + '/records/brunch.csv'));
// generateMealResults(0, 1000000, brunchStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing brunch!")
//   })
// )

/* call once for lunch, write 3 million records */
// let lunchStream = fs.createWriteStream(path.join(__dirname + '/records/lunch.csv'));
// generateMealResults(5000000, 8000000, lunchStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing lunch!")
// }))

/* call once for dinner, write 3 million records */
// let dinnerStream = fs.createWriteStream(path.join(__dirname + '/records/dinner.csv'));
// generateMealResults(6000000, 9000000, dinnerStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing dinner!")
// }))

/* call once for happy hour, write 1 million records */
// let happyHourStream = fs.createWriteStream(path.join(__dirname + '/records/happy_hour.csv'));
// generateAlcoholAndHappyHourResults(8000000, 9000000, happyHourStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing happy hour!")
// }))

/* call once for alcohol, write 1 million records */
// let alcoholStream = fs.createWriteStream(path.join(__dirname + '/records/alcohol.csv'));
// generateAlcoholAndHappyHourResults(9000000, 10000000, alcoholStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing alcohol!")
// }))

/* call once for specials, write 2 million records */
// let specialStream = fs.createWriteStream(path.join(__dirname + '/records/special.csv'));
// generateSpecialResults(8000000, 10000000, specialStream, 'utf-8', ((err, success) => {
//   console.log(err || "done writing special!")
// }))