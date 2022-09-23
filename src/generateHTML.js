const managerSection = manager => {
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

generateHTML = (data) => {
    // Array for employee profiles
    let employeeArray = []

    data.forEach(function (value) {
        const employee = data[i]
        const role = employee.getRole()
    }
    
    
    )
}

// Export for usage
module.exports = generateHTML