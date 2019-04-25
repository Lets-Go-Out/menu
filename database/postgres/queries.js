const pool = require('./connect')
const fs = require('fs')
const path = require('path')

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
            totalTimeOneQuery += 
                eval(res.rows[2]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + 
                eval(res.rows[3]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + ',';
            }
        );
    }
    fs.writeFileSync(path.join(__dirname,'/records/totalTimePostgres.txt'), totalTimeOneQuery)
}
makeManyQueries()


// for(var i = 0; i < 1000; i++){
//     (function getQueryTime(num){
//         setTimeout(()=>{
//         let query = generateQueryString()
//         pool.query(query)
//         .then(result => {
//             return totalTimeOneQuery += 
//             eval(result.rows[2]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + 
//             eval(result.rows[3]['QUERY PLAN'].split(":")[1].split("ms")[0].trim()) + ','
//             })
//         }, 1000 * i + 1)
//     })(i)
// }