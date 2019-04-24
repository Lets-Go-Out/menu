const pool = require('./connect')
const fs = require('fs')
const path = require('path')

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
/*
EXPLAIN ANALYZE SELECT * FROM brunch WHERE brunch.restaurant_id = 9000000;

 */

const randomNumberGenerator = function(min, max, options)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
} 

const generateQueryString = function(){
    let queryString;
    let rando = randomNumberGenerator(0, 9999999)
    if(rando >=0 && rando < 1000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM brunch WHERE brunch.restaurant_id = ${rando};`
    }
    else if(rando >= 1000000 && rando < 5000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM breakfast WHERE breakfast.restaurant_id = ${rando};`
    }
    else if(rando >= 5000000 && rando < 6000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM lunch WHERE lunch.restaurant_id = ${rando};`
    }
    else if(rando >= 6000000 && rando < 8000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM lunch WHERE lunch.restaurant_id = ${rando}; 
        EXPLAIN ANALYZE SELECT * FROM dinner WHERE dinner.restaurant_id = ${rando};`
    }
    else if(rando >= 8000000 && rando < 9000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM happy_hour WHERE happy_hour.restaurant_id = ${rando}; 
        EXPLAIN ANALYZE SELECT * FROM dinner WHERE dinner.restaurant_id = ${rando};
        EXPLAIN ANALYZE SELECT * FROM special WHERE special.restaurant_id = ${rando};`
    }
    else if(rando >= 9000000 && rando < 10000000)
    {
        queryString = `EXPLAIN ANALYZE SELECT * FROM happy_hour WHERE happy_hour.restaurant_id = ${rando}; 
        EXPLAIN ANALYZE SELECT * FROM alcohol WHERE alcohol.restaurant_id = ${rando};
        EXPLAIN ANALYZE SELECT * FROM special WHERE special.restaurant_id = ${rando};`
    }
    
    return queryString;
}

let query = generateQueryString();

const makeManyQueries = function()
{
    let totalTimeOneQuery = ""
    for(var i = 0; i < 1000; i++){
        pool.query(query, (err, res) => 
            {
                // console.log(res, query)
            totalTimeOneQuery += 
                eval(res.rows[2]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + 
                eval(res.rows[3]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + ',';
            }
        );
    }
    fs.writeFileSync(path.join(__dirname,'/records/timePostgres.txt'), totalTimeOneQuery)
}
makeManyQueries()

// SELECT * FROM happy_hour WHERE happy_hour.restaurant_id = 81000000; 
//         SELECT * FROM dinner WHERE dinner.restaurant_id = 81000000;