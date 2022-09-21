// External requirments
const Manager = require('../lib/Manager')

// Test for a Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Caleb', 36, 'calebfunderburk@icloud.com', 7042586473)

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

// Tests for role return
test('gets the role of manager', () => {
    const manager = new Manager('Caleb', 36, 'calebfunderburk@icloud.com', 7042586473)

    expect(manager.getRole()).toEqual('Manager')
})