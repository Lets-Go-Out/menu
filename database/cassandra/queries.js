const client = require('./connect')


//(restaurant_id,first_menu,second_menu,third_menu)

const query = `SELECT menu_list FROM menus.restaurant_menus WHERE restaurant_id = 100`

// client.execute(query)
  // .then(result => console.log('Here it is:', result))
  // .catch(err => console.error(err))

// INSERT INTO cycling.restaurant_menus(restaurant_id,date,menu_type) VALUES(30,'2019-04-25',{'breakfast':'{}', 'brunch':'{}'});