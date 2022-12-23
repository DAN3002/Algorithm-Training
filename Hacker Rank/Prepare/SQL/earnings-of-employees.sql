SELECT CONCAT(salary * months, ' ', COUNT(*))
FROM Employee
WHERE salary * months = (
    SELECT MAX(salary * months)
    FROM Employee
)
GROUP BY salary * months;
