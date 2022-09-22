// External requirments
const inquirer = require('inquirer')

// Inquirer prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the name of the Manager!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Managers employee ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Managers employee ID!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Managers email?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Managers email!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is the Managers office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Managers office number!')
                    return false
                }
            }
        },
    ])
}

promptUser()
    .then(data => {
        console.log(data)
    })