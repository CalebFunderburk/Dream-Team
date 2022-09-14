// External requirments
const Employee = require('./Employee')

// Class
class Intern extends Employee {
    constructor(name = '') {

        super(name)
        super(id)
        super(email)

        this.school = ''
    }

    getSchool() {

    }

    getRole() {
        // Override to return 'Intern'
    }
}

module.exports = Intern