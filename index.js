const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function inputManager() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter manager name:',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Enter ID number:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter manager email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter manager office phone number:',
            name: 'officeNumber',
        }
    ])
    .then(function (data) {

        const name = data.managerName;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamManager = new Manager(name, id, email, officeNumber);
        console.log(teamManager);
    })
}

inputManager();