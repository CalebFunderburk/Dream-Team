// External requirments
const Engineer = require('../lib/Engineer');

// Test for an Engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Caleb', 36, 'calebfunderburk@icloud.com', 'CalebFunderburk');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// Tests for a GitHub name
test('gets engineer github value', () => {
    const engineer = new Engineer('Caleb', 36, 'calebfunderburk@icloud.com', 'CalebFunderburk');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Tests for role return
test('gets role of employee', () => {
    const engineer = new Engineer('Caleb', 36, 'calebfunderburk@icloud.com', 'CalebFunderburk');

    expect(engineer.getRole()).toEqual("Engineer");
});