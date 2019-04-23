
CREATE TABLE breakfast (
  restaurant_id int NOT NULL,
  date  date,    
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20),
  price varchar(8),
  PRIMARY KEY (restaurant_id)  
);

CREATE TABLE brunch (
  restaurant_id int NOT NULL,
  date  date,    
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20),
  price varchar(8),
  PRIMARY KEY (restaurant_id)  
);

CREATE TABLE lunch (
  restaurant_id int NOT NULL,
  date  date,    
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20),
  price varchar(8),
  PRIMARY KEY (restaurant_id)  
);

CREATE TABLE dinner (
  restaurant_id int NOT NULL,
  date  date,    
  meal_name varchar(40),
  meal_description  varchar(60),
  ingredient_one varchar(20), 
  ingredient_two varchar(20),
  ingredient_three varchar(20),
  ingredient_four varchar(20),
  ingredient_five varchar(20),
  price varchar(8),
  PRIMARY KEY (restaurant_id)  
);

CREATE TABLE alcohol (
  restaurant_id int NOT NULL,
  date  TIMESTAMP WITH TIME ZONE,    
  drink_name varchar(30),
  drink_description  varchar(200),
  price varchar(8),
  PRIMARY KEY (restaurant_id)   
);

CREATE TABLE special (
  restaurant_id int NOT NULL,
  date  date,    
  special_name varchar(40),
  special_description  varchar(60),
  price varchar(8),
  PRIMARY KEY (restaurant_id)  
);

