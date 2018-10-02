/*
Given a square matrix, calculate the absolute difference between the sums
of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15.
The right to left diagonal = 3 + 5 + 9 = 17.
Their absolute difference is 15 - 17 = 2.
*/

(() => {

  const arr = [[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]]
  let lRdiagonal = 0
  let RLdiagonal = 0

  for(var i = 0; i < arr.length; i++){
    lRdiagonal += arr[i][i]
    RLdiagonal += arr[i][arr.length - (i + 1)]
  }


  console.log(lRdiagonal, RLdiagonal)
  // console.log(RLdiagonal)

})()