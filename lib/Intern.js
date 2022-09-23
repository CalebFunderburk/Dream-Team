// External requirments
const Employee = require('./Employee')

// Constuctor function
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school

    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

// Export for usage
module.exports = Intern