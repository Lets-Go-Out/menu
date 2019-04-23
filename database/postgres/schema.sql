
CREATE TABLE breakfast (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20)
); CREATE INDEX ON breakfast (restaurant_id);

CREATE TABLE brunch (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20)
); CREATE INDEX ON brunch (restaurant_id);

CREATE TABLE lunch (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20)
); CREATE INDEX ON lunch (restaurant_id);

CREATE TABLE dinner (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20) 
); CREATE INDEX ON dinner (restaurant_id);

CREATE TABLE happy_hour (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  drink_name varchar(30),
  drink_description  varchar(200)
); CREATE INDEX ON happy_hour (restaurant_id);

CREATE TABLE alcohol (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date,
  price varchar(8),
  drink_name varchar(30),
  drink_description  varchar(200)
); CREATE INDEX ON alcohol (restaurant_id);

CREATE TABLE special (
  item_id SERIAL PRIMARY KEY,
  restaurant_id int NOT NULL,
  date  date, 
  price varchar(8), 
  special_name varchar(40),
  special_description  varchar(60)
); CREATE INDEX ON special (restaurant_id);

