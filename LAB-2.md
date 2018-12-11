# Gotta Have Goals Part 2

* Add industry-standard auth tooling
* Create a summary page

## Daily Code Kata

Complete [today's Kata](https://www.codewars.com/kata/highest-scoring-word)

## Authentication

1. Use `bcryptjs` to hash user's password on signup, and to check password on signin
1. Use `jsonwebtoken` to create user token on auth, and verify user token in protected routes

## Goal Summary

On the home page (`/`), show the user stats about their **completed** goals:

* Count
* Shortest time to completion
* Longest time to completion
* Average time to completion


You will need to add a new route to return the summary goal data:
* `GET` `/api/goals/summary` - 

That route will use a SQL aggregation to retrieve the info for calling user:
* implicit `WHERE user_id = $1` where `$1` is `req.userId`
* **HINT:** You don't need to use a `GROUP BY` for this one
* **HINT:** See `DATEDIFF` in `pqsql` docs!

## Bonus

* Include another route that provides the same goal aggregations, but for a list of all users
  * **HINT:** Same query as above, but you need to not apply the `WHERE` and instead group by user (profile_id)
  * Include the user's name (see two techniques in classwork code)

## Rubric

* Hash password **2pts**
* Use JWT **2pts**
* Goal Summary
  * SQL Query **3pts**
  * Route **1pt**
  * Front-end display on home **2pts**
