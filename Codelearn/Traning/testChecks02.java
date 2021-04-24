SELECT 
COUNT(*) AS point
FROM
(
    SELECT 
    CASE
        WHEN given_answer IS NULL THEN 'no answer'
        WHEN given_answer = correct_answer THEN 'correct'
        ELSE 'incorrect'
    END AS checks
    FROM Answers  
) AS q
WHERE q.checks = 'correct';