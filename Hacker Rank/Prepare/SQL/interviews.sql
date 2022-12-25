WITH Submissions_tmp AS (
    SELECT challenge_id,
        SUM(total_submissions) AS total_submissions,
        SUM(total_accepted_submissions) AS total_accepted_submissions
    FROM Submission_Stats
    GROUP BY challenge_id
), Views_tmp AS (
    SELECT challenge_id,
        SUM(total_views) AS total_views,
        SUM(total_unique_views) AS total_unique_views
    FROM View_Stats
    GROUP BY challenge_id
)

SELECT 
    c.contest_id, c.hacker_id, c.name,
    SUM(total_submissions) AS total_submissions,
    SUM(total_accepted_submissions) AS total_accepted_submissions,
    SUM(total_views) AS total_views,
    SUM(total_unique_views) AS total_unique_views
FROM Contests c
JOIN Colleges co ON co.contest_id = c.contest_id
JOIN Challenges ch ON ch.college_id = co.college_id
LEFT JOIN Submissions_tmp st ON st.challenge_id = ch.challenge_id
LEFT JOIN Views_tmp vt ON vt.challenge_id = ch.challenge_id
GROUP BY c.contest_id, c.hacker_id, c.name
HAVING SUM(total_submissions) + SUM(total_accepted_submissions) + SUM(total_views) + SUM(total_unique_views) <> 0
ORDER BY c.contest_id;
