-- CREATE TABLE Employees (
--   EmployeeID INT PRIMARY KEY,
--   Name VARCHAR(50),
--   Position VARCHAR(50),
--   Department VARCHAR(50)
-- );

-- INSERT INTO Employees (EmployeeID, Name, Position, Department) VALUES
-- (1, 'John Doe', 'Manager', 'Sales'),
-- (2, 'Jane Smith', 'Sales Representative', 'Sales'),
-- (3, 'Bob Johnson', 'Engineer', 'Engineering'),
-- (4, 'Mary Brown', 'Designer', 'Design'),
-- (5, 'Tom Williams', 'Programmer', 'IT');

-- CREATE TABLE Projections (
--   ProjectionID INT PRIMARY KEY,
--   EmployeeID INT,
--   ProjectionType VARCHAR(50),
--   ProjectionAmount DECIMAL(10,2),
--   ProjectionDate DATE,
--   FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
-- );

-- INSERT INTO Projections (ProjectionID, EmployeeID, ProjectionType, ProjectionAmount, ProjectionDate) VALUES
-- (1, 1, 'Sales', 100000, '2023-01-01'),
-- (2, 2, 'Sales', 50000, '2023-01-01'),
-- (3, 1, 'Profit', 50000, '2023-01-01'),
-- (4, 2, 'Profit', 25000, '2023-01-01'),
-- (5, 3, 'Revenue', 1000000, '2023-01-01');

-- CREATE TABLE Productivity (
--   ProductivityID INT PRIMARY KEY,
--   EmployeeID INT,
--   ProductivityType VARCHAR(50),
--   ProductivityAmount DECIMAL(10,2),
--   ProductivityDate DATE,
--   FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
-- );

-- INSERT INTO Productivity (ProductivityID, EmployeeID, ProductivityType, ProductivityAmount, ProductivityDate) VALUES
-- (1, 1, 'Sales', 100000, '2023-01-01'),
-- (2, 2, 'Sales', 50000, '2023-01-01'),
-- (3, 1, 'Profit', 50000, '2023-01-01'),
-- (4, 2, 'Profit', 25000, '2023-01-01'),
-- (5, 3, 'Revenue', 1000000, '2023-01-01');

-- CREATE TABLE CompanyGrowth (
--   GrowthID INT PRIMARY KEY,
--   GrowthType VARCHAR(50),
--   GrowthAmount DECIMAL(10,2),
--   GrowthDate DATE
-- );

-- INSERT INTO CompanyGrowth (GrowthID, GrowthType, GrowthAmount, GrowthDate) VALUES
-- (1, 'Revenue', 1000000, '2023-01-01'),
-- (2, 'Profit', 500000, '2023-01-01'),
-- (3, 'EmployeeCount', 10, '2023

-- Departments
INSERT INTO departments (departmentID, name)
VALUES
  (1, 'Manufacturing'),
  (2, 'Research and Development'),
  (3, 'Genetic Engineering'),
  (4, 'Mutational Research'),
  (5, 'Data Security'),
  (6, 'Physical Security'),
  (7, 'Law Team');

-- Salaries
INSERT INTO salaries (salariesID, departmentID, employeesID, managersID, salaryType, salarymount, salaryDate)
VALUES
  (1, 1, 1, 1, 'Salary', 95000, '2023-02-09'),
  (2, 2, 1, 2, 'Contract', 115000, '2022-08-14'),
  (1, 3, 2, 3, 'Salary', 160000, '2021-07-04'),
  (2, 4, 4, 1, 'Contract', 480000, '2023-03-14'),
  (1, 5, 7, 1, 'Salary', 210000, '2022-04-20'),
  (1, 6, 4, 2, 'Salary', 25000, '2022-09-10'),
  (3, 7, 1, 1, 'Retainer', 3000000, '2016-03-28');

-- Expenses
INSERT INTO expenses (expensesID, departmentID, employeesID, managersID, expensesType, expensesAmount, expensesDate)
VALUES
  (1, 1, 3, 2, 'Type 1', 500, '2023-03-01'),
  (2, 2, 2, 1, 'Type 2', 1000, '2023-03-02'),
  (3, 3, 5, 3, 'Type 3', 1500, '2023-03-03'),
  (4, 4, 1, 3, 'Type 4', 2000, '2023-03-04'),
  (5, 5, 6, 1, 'Type 5', 2500, '2023-03-05'),
  (6, 6, 4, 1, 'Type 6', 3000, '2023-03-06'),
  (7, 7, 7, 2, 'Type 7', 3500, '2023-03-07');

-- Profit
INSERT INTO profit (profitID, departmentID)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7);

-- Cash flow
INSERT INTO cashFlow (cashFlowID, departmentID)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7);

-- Revenue
INSERT INTO revenue (revenueID, departmentID, revenueType, revenueAmount)
VALUES
  (1, 1, 'Type 1', 5000),
  (2, 2, 'Type 2', 10000),
  (3, 3, 'Type 3', 15000),
  (4
