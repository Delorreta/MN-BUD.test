document.addEventListener("DOMContentLoaded", function() {
    const employees = [
        { name: 'Іван ', hours: 160 },
        { name: 'Петро ', hours: 152 },
        { name: 'Василь ', hours: 148 },
        { name: 'Олег ', hours: 143 },
        { name: 'Любомир ', hours: 140 },
    ];

    const employeeTable = document.getElementById('employeeTable');

    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.classList.add('fade-in');
        row.style.animationDelay = `${index * 0.1}s`;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.hours}</td>
        `;
        
        employeeTable.appendChild(row);
    });
});
