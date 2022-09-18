// Constructor function
class Employee {
    constructor(name, id, email) {

        this.name = name
        this.id = id
        this.email = email
        
    }

    // Return the given name
    getName() {
        return this.name
    }
    
    // Return the given ID
    getId() {
        return this.id
    }

    // Return the given email
    getEmail() {
        return this.email
    }

    // Return Employee as a string
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee