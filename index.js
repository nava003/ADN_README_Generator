// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Insert your Project Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.\n  Include screenshots as needed:",
  },
  {
    type: "input",
    name: "contributing",
    message: "If your project is an application or package that welcomes other developers to contribute,\n  include guidelines in how to do so: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for your project. Provide examples on how to run them here:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the following licenses:",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'Other', 'None'],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email Address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const fileName = "README_DEMO.md";

    const readContent = generateMarkdown(data);

    writeToFile(fileName, readContent);
  });
}

// Function call to initialize app
init();
