### Schema

CREATE DATABASE foodie_db;
USE foodie_db;

CREATE TABLE foodies
(
	id int NOT NULL AUTO_INCREMENT,
	foodie_name varchar(255),
	-- foodie_name varchar(255) NOT NULL,
	foodie_icon varchar(255),
	-- foodie_icon varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	-- 0 is false | 1 is true
	PRIMARY KEY (id)
);

