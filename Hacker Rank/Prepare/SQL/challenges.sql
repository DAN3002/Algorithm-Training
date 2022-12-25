SELECT h.hacker_id, h.name, COUNT(*) AS num_count
FROM Hackers h
JOIN Challenges c ON h.hacker_id = c.hacker_id
GROUP BY h.hacker_id, h.name
HAVING COUNT(*) = (
    SELECT MAX(tmp1.num_count_1)
    FROM (
        SELECT hacker_id, COUNT(*) AS num_count_1
        FROM Challenges
        GROUP BY hacker_id
    ) tmp1
) OR COUNT(*) IN (
    SELECT tmp2.num_count_2
    FROM (
        SELECT hacker_id, COUNT(*) AS num_count_2
        FROM Challenges
        GROUP BY hacker_id
    ) tmp2
    GROUP BY tmp2.num_count_2
    HAVING COUNT(*) = 1
)
ORDER BY num_count DESC, hacker_id;
