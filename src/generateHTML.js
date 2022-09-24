const managerHTML = manager => {
    return `
    <div>
        <h3 class='fs-3'>${manager.name}</h3>
        <h4 class='text-muted fs-4 pl-2'>Manager</h4>
        <ul>
            <li>ID: ${manager.id}</li>
            <a href='mailto:${manager.email}' target='_blank'><li>Email: ${manager.email}</li></a>
            <a href='tel:${manager.officeNumber}' target='_blank'><li>Office Number: ${manager.officeNumber}</li></a>
        </ul>
    </div>`
}

const engineerHTML = engineer => {
    return `
    <div>
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
        <ul>
            <li>${engineer.id}</li>
            <a href='mailto:${engineer.email}' target='_blank'><li>Email: ${engineer.email}</li></a>
            <a href='https://github.com/${engineer.github}' target='_blank'><li>GitHub: ${engineer.github}</li></a>
        </ul>
    </div>`
}

const internHTML = intern => {
    return `
    <div>
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        <ul>
            <li>${intern.id}</li>
            <a href='mailto:${intern.email}' target='_blank'><li>Email: ${intern.email}</li></a>
            <li>School: ${intern.school}</li>
        </ul>
    </div>`  
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

        // Call the internHTML function if there is one
        if (role === 'Intern') {
            const internSection = internHTML(employee)
            employeeArray.push(internSection)
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
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' 
        rel='stylesheet'
        integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' 
        crossorigin='anonymous'>
        <title>Dream Team</title>
      </head>
      <body>
        <nav class='navbar navbar-light bg-light'>
            <div class='container-fluid'>
                <h1 class='navbar-brand fs-1 mx-auto'>Dream Team</h1>
            </div>
        </nav>
        <main>
            <div class='container'>
                <div class='align-items-center'>
                    <h2 class='text-center'>Team Profiles</h2>
                </div>
            </div>
            ${employeeHTML}
        </main>
        <div class='container'>
            <div class='align-items-center'>
                <h5 class='text-muted text-center'>Thank You for using Dream Team!</h5>
            </div>
        </div>
      </body>
    </html>`
}


// Export for usage
module.exports = generateHTML