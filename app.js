const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(console.log('Please enter you name'));
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(console.log('Please enter your gitHub username'));
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
              if (confirmAbout) {
                return true;
              } else {
                return false;
              }
            }
        }
    ]);
};

const promptProject = protfolioData => {
    //if there's no 'projects' arry property, create one
    if (!protfolioData.projects) {
        protfolioData.projects = [];
    }

    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(console.log('Please enter the name of the project'));
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(console.log('Please enter a description'));
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(console.log('Please enter GitHub link'));
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(portfolioData => {
        protfolioData.projects.push(protfolioData);
        if (portfolioData.confirmAddProject) {
            console.log('going into the if');
            return promptProject(protfolioData);
        } else {
            return portfolioData;
        }
    });
};
//promptUser().then(answers => console.log(answers));
promptUser()
    .then(promptProject)
    .then(portfolioData => {
       const pageHTML = generatePage();

         fs.writeFile('index.html',pageHTML,err =>{
             if(err) throw err;

    } );


    });

const generatePage = require('./src/page-template.js');

