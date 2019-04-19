-- CREATE TABLE IF NOT EXISTS restaurant_menus (
--   restaurant_id INT PRIMARY KEY,
--   date DATE,
--   breakfast_menu_item VARCHAR,
--   breakfast_menu_item DESCRIPTION,
--   breakfast_menu_ing_one VARCHAR,
--   breakfast_menu_ing_two VARCHAR,
--   breakfast_menu_ing_three VARCHAR,
--   breakfast_menu_ing_four VARCHAR,
--   breakfast_menu_ing_five VARCHAR,
--   breakfast_price VARCHAR,
--   PRIMARY KEY (user_id, menu_type)
-- );

CREATE TABLE IF NOT EXISTS cycling.restaurant_menus (
  restaurant_id INT PRIMARY KEY,
  date DATE,
  menu_type MAP<text,text>,
); CREATE INDEX menu_type ON restaurant_menus(menu_type);
-- CREATE TABLE cycling.cyclist_category (
--            ... category text,
--            ... points int,
--            ... id UUID,
--            ... lastname text,
--            ... PRIMARY KEY (category, points)
--            ... ) WITH CLUSTERING ORDER BY (points DESC);

