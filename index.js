const inquirer = require('inquirer');
const fs = require('fs');


const generatemd = ({ project, description, installation, usage, credits, license, features, struggles, github, githubRepo, deployed }) =>
    `
# ${project}

## Description

${description}

### Installation Instructions

${installation}

### How to use

${usage}

### Credits

${credits}

### License

${license}


### Features
${features}
#### Struggles I have had with this project are...
${struggles}

### Links
Github Page ${github}

Github Repository ${githubRepo}

 Live Link ${deployed}`;

inquirer

    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators with their link, third party assets, tutorials, sources.',
        },
        {
            type: 'list',
            choices: [
                {
                    key: "Apache 2.0",
                    value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                },

                {
                    key: "IPL 1.0",
                    value: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                },
                {
                    key: "MIT",
                    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },
                {
                    key: "ISC",
                    value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },
            ],
            name: 'license',
            message: 'Put license information here'
        },
        {
            type: 'input',
            name: 'features',
            message: 'Describe any special or unique features of this application here.',
        },
        {
            type: 'input',
            name: 'struggles',
            message: 'Talk about any struggles you have had getting this application to work.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Leave a link to your Github page here.',
        },
        {
            type: 'input',
            name: 'githubRepo',
            message: 'Leave a link to this projects Github Repository',
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'Leave a link to the live site.',
        },
    ])
    .then((answers) => {
        const readmeContent = generatemd(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README')
        );
    })
    // const license = ['MIT', 'Apache', 'ISC']
    // const MIT = require('./licenses/MIT');
    // const Apache = require('./licenses/apache')
    // const ISC = require('./licenses/ISC')
    // const [MIT, Apache, ISC] = license