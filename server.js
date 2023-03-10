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
    console.log("Here are your employees!");
    connection.query("SELECT * FROM employee", function(error, results){
        if(error) throw error;
        console.table(results);
        startApp();
    })
};


function addEmployee(){
    console.log("Add an employee here!")
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the ID number for the employee?',
            name: 'employee_id',
        },
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'last_name',
        },
        {
            type: 'input',
            message: 'What is the Role ID for this employees position?',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'Who is the manager for this employee?',
            name: 'manager_id',
        },

    ]).then(function(answers){
        connection.query("INSERT INTO employee SET ?", {
            id:answers.employee_id, first_name:answers.first_name, last_name:answers.last_name, role_id:answers.role_id, manager:answers.manager
        }, function(error){
           if (error) throw error;
           console.log("Success!")
           startApp();
        })
    })
};

function viewRoles(){
    console.log("Here are your roles!");
    connection.query("SELECT * FROM position", function(error, results){
        if(error) throw error;
        console.table(results);
        startApp();
    })
};

function updateRole(){
    console.log("Update employee role here!")
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the Role ID for this position?',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'What is the title for this position?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the salary for this position?',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'What is the department ID for this position?',
            name: 'department_id',
        }
    ]).then(function(answers){
        connection.query("INSERT INTO position SET ?", {
            role_id:answers.role_id, title:answers.title, salary:answers.salary, department_id:answers.department_id
        }, function(error){
           if (error) throw error;
           console.log("Success!")
           startApp();
        })
    })
};






