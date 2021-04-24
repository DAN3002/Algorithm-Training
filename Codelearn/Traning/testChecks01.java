SELECT 
id,
CASE
    WHEN given_answer IS NULL THEN 'no answer'
    WHEN given_answer = correct_answer THEN 'correct'
    ELSE 'incorrect'
END AS checks
FROM Answers
ORDER BY id;