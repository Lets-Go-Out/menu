const pool = require('./connect')

//these queries will be run in the terminal to determine the amount of time that each one takes. Running them from node returns strange results.

/* 
get request
EXPLAIN ANALYZE SELECT * FROM breakfast, brunch WHERE breakfast.restaurant_id = 1000003 AND brunch.restaurant_id = 1000003;

post request
EXPLAIN ANALYZE INSERT INTO dinner(restaurant_id, date, price, meal_name, meal_description, ingredient_one, ingredient_two, ingredient_three, ingredient_four, ingredient_five) VALUES (8999989,'2019-03-17', '$47.50',  'Honeyberry and jaggery', 'A crunchy salad featuring gochu jang and fresh sprout', 'swordfish', 'cauliflower', 'creme fraiche', null, null )

update/patch request (rare)
EXPLAIN ANALYZE UPDATE brunch SET price = '$24.95' WHERE restaurant_id = 939995 AND meal_name = 'Radish and bacon salad';

delete request (rare)
EXPLAIN ANALYZE DELETE from dinner WHERE restaurant_id = 9000000;

*/
