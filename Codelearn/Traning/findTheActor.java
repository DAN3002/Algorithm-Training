SELECT
a.first_name, a.last_name
FROM 
actor AS a
WHERE
a.actor_id IN
(SELECT fa.actor_id 
FROM film_actor fa
WHERE fa.film_id  = (SELECT film_id FROM film WHERE title = 'ACADEMY DINOSAUR'))
ORDER BY
a.first_name, a.last_name;