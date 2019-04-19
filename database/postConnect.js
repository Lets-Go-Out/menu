const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'jennummerdor',
  host: 'localhost',
  max: 100,
  database: 'menus',
  password: '627277',
  port: 5432,
})

module.exports = pool;

// pool.query(`COPY example(test,num)
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/example.csv'
//   DELIMITER '^' CSV header`, (err, res) => {
//     console.log(err || res);
//     pool.end(); 
//   });

pool.query(`COPY alcohol(restaurant_id,date,price,drink_name,drink_description) 
  FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/alcohol.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
  console.log(err || res) 
  pool.end()
});

// pool.query(`COPY breakfast(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/breakfast2.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
//   console.log(err || res) 
//   pool.end() 
// });

// pool.query(`COPY brunch(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/brunch.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
//   console.log(err || res) 
//   pool.end()
// });

// pool.query(`COPY dinner(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/dinner2.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
//   console.log(err || res) 
//   pool.end()
// });

// pool.query(`COPY lunch(restaurant_id,date,price,meal_name,meal_description,ingredient_one,ingredient_two,ingredient_three,ingredient_four,ingredient_five) 
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/lunch2.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
//   console.log(err || res) 
//   pool.end()
// });

// pool.query(`COPY special(restaurant_id,date,price,special_name,special_description) 
//   FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/special2.csv' DELIMITER '^' CSV HEADER`, (err, res) => {
//   console.log(err || res) 
//   pool.end()
// });