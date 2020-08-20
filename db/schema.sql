### Schema

CREATE DATABASE foodie_db;
USE foodie_db;

CREATE TABLE foodie
(
	id int NOT NULL AUTO_INCREMENT,
	foodie_name varchar(255) NOT NULL,
	foodie_icon varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

