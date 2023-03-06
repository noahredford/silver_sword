const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localHost',
    port: '3306',
    user: 'root',
    password: 'Nr80635!',
    database: 'employee_db'
},
    startApp()
);

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            message: "Hello! What would you like to do today?",
            name: "choice",
            choices: ["View All Employees", "Add Employee", "Update An Employee", "All Done"]
        }
    ]).then(function(answer){
        if(answer.choice === "View All Employees"){
            viewEmployees();
        } 
        else if(answer.choice === "Add Employee"){
            addEmployee();
        }
        else if(answer.choice === "Update An Employee"){
            updateEmployee();
        }
        else if(answer.choice === "All Done"){
            console.log("Bye!")
            connection.end();
            return;
        }
    })
};

function viewEmployees(){
    console.log('Here are your employees!')
};

function addEmployee(){
    console.log("Add an employee here!")

};

function updateEmployee(){
    console.log("Update employee here!")
};







