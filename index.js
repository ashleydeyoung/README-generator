var inquirer = require("inquirer");
var fs = require('fs');
var generate = require("./utils/generateMarkdown");

const questions = [{
    type: "input",
    message: "What is your Github username?",
    name: "author"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the url of the project?",
    name: "url"
  },
  {
    type: "input",
    message: "What is your poject name?",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
        "MIT",
        "APACHE 2.0",
        "PGL 3.0",
        "BSD 3",
        "None"
    ]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install"
  },
  {
    type: "input",
    message: "What command should be run to install tests?",
    name: "tests"
  },
  {
    type: "input",
    message: "What does the user need to know about your repo?",
    name: "usage"
  }
]

let fileName = "fileName.md"

function writeToFile(data) {
    
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        data.badge = encodeURI(data.license)
        data = generate(data)
        writeToFile(data);

    })

}

init();
