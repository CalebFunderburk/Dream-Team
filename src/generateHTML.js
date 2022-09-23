const managerHTML = manager => {
    return `
    <div>
        <span>${manager.name}</span>
        <span>${manager.role}</span>
        <ul>
            <li>${manager.id}</li>
            <li>${manager.email}</li>
            <li>${manager.officeNumber}</li>
        </ul>
    </div>
    `
}

const generateHTML = (data) => {

    // Array for employee profiles
    let employeeArray = []

    // Loop through array of employee profiles
    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole()

        // Call the managerHTML function if there is one
        if (role === 'Manager') {
            const managerSection = managerHTML(employee)
            employeeArray.push(managerSection)
        }


    }

    // Combine the strings
    const employeeHTML = employeeArray.join('')

    // Return data to the file being generated
    const generateProfiles = generateFile(employeeHTML)
    return generateProfiles
}

// Creat html file
const generateFile = (employeeHTML) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profiles</title>
      </head>
      <body>
        ${employeeHTML}
      </body>
    </html>
    `
}


// Export for usage
module.exports = generateHTML