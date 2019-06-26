CREATE DATABASE movies;
USE movies;

CREATE TABLE movies (
  id int AUTO_INCREMENT PRIMARY KEY,
  title text NOT NULL
)

INSERT INTO movies (title) VALUES ('Lion King');