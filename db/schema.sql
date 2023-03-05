DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department ( 
   id INT,
   department_name VARCHAR(30)
 );

CREATE TABLE position (
   role_id INT,
   title VARCHAR(30),
   salary DECIMAL,
   department_id INT
 );

CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);