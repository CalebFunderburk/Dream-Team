// External requirments
const Employee = require('./Employee')

// Class
class Manager extends Employee {
    constructor(name = '') {

        super(name)
        super(id)
        super(email)

        this.officeNumber = '';
        
    }

    getRole() {
        // Override to return 'Manager'
    }
}

module.exports = Manager