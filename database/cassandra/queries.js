const client = require('./connect')
const fs = require('fs')
const path = require('path')

//(restaurant_id,first_menu,second_menu,third_menu)

    let query = `SELECT * FROM menus.restaurant_menus WHERE restaurant_id = 8999999`
    client.execute(query)
    .then(result => console.log('here it is:', result))
    .catch(err => console.error(err))
// client.execute(query)
//   .then(result => console.log('Here it is:', result))
//   .catch(err => console.error(err))

// INSERT INTO cycling.restaurant_menus(restaurant_id,date,menu_type) VALUES(30,'2019-04-25',{'breakfast':'{}', 'brunch':'{}'});

