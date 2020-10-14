
var inquirer = require("inquirer"); //require in inquirer package

var fs = require("fs"); //require in fs package

var generateMarkdown = require("./utils/generateMarkdown") //require in generate markdown


const questions = [ // array of questions for user
    {
    type: "input",
    message: "What is the title of your project?", //question 
    name: "title", //variable name
    },
    {
    type: "input", 
    message: "Please add a project description: ", //question 
    name: "description", //variable name
    },
    {
    type: "input", 
    message: "Please enter your GitHub username: ", //question 
    name: "username", //variable name
    },
    {
    type: "input", 
    message: "Please enter email address: ", //question 
    name: "email", //variable name
    },
    {
    type: "input", 
    message: "Please provide information to the user about using the repo: ", //question 
    name: "usage", //variable name
    },
    {
    type: "input", 
    message: "Please provide information to the user about contributing to the repo: ", //question 
    name: "contributions", //variable name
    },
    {
    type: "input", 
    message: "Command needed to install dependencies: ", //question 
    name: "installation", //variable name
    default: "npm i",
    },
    {
    type: "input ", 
    message: "Command needed to run tests: ", //question 
    name: "test", //variable name
    default: "npm test",
    },
    {
    type: "list", 
    message: "Which license do you require?", //question 
    name: "license", //variable name
    choices: ["MIT", "APACHE 2.0", "BSD 3", "None"],
    },
  
   
];

inquirer //passing questions array to the inquirer package 
  .prompt(
   questions
  )
  .then(function(data) { 

    console.log(data) //data object containging user questions 

    fs.writeFile("README_GEN.md", generateMarkdown(data), function(err) {

        if (err) {
            return console.log(err);
        }
        
        console.log("Added Title")
    })

  });

// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile("READMETEST.md",questions, function(){
    //     console.log("something")

    //  })

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
