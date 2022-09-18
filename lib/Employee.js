const { default: inquirer } = require("inquirer")

// Class
class Employee {
    constructor(name) {

        this.name = name
        this.id = ''
        this.email = ''
        
    }

    getName() {
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your name!')
                    return false
                }
            }
        })
    }
    
    getId() {

    }

    getEmail() {

    }

    getRole() {
        // Returns 'Employee'
    }
}

module.exports = Employee