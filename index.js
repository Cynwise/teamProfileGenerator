const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const projectTeam = [];
inputManager();

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
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Enter manager email address:',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Enter manager office phone number:',
            name: 'officeNumber',
        }
    ])
    .then(function (data) {

        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const officeNumber = data.officeNumber;
        const teamManager = new Manager(managerName, managerId, managerEmail, officeNumber);
        projectTeam.push(teamManager);
        inputTeam();
    })
}

function inputTeam() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'Select a member category: ',
            choices: ['Engineer', 'Intern', 'Team Completed'],
            name: 'teamMember'
        }
    ])
    .then(answers => {

        if(answers.teamMember === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter Engineer name:',
                    name: 'engineerName',
                },
                {
                    type: 'input',
                    message: 'Enter ID number:',
                    name: 'engineerId',
                },
                {
                    type: 'input',
                    message: 'Enter Engineer email address:',
                    name: 'engineerEmail',
                },
                {
                    type: 'input',
                    message: 'Enter Engineer github name:',
                    name: 'githubName',
                }
            ])
            .then(function(data){
                const engineerName = data.engineerName;
                const engineerId = data.engineerId;
                const engineerEmail = data.engineerEmail;
                const githubName = data.githubName;
                const teamEngineer = new Engineer(engineerName, engineerId, engineerEmail, githubName);
                projectTeam.push(teamEngineer);
                inputTeam()
            })
        }else if (answers.teamMember === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter Intern name:',
                    name: 'internName',
                },
                {
                    type: 'input',
                    message: 'Enter ID number:',
                    name: 'internId',
                },
                {
                    type: 'input',
                    message: 'Enter intern email address:',
                    name: 'internEmail',
                },
                {
                    type: 'input',
                    message: 'Enter intern school:',
                    name: 'schoolName',
                }
            ])
            .then(function(data){
                const internName = data.internName;
                const internId = data.internId;
                const internEmail = data.internEmail;
                const schoolName = data.schoolName;
                const teamIntern = new Intern(internName, internId, internEmail, schoolName);
                projectTeam.push(teamIntern);
                inputTeam()
            })

        }else if (answers.teamMember === 'Team Completed'){

            console.log('compiling team information:');
            console.log(projectTeam);
        }

    })
}
