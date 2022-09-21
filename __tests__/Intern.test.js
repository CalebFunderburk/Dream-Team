// External requirments
const Intern = require('../lib/Intern')

// Test for an Intern object
test('creates an Intern object', () => {
    const intern = new Intern('Caleb', 36, 'calebfunderburk@icloud.com', 'Porter Ridge')

    expect(intern.school).toEqual(expect.any(String))
}) 

// Tests for a school name
test('gets intern school value', () => {
    const intern = new Intern('Caleb', 36, 'calebfunderburk@icloud.com', 'CalebFunderburk')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

// Tests for role return
test('gets the role of intern', () => {
    const intern = new Intern('Caleb', 36, 'calebfunderburk@icloud.com', 'CalebFunderburk')

    expect(intern.getRole()).toEqual('Intern')
}) 