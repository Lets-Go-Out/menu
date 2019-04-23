const pool = require('./connect')

// pool.query(`COPY example(test,num)
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/example.csv'
//   DELIMITER '^' CSV header`, (err, res) => {
//     console.log(err || res);
//     pool.end(); 
//   });

pool.query(`COPY alcohol(restaurant_id,date,price,drink_name,drink_description) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/alcohol.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY breakfast(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/breakfast.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY brunch(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/brunch.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY dinner(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/dinner.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY happy_hour(restaurant_id,date,price,drink_name,drink_description) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/happy_hour.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY lunch(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/lunch.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
});

pool.query(`COPY special(restaurant_id,date,price,special_name,special_description) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/postgres/records/special.csv' DELIMITER '^'`, (err, res) => {
  console.log(err || res) 
  pool.end()
});