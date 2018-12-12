SELECT
  profile_id, as "profile_id",
  COUNT(goal.id) as count,
FROM goal
GROUP BY profile_id;

SELECT
 goal_id as "goalId",
  avg(time) as "averageTime",
  min(start_date - end_date) as mindiff,
  max(end_date - start_date) as maxdiff,
FROM goal
GROUP BY profile_id;