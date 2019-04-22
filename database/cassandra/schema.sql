-- sample query SELECT * FROM restaurant_menus WHERE restaurant_id = 6593;

CREATE TABLE IF NOT EXISTS menus.restaurant_menus (
  id UUID,
  restaurant_id INT,
  menu_list text,
  PRIMARY KEY(id, restaurant_id)
); CREATE INDEX restaurant_id on menus.restaurant_menus (restaurant_id);
