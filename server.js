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
            choices: ["View All Departments", "Add Department", "View Employees", "Add An Employee", "View Roles", "Update Employee Role", "All Done"]
        }
    ]).then(function(answer){
        if(answer.choice === "View All Departments"){
            viewDepartments();
        } 
        else if(answer.choice === "Add Department"){
            addDepartment();
        }
        else if(answer.choice === "View Employees"){
            viewEmployees();
        }
        else if(answer.choice === "Add An Employee"){
            addEmployee();
        }
        else if(answer.choice === "View Roles"){
            viewRoles();
        }
        else if(answer.choice === "Update Employee Role"){
            updateRole();
        }
        else if(answer.choice === "All Done"){
            console.log("Bye!")
            connection.end();
            return;
        }
    })
};

function viewDepartments(){ // VIEW DEPARTMENTS DONE
    connection.query("SELECT * FROM department", function(error, results){
        if(error) throw error;
        console.table(results);
        startApp();
    })
};

function addDepartment(){ // ADD DEPARTMENT DONE
    console.log("Add an Department here!")
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department_name',
        }
    ]).then(function(answers){
        connection.query("INSERT INTO department SET ?", {
            department_name:answers.department_name
        }, function(error){
           if (error) throw error;
           console.log("Success!")
           startApp();
        })
    })
};


function viewEmployees(){
    console.log("Here are your employees!")
    startApp();
};


function addEmployee(){
    console.log("Add an employee here!")
    startApp();
};

function viewRoles(){
    console.log("Here are your roles!")
    startApp();
};

function updateRole(){
    console.log("Update employee role here!")
    startApp();
};






