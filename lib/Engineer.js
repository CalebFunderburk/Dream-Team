// External requirments
const Employee = require('./Employee')

// Constuctor function
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)

        this.github = github
        
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

// Export for usage
module.exports = Engineer