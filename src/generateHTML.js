const managerHTML = manager => {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header'>
                <h3 class='fs-3'>${manager.name}</h3>
                <h4 class='text-muted fs-4 pl-2'>Manager</h4>
            </div>
            <div class='card-body'>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href='mailto:${manager.email}' target='_blank'>${manager.email}</p></a>
                <p>Office Number: <a href='tel:${manager.officeNumber}' target='_blank'>${manager.officeNumber}</p></a>
            </div>
        </div>
    </div>`
}

const engineerHTML = engineer => {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header'>
                <h3 class='fs-3'>${engineer.name}</h3>
                <h4 class='text-muted fs-4 pl-2'>Engineer</h4>
            </div>
            <div class='card-body'>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href='mailto:${engineer.email}' target='_blank'>${engineer.email}</p></a>
                <p>GitHub: <a href='https://github.com/${engineer.github}' target='_blank'>${engineer.github}</p></a>
            </div>
        </div>
    </div>`
}

const internHTML = intern => {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header'>
                <h3 class='fs-3'>${intern.name}</h3>
                <h4 class='text-muted fs-4 pl-2'>Intern</h4>
            </div>
            <div class='card-body'>
                <p>ID: ${intern.id}</p>
                <p>Email: <a href='mailto:${intern.email}' target='_blank'>${intern.email}</p></a>
                <p>School: ${intern.school}</p>
            </div>
        </div>
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
        <link rel='stylesheet' href='style.css'>
        <title>Dream Team</title>
      </head>
      <body>
        <nav class='navbar navbar-light bg-success'>
            <div class='container-fluid'>
                <h1 class='navbar-brand fs-1 mx-auto text-light'>Dream Team</h1>
            </div>
        </nav>
        <main>
            <div class='container'>
                <div class='align-items-center'>
                    <h2 class='text-center'>Team Profiles</h2>
                </div>
            </div>
            <div class='container'>
                <div class='row justify-content-center'>
                    ${employeeHTML}
                </div>    
            </div>
        </main>
        <div class='container-fluid bg-success'>
            <div class='align-items-center'>
                <h5 class='text-light text-center my-3'>Thank You for using Dream Team!</h5>
            </div>
        </div>
      </body>
    </html>`
}


// Export for usage
module.exports = generateHTML