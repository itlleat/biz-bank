const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'departments_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.get('/create-tables', (req, res) => {
  const departmentsQuery = `
    CREATE TABLE departments (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(30) NOT NULL
    );
  `;
  const revenueQuery = `
    CREATE TABLE revenue (
      revenueID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      revenueType VARCHAR(45) NOT NULL,
      revenueAmount DECIMAL (10, 2),
      revenueDate DATE,
      departmentsID INT,
      FOREIGN KEY (departmentsID) REFERENCES departments(id)
    );
  `;
  const expensesQuery = `
    CREATE TABLE expenses (
      expensesID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      departmentsID INT,
      expensesType VARCHAR(45) NOT NULL,
      expensesAmount DECIMAL(10, 2),
      expensesDate DATE,
      FOREIGN KEY (departmentsID) REFERENCES departments(id)
    );
  `;
  const profitQuery = `
    CREATE TABLE profit (
      profitID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      departmentsID INT,
      profitType VARCHAR(45),
      profitAmount DECIMAL(10, 2),
      FOREIGN KEY (departmentsID) REFERENCES departments(id)
    );
  `;
  const cashFlowQuery = `
    CREATE TABLE cashFlow (
      cashFlowID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      departmentsID INT,
      cashFlowType VARCHAR(45),
      cashFlowAmount DECIMAL(10, 2),
      FOREIGN KEY (departmentsID) REFERENCES departments(id)
    );
  `;
  const salariesQuery = `
    CREATE TABLE salaries (
      salariesID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      salariesAmount DECIMAL(10, 2),
      departmentID INT,
      employeeID INT,
      managerID INT,
      CONSTRAINT FK_salaries_department FOREIGN KEY (departmentID) REFERENCES departments(id),
      CONSTRAINT FK_salaries_employee FOREIGN KEY (employeeID) REFERENCES employees(id),
      CONSTRAINT FK_salaries_manager FOREIGN KEY (managerID) REFERENCES managers(id)
    );
  `;
  const projectionsQuery = `
    CREATE TABLE projections (
      projectionsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      departmentsID INT,
      projectionsType VARCHAR(45),
      projectionsAmount DECIMAL(10, 2),
      FOREIGN KEY (departmentsID) REFERENCES departments(id)
    );
  `;
  const employeesQuery = `
    CREATE TABLE employees (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      departmentID INT,
      FOREIGN KEY (departmentID) REFERENCES departments(id) ON DELETE SET NULL
    );
  `;
  const managersQuery = `
    CREATE TABLE managers (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      departmentID INT,
      employeeID INT,
      CONSTRAINT FK_managers_department FOREIGN KEY (departmentID) REFERENCES departments(id),
      CONSTRAINT FK_managers_employee FOREIGN KEY (employeeID) REFERENCES employees(id) ON DELETE SET NULL
    );
  `;

  connection.query(departmentsQuery, (err) => {
    if (err) {
      console.error('Error querying departments table:', err);
      // Handle the error in some way, such as returning an error message or closing the connection
    } else {
      // Handle the successful query in some way, such as returning the results or processing them
    }
  });
