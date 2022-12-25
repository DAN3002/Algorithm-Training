SELECT
    CASE WHEN Grade >= 8 THEN Name END,
    Grade,
    Marks
FROM Students
JOIN Grades ON Marks >= Min_mark AND Marks <= Max_mark
ORDER BY Grade DESC, Name, Marks;
