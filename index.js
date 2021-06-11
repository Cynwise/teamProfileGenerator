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
            generateHtml();
        }

    })
}

function generateHtml() {
    const htmlArray = []
    const initHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <title>Document</title>
    </head>
    <body>
    <header>
        <h2>Project Team</h2>
    </header>
    <div class="container row-12"> `
    htmlArray.push(initHtml);


    for (let i = 0; i < projectTeam.length; i++) {
        let newCard = `
        <div class="card column-4" style="width: 18rem;">
        <div class="card-body">
        <div class="card-header">
            
            <h3 id="larger">${projectTeam[i].name}</h3>
        </div>
        <div class="card-text">
            <p>Id: ${projectTeam[i].id}</p>
            <p>Email: <a href="mailto:${projectTeam[i].email}" ?subject=subject text">${projectTeam[i].email}</a></p>`
        if (projectTeam[i].officeNumber) {
            newCard += `
                <p>Office Number: ${projectTeam[i].officeNumber}</p>`
        } else if (projectTeam[i].github) {
            newCard += `
            <p>Github: <a href="https://github.com/${projectTeam[i].github}" target="_blank">${projectTeam[i].github}</a></p>`
        } else if (projectTeam[i].school) {
            newCard += `
            <p>School: ${projectTeam[i].school}</p>`
        }
        newCard += `</div>
        </div>`
        htmlArray.push(newCard)
    }

    const secondHtml = `
    </div>
    </body>
    
    </html`
    htmlArray.push(secondHtml);



    fs.writeFile('index.html', htmlArray.join(""), (err) => {
        if (err) throw err;
    })
}