-- sample query SELECT * FROM restaurant_menus WHERE restaurant_id = 6593;

CREATE TABLE IF NOT EXISTS menus.restaurant_menus (
  restaurant_id INT PRIMARY KEY,
  menu_list text,
); 
ALTER TABLE menus.restaurant_menus WITH compaction = { ‘class’ : ‘LeveledCompactionStrategy’ };

CREATE INDEX restaurant_id on menus.restaurant_menus (restaurant_id);


-- CREATE KEYSPACE IF NOT EXISTS menus WITH REPLICATION = {'class' : 'NetworkTopologyStrategy', 'dc1' : 3};
-- CREATE KEYSPACE IF NOT EXISTS menus WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 } 
