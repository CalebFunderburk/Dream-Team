const managerHTML = manager => {
    return `
    <div>
        <h3>${manager.name}</h3>
        </br>
        <h4>Manager</h4>
        <ul>
            <li>ID: ${manager.id}</li>
            <a href='mailto:${manager.email}' target='_blank'><li>Email: ${manager.email}</li></a>
            <a href='tel:${manager.officeNumber}' target='_blank'><li>Office Number: ${manager.officeNumber}</li></a>
        </ul>
    </div>
    `
}

const engineerHTML = engineer => {
    return `
    <div>
        <span>${engineer.name}</span>
        </br>
        <span>Engineer</span>
        <ul>
            <li>${engineer.id}</li>
            <a href='mailto:${engineer.email}' target='_blank'><li>Email: ${engineer.email}</li></a>
            <a href='https://github.com/${engineer.github}' target='_blank'><li>${engineer.github}</li></a>
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

        // Call the engineerHTML function if there is one
        if (role === 'Engineer') {
            const engineerSection = engineerHTML(employee)
            employeeArray.push(engineerSection)
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