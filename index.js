// External requirments
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')

// Empty array for team members
teamArray = []

// Inquirer prompts code
const initialPrompt = () => {
    // Prompts for user to answer
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'officeNumber',
            message: 'What is the Managers office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Managers office number!')
                    return false
                }
            }
        }
    ])
    // Use the provided data to create a new Manager object
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData
        const manager = new Manager (name, id, email, officeNumber)
        teamArray.push(manager)
        console.log(`Welcome ${managerData.name}!`)
    })
}

const choicePrompt = () => {
    // Prompt for user to answer
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: ['Add Employee', 'Finish']
        }
    ])
    // Conditional to reach the next desired step
    .then(choiceData => {
        if(choiceData.choice === 'Add Employee') {
            employeePrompt()
        } else {
            // Generate html if 'Finish' was picked
        }
    })
}

// App initialization
initialPrompt()
    .then(choicePrompt)