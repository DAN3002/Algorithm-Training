SELECT Actor.first_name, Actor.last_name , count(*) AS films
FROM Film_Actor INNER JOIN Actor ON Actor.actor_id = Film_Actor.actor_id
GROUP BY Film_Actor.actor_id, Actor.first_name, Actor.last_name
ORDER BY count(*) DESC
LIMIT 1;