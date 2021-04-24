SELECT 
ROW_NUMBER() OVER(ORDER BY id) AS newId,
id AS oldId
FROM items;