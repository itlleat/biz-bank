SELECT *
FROM employees
JOIN department ON employees.department = department.id;

SELECT *
FROM employees
JOIN salaries ON employees.department = department.salaries