// External requirments
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Empty array for team members
teamArray = []

// Initial prompt to start team creation
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
                    console.log('Please enter the Managers name!')
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
        // Put new object into team array
        teamArray.push(manager)
        console.log(`Welcome ${managerData.name}!`)
    })
}

// Second prompt to figure what to do next
const choicePrompt = () => {
    console.log(`
    ===========
    |MAIN MENU|
    ===========    
    `)
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
            console.log(choiceData.choice)
            // Generate html if 'Finish' was picked
            showData()
        }
    })
}

// Emplyee creation prompt
const employeePrompt = () => {
    console.log(`
    ==============
    |NEW EMPLOYEE|
    ==============
    `)
    // Prompt for user to answer
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the Employees current role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Employees name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Employees ID!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees email?',
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
            name: 'github',
            message: 'What is the Engineers GitHub username?',
            when: (input) => input.role === 'Engineer',
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
            name: 'school',
            message: 'What is the Interns school name?',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the Interns school!')
                    return false
                }
            }
        },
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school } = employeeData
        let employee
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github)
            console.log(employee)
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school)
            console.log(employee)
        }
        teamArray.push(employee)
        choicePrompt()
    })
}

const showData = () => {
    console.log(teamArray)
}

// App initialization
initialPrompt()
    .then(choicePrompt)