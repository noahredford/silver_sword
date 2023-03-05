const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");
const database = require("./db")



inquirer.prompt([
    {
        name: 'name',
        message: 'What is your Name?',
        type: 'input'
    }
]).then(function(answer){
    console.log(answer);
})

app.post("/api/name", (req, res)=>{
    console.log(req.body.name)
    const name = req.body.name
    const sql = `INSERT INTO department (name) VALUES(?)`
})

 