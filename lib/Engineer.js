// External requirments
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '') {

        super(name)
        super(id)
        super(email)

        this.github = ''
        
    }

    getGithub() {

    }

    getRole() {
        // Override to return 'Engineer'
    }
}

module.exports = Engineer