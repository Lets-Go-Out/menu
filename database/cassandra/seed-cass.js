const client = require('./connect')

// const query = COPY menus.restaurant_menus FROM '/Users/jennummerdor/hrphx/sdc/menu/database/cassandra/menus/restaurant_menus/meals.csv' WITH DELIMITER='^';

//(restaurant_id,first_menu,second_menu,third_menu)

const query = `SELECT menu_list FROM menus.restaurant_menus WHERE restaurant_id = 100`

client.execute(query)
  .then(result => console.log('Here it is:', result))
  .catch(err => console.error(err))

// INSERT INTO cycling.restaurant_menus(restaurant_id,date,menu_type) VALUES(30,'2019-04-25',{'breakfast':'{}', 'brunch':'{}'});