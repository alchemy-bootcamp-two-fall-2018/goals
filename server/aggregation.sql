SELECT profile_id as "profileId",
  COUNT(goal.id) as count, 
  FROM goal
GROUP BY profile_id;


SELECT 
  profile_id,
  MIN(end_date - start_date) as mindiff,
  MAX(end_date - start_date) as maxdiff,
  COUNT(goal.id) as count
FROM goal
GROUP BY profile_id;