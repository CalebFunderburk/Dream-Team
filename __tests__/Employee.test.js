const Employee = require('../lib/Employee')

test('gets the name, id, and email for an employee', () => {
    const employee = new Employee('Caleb')

    expect(name).toEqual(expect.any(String))
    expect(id).toEqual(expect.any(String))
    expect(email).toEqual(expect.any(String))
})

test('gets an employees name as a string', () => {
    const employee = new Employee('Caleb')

    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets an employees id as a string', () => {
    const employee = new Employee('Caleb')

    expect(employee.getId()).toEqual(expect.any(String))
})

test('gets an employees email as a string', () => {
    const employee = new Employee('Caleb')

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('returns the title of employee', () => {
    const employee = new Employee('Caleb')

    expect(employee.getRole()).toBe('Employee')
})