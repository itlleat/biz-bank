SELECT departments.name AS department,
       COALESCE(SUM(revenue.revenueAmount), 0) AS total_revenue,
       COALESCE(SUM(expenses.expensesAmount), 0) AS total_expenses,
       COALESCE(SUM(profit.profitAmount), 0) AS total_profit,
       COALESCE(SUM(cashFlow.cashFlowAmount), 0) AS total_cash_flow
FROM departments
LEFT JOIN revenue
    ON departments.id = revenue.departmentsID
LEFT JOIN expenses
    ON departments.id = expenses.departmentsID
LEFT JOIN profit
    ON departments.id = profit.departmentsID
LEFT JOIN cashFlow
    ON departments.id = cashFlow.departmentsID
GROUP BY departments.name
ORDER BY departments.id;
