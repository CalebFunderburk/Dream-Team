// External requirments
const inquirer = require('inquirer')

// Inquirer prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
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

    ])
}

promptUser()
    .then(data => {
        console.log(data)
    })