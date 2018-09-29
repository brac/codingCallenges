# Comparing Triplets

## Hackerrank instructions
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet a=(a[0],a[1],a[2]), and the rating for Bob's challenge to be the triplet b=(b[0],b[1],b[2]).

Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i],then Alice is awarded  point.
If a[i] < b[i], then Bob is awarded  point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Input
`5 6 7`
`3 6 10`

Output
`1 1`

Things I learned:
Validate your input. Most of the trouble was assuming the value was an int and it was a string due to capturing input via `process.argv`

You only need to loop thought the first array, since you will be comparing the values directly across arrays.