### Schema

CREATE DATABASE brugers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL default 0,
	PRIMARY KEY (id)
);