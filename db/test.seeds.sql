CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  Name VARCHAR(50),
  Position VARCHAR(50),
  Department VARCHAR(50)
);

INSERT INTO Employees (EmployeeID, Name, Position, Department) VALUES
(1, 'John Doe', 'Manager', 'Sales'),
(2, 'Jane Smith', 'Sales Representative', 'Sales'),
(3, 'Bob Johnson', 'Engineer', 'Engineering'),
(4, 'Mary Brown', 'Designer', 'Design'),
(5, 'Tom Williams', 'Programmer', 'IT');

CREATE TABLE Projections (
  ProjectionID INT PRIMARY KEY,
  EmployeeID INT,
  ProjectionType VARCHAR(50),
  ProjectionAmount DECIMAL(10,2),
  ProjectionDate DATE,
  FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Projections (ProjectionID, EmployeeID, ProjectionType, ProjectionAmount, ProjectionDate) VALUES
(1, 1, 'Sales', 100000, '2023-01-01'),
(2, 2, 'Sales', 50000, '2023-01-01'),
(3, 1, 'Profit', 50000, '2023-01-01'),
(4, 2, 'Profit', 25000, '2023-01-01'),
(5, 3, 'Revenue', 1000000, '2023-01-01');

CREATE TABLE Productivity (
  ProductivityID INT PRIMARY KEY,
  EmployeeID INT,
  ProductivityType VARCHAR(50),
  ProductivityAmount DECIMAL(10,2),
  ProductivityDate DATE,
  FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Productivity (ProductivityID, EmployeeID, ProductivityType, ProductivityAmount, ProductivityDate) VALUES
(1, 1, 'Sales', 100000, '2023-01-01'),
(2, 2, 'Sales', 50000, '2023-01-01'),
(3, 1, 'Profit', 50000, '2023-01-01'),
(4, 2, 'Profit', 25000, '2023-01-01'),
(5, 3, 'Revenue', 1000000, '2023-01-01');

CREATE TABLE CompanyGrowth (
  GrowthID INT PRIMARY KEY,
  GrowthType VARCHAR(50),
  GrowthAmount DECIMAL(10,2),
  GrowthDate DATE
);

INSERT INTO CompanyGrowth (GrowthID, GrowthType, GrowthAmount, GrowthDate) VALUES
(1, 'Revenue', 1000000, '2023-01-01'),
(2, 'Profit', 500000, '2023-01-01'),
(3, 'EmployeeCount', 10, '2023
