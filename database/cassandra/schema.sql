-- sample query SELECT * FROM restaurant_menus WHERE restaurant_id = 6593;

CREATE TABLE IF NOT EXISTS menus.restaurant_menus (
  restaurant_id INT PRIMARY KEY,
  menu_list text,
); 

CREATE INDEX restaurant_id on menus.restaurant_menus (restaurant_id);


CREATE KEYSPACE IF NOT EXISTS menus WITH REPLICATION = {'class' : 'NetworkTopologyStrategy', 'datacenter1' : 3};