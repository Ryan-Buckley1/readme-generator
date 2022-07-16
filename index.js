// TODO: Include packages needed for this application
const { writeFile } = require("fs/promises");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Description, Table of Contents, Installation,
// Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the project title?",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter a project title!");
        return false;
      }
    },
  },
  {
    name: "description",
    type: "input",
    message: "How would you describe your project?",
  },
  {
    name: "installInst",
    type: "input",
    message: "What are the installation instructions?",
  },
  {
    name: "usage",
    type: "input",
    message: "How does a user use your project?",
  },
  {
    name: "contribution",
    type: "input",
    message: "what are your contribution guidelines?",
  },
  {
    name: "test",
    type: "input",
    message: "What are your testing instructions?",
  },
  {
    name: "license",
    type: "list",
    message: "What license is your application covered by?",
    choices: [
      "MIT",
      "Artistic",
      "Microsoft Public License",
      "The Unlicense",
      "Do What The F*ck You Want To Public License",
    ],
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
    validate: (githubLink) => {
      if (githubLink) {
        return true;
      } else {
        console.log("Please enter a GitHub username!");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is your Email address?",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter an email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await prompt(questions);
  const projectData = await generateMarkdown(answers);
  await writeToFile("readme.md", projectData);
}

// Function call to initialize app
init();
