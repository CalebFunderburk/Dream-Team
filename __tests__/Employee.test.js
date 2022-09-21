// External requirments
const Employee = require('../lib/Employee')

// Test for an emplyee object
test('creates an employee object', () => {
    const employee = new Employee('Caleb', 36, 'calebfunderburk@icloud.com')

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

// Test for a name
test('gets employee name', () => {
    const employee = new Employee('Caleb', 36, 'calebfunderburk@icloud.com')

    expect(employee.getName()).toEqual(expect.any(String))
})

// Test for an ID
test('gets employee ID', () => {
    const employee = new Employee('Caleb', 36, 'calebfunderburk@icloud.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

// Test for an email
test('gets employee email', () => {
    const employee = new Employee('Caleb', 36, 'calebfunderburk@icloud.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

// Tests for role return
test('gets role of employee', () => {
    const employee = new Employee('Caleb', 36, 'calebfunderburk@icloud.com')

    expect(employee.getRole()).toEqual("Employee")
})