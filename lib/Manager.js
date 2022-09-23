// External requirments
const Employee = require('./Employee')

// Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

// Export for usage
module.exports = Manager