const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localHost',
    port: '3306',
    user: 'root',
    password: 'Nr80635!',
    database: 'employee_db'
});

connection.connect(function(error) {
    if (error) {
      return console.error('error: ' + error.message);
    }
    console.log('Connected to the MySQL server.');
  });


 