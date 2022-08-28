import 'dotenv/config';
import inquirer from 'inquirer';
import mysql from 'mysql2';
import cTable from 'console.table';



const connection = mysql.createConnection({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to Employee Tracker');
    promptData();
})

function promptData() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: [
                'View all departments.',
                'View all roles.',
                'View all employees.',
                'Add a department.',
                'Add a role',
                'Add an employee.',
                'Update an employees role.'

            ]
        })
        .then(answer => {
            switch (answer.start) {
                case 'View all departments':
                    displayDepartment();
                    promptData();
                    break;
                case 'View all roles':
                    displayRoles();
                    break;
                case 'View all employees':
                    displayEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                case 'Add an employee':
                    addEmployee();
                case 'Update an employee':
                    updateEmployee();
                    break;
            }
        }
        )
};



function displayDepartment() {
    connection.query(`SELECT * FROM department`, (err, result) => {
        if (err) {
            console.long(err)
        }
        cTable(result);
        promptData();
    })}