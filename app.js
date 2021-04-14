const inquirer = require('inquirer');
// const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is your first name'
        }
    ])
    .then(answers => console.log(answers));
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

//     fs.writeFile('index.html',pageHTML,err =>{
//         if(err) throw err;

//         console.log('Protfolio complete! check out index.html to see the ouput!');
//     } )

