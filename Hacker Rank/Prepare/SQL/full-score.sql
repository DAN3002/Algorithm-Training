SELECT t.hacker_id, t.name
FROM (
    SELECT s.hacker_id, h.name
    FROM Submissions s
    JOIN Challenges c ON s.challenge_id = c.challenge_id
    JOIN Difficulty d ON d.difficulty_level = c.difficulty_level
    JOIN Hackers h ON h.hacker_id = s.hacker_id
    WHERE s.score = d.score
) t
GROUP BY t.hacker_id, t.name
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC, t.hacker_id;
