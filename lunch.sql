DROP DATABASE IF EXISTS mockdata;
CREATE DATABASE IF NOT EXISTS mockdata;

USE mockdata;

CREATE TABLE menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `restaurantID` INT,
    `name` VARCHAR(150),
    `price` VARCHAR(15),
    `description` VARCHAR(600),
    `menu` VARCHAR(20)
);
